import React, { useCallback, useEffect, useState } from 'react';
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

  const handlerRemoveMessage = useCallback((id: number) => {
    const filteredMessages = messages.filter(item => item.id !== id);
    setMessages(filteredMessages);
  }, [messages]);

  useEffect(() => {
    if (notificationMessage) {
      setMessages([...messages, notificationMessage]);
      const { id } = notificationMessage;
      setTimeout(() => { handlerRemoveMessage(id); },
        3000);
    }
  }, [notificationMessage]);

  return (
    <div className="toaster-container">
      {messages.map((item: IToasterMessage) => (
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
