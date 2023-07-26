import { useState, useEffect } from "react";
import socket from "./socket";

function SocketIO() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [room, setRoom] = useState("some room");


  // function handleJoinRoom() {
// }
useEffect(() => {
  socket.emit('join', room);
},[]);

  useEffect(() => {
    if (socket) {
      socket.on('message', message => {
          setMessages(messages => [...messages, message]);
      });
  }
  }, [socket]);

  //   useEffect(() => {
  //     if (socket) {
  //         socket.on('message', message => {
  //             setMessages(messages => [...messages, message]);
  //         });
  //     }
  // }, [socket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", room , inputValue);
    setInputValue("");
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SocketIO;