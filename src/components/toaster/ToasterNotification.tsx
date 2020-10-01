import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { ToasterMessage } from './ToasterMessage';
import { IToasterMessage } from '../../models/toasterNotification.model';
import './ToasterNotification.scss';

const mapStateToProps = state => ({
  notificationMessage: state.movies.notificationMessage,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>

const ToasterNotification = ({ notificationMessage }: Props): JSX.Element => {
  const [messages, setMessages] = useState([]);
  const currentMessages = useRef(messages);

  const handlerRemoveMessage = (id: number) => {
    const filteredMessages = currentMessages.current.filter(item => item.id !== id);
    currentMessages.current = filteredMessages;
    setMessages(filteredMessages);
  };

  useEffect(() => {
    if (notificationMessage) {
      currentMessages.current.push(notificationMessage);
      setMessages([...currentMessages.current]);
      setTimeout(() => {
        handlerRemoveMessage(notificationMessage.id);
      }, 3000);
    }
  }, [notificationMessage]);

  return (
    <div className="toaster-container">
      {currentMessages.current.map((item: IToasterMessage) => (
        <ToasterMessage
          key={item.id}
          message={item}
          onRemove={handlerRemoveMessage}
          />
      ))}
    </div>
  );
};

export default connector(ToasterNotification);
