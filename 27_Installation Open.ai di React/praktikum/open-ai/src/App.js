import { useState } from "react";
import OpenAI from "openai";
import "./assets/bootstrap/bootstrap.min.css";
import "./App.css";

function App() {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  const handleClick = async () => {
    setChats([
      ...chats,
      {
        q: prompt,
        a: null,
      },
    ]);

    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      setChats([
        ...chats,
        {
          q: prompt,
          a: response.choices[0].message.content
        }
      ])
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="main">
      <h3>GPT-4 Playground</h3>
      <div className="chat-box">
        {chats.map((chat) => {
          return (
            <>
              <p className="question">Q: {chat["q"]}</p>
              <p className="answer">A:
              {chat["a"] ? ` ${chat["a"]}`: (
                <div
                  className="spinner-border text-success loading"
                  role="status"
                ></div>
              )}
              </p>
            </>
          );
        })}
      </div>
      <textarea
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Send a message"
        className="textarea"
        style={{ width: "400px", height: "100px" }}
      ></textarea>

      <button
        onClick={handleClick}
        disabled={loading || prompt.length === 0}
        className="btn btn-success"
        style={{ display: "block" }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </main>
  );
}

export default App;
