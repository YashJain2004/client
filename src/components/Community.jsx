
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './style_community.css';

const Community = () => {
  const socket = io('http://localhost:8000');

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  

  useEffect(() => {
    if (isNameEntered) {
      socket.on('user-joined', (newName) => {
        if (newName && newName.trim() !== userName) {
          appendMessage(`${newName} joined the chat`, 'right');
        }
      });

      socket.on('receive', (data) => {
        console.log('Received message:', data);
        if (data && data.name && data.message && data.name !== userName) {
          // Display the message only if it's not from the user
          appendMessage(`${data.name}: ${data.message}`, 'left');
        }
      });

      socket.on('left', (name) => {
        if (name && name.trim() !== userName) {
          appendMessage(`${name} left the chat`, 'right');
        }
      });

      // Clean up the socket event listeners when the component unmounts
      return () => {
        socket.off('user-joined');
        socket.off('receive');
        socket.off('left');
      };
    }
  }, [isNameEntered, userName]);

  const appendMessage = (message, position) => {
    console.log('Appending message:', message, 'Position:', position);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message,
        position: position === 'left' && userName !== 'You' ? 'left' : 'right',
      },
    ]);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    let newName = e.target.nameInput.value;
    if (newName.trim() !== '') {
      socket.emit('new-user-joined', newName);
      setUserName(newName);
      setIsNameEntered(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageInput.trim() !== '') {
      const messageData = {
        message: messageInput,
        name: userName,
        
      };
      appendMessage(`You: ${messageInput}`, 'right');
      // Emit the "send" event to the server with the message data
      socket.emit('send', messageData);
      setMessageInput('');
    }
  };

  return (
    <div>
      <nav>
        <img className="logo" src="logo.png" alt="" />
        <h2 className="maintitle">
          Welcome to <span className="title">Meow!</span>
        </h2>
      </nav>

      {!isNameEntered ? (
        <div className="name-input text-center mt-5">
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              name="nameInput"
              placeholder="Enter your name"
            />
            <button className="btn mx-2" type="submit">
              Enter
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.position}`}>
                {message.message}
              </div>
            ))}
          </div>

          <div className="send">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="messageInp"
                id="messageInp"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button className="btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;










