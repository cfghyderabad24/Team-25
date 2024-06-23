// src/components/Messages/MessageList.js
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import API from '../../utils/api';
import Message from './Message';

const MessageList = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await API.get('/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Fetch messages error:', error);
        // Handle error appropriately in your UI
      }
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      senderId: user._id,
      senderName: `${user.firstName} ${user.lastName}`,
      content
    };

    try {
      const response = await API.post('/messages/send', newMessage);
      setMessages([...messages, response.data]);
      setContent('');
    } catch (error) {
      console.error('Send message error:', error);
      // Handle error appropriately in your UI
    }
  };

  return (
    <div>
      <h2>Messages</h2>
      <div>
        {messages.map((message) => (
          <Message key={message._id} message={message} userId={user._id} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageList;
