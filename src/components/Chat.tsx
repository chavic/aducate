import { useState } from 'react';
import { useState, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // TODO: Initialize WebSocket connection
    // Replace 'ws://backend-service-url' with the actual backend WebSocket service URL
    const newSocket = new WebSocket(process.env.NEXT_PUBLIC_CHAT_WS_URL);
    setSocket(newSocket);
    newSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    return () => newSocket.close();
  }, [setSocket]);

  const sendMessage = () => {
    if (input.trim()) {
    if (input.trim() && socket) {
      const message = { user: 'student', text: input };
      socket.send(JSON.stringify(message)); // Send message through WebSocket
      setMessages([...messages, message]);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message.user}: {message.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
