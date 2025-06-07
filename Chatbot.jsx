import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I am your study helper bot. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "This is a demo bot response." }]);
    setInput("");
  }

  return (
    <div style={{ maxWidth: 400, margin: "32px auto", background: "#fff", borderRadius: 8, padding: 16 }}>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.from === "user" ? "right" : "left", margin: "8px 0" }}>
            <span style={{ background: msg.from === "user" ? "#dbeafe" : "#e5e7eb", padding: 8, borderRadius: 4 }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your question..."
        style={{ width: "70%", padding: 8, marginRight: 8 }}
      />
      <button onClick={sendMessage} style={{ padding: 8 }}>Send</button>
    </div>
  );
}