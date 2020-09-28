import { useCallback } from 'react';
import { IToasterMessage } from '../../models/toasterNotification.model';

type Props = {
  message: IToasterMessage,
  onRemove: (id) => void
}

export const ToasterMessage = ({ message, onRemove }: Props): JSX.Element => {
  const handlerRemove = useCallback(() => {
    onRemove(message.id);
  }, [onRemove, message]);

  return (
    <div className={`toaster-message ${message.type}`}>
      <p>{message.text}</p>
      <button type="button" className="icon-close" onClick={handlerRemove}>&times;</button>
    </div>
  );
};
