import React, { useEffect, useState } from 'react';
import { Message } from './Toaster';
import { ToasterMessage } from './ToasterMessage';
import './ToasterContainer.scss';

type CallbackFn = (message) => void;

type Props = {
  bindFns: CallbackFn
}

export const ToasterContainer = ({ bindFns }: Props): JSX.Element => {
  const [messages, setMessages] = useState([]);
  const addMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  const removeMessage = (id: number) => {
    const filteredMessages = messages.filter(item => item.id !== id);
    setMessages(filteredMessages);
  };

  useEffect(() => {
    bindFns(addMessage);
  }, [messages]);

  return (
    <div className="toaster-container">
      {messages.map((item: Message) => (
        <ToasterMessage
          key={item.id}
          message={item}
          onRemove={removeMessage}
          />
      ))}
    </div>
  );
};
