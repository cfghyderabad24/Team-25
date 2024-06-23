// src/components/Messages/Message.js
import React from 'react';

const Message = ({ message, userId }) => (
  <div style={{ textAlign: message.senderId === userId ? 'right' : 'left' }}>
    <p><strong>{message.senderId === userId ? 'You' : message.senderName}</strong>: {message.content}</p>
  </div>
);

export default Message;
