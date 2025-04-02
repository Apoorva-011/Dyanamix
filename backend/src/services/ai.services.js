const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getResponse(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    model: "deepseek-r1-distill-llama-70b",
    messages: [
      {
        role: "user",
        content: prompt,
      },
      {
        role: "system",
        content: `
               
        Can you also convert the improved code version to Java, C, and C++? 
        Can you also give time and space complexities for the improved code version? 
        While responding, can you use this format? 
        Suggestions
        Improved code in Python
        Improved code in Java, c, and C++. 
        Time and space complexities 
        Personalized learning links
                `,
      },
    ],
  });

  return chatCompletion.choices[0].message.content;
}

module.exports = getResponse;
