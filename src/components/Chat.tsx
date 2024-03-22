import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // TODO: Initialize WebSocket connection
    const newSocket = new WebSocket('ws://backend-service-url');
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const sendMessage = () => {
    if (input.trim()) {
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
