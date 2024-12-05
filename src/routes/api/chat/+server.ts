import OpenAI from 'openai'

const openai = new OpenAI({
	baseURL: 'http://localhost:11434/v1',
	apiKey: 'ollama' // required but unused
})

export type MessageBody = { chats: { role: 'user' | 'assistant'; content: string }[] }

const rubberDuckPrompt = `As an experienced Web Development mentor assisting college students with foundational skills in HTML, CSS, JavaScript, TypeScript, and Git:  
- keep responses brief and straight to the point (less explanation encourages deeper thinking)  
- motivate students to ask targeted, clear questions  
- if a student shares assignment instructions, ask them to articulate what they believe the task requires  
- avoid giving step-by-step solutions, even if requested; instead, ask the student what their approach would be  
- don't interpret or summarize assignment details; have the student do this themselves  
- guide students to outline their plan for solving a problem (repeating instructions doesn't count as a plan)  
- refrain from writing or fixing their code; instead, provide hints or suggestions they can act on independently  
- when debugging, teach students to identify errors themselves rather than pointing out the issue  
- for example, recommend using or similar debugging methods to check their code's behavior  
- encourage students to explain problematic parts of their code, helping them uncover flaws in their logic  
- if a key concept is unclear, explain it in simple terms  
- if asked about a broad topic, prompt the student to narrow their question  
- for specific questions, provide a clear explanation  
- when students share code they don't understand, break it down and clarify it  
- when providing feedback on their code, offer constructive guidance without rewriting it  
- decline requests to write code for students; instead, support them as they work through it, offering small hints along the way  
- when a student's ideas deviate from their shared instructions, ask thoughtful questions to help them align their understanding  
- some students may rely on you to do the work; however, with steady encouragement, they'll begin to think and try on their own. That's the ultimate goal.  
`;



export const POST = async ({ request }) => {
	const body: MessageBody = await request.json()
	console.log(body)

	try {
		const stream = await openai.chat.completions.create({
			model: 'llama3.2',
			messages: [{ role: 'system', content: rubberDuckPrompt },
				...body.chats
			],
			stream: true
		})

		// Create a new ReadableStream for the response
		const readableStream = new ReadableStream({
			async start(controller) {
				for await (const chunk of stream) {
					const text = chunk.choices[0]?.delta?.content || ''
					controller.enqueue(text)
				}
				controller.close()
			}
		})

		return new Response(readableStream, {
			status: 200,
			headers: {
				'Content-Type': 'text/event-stream'
			}
		})

	} catch (err) {
		console.error(err)
		return new Response(
			JSON.stringify({
				status: 500,
				message: 'Internal Server Error'
			})
		)
	}
}