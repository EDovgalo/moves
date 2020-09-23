import { useCallback } from 'react';
import { Message } from './Toaster';

type Props = {
  message: Message,
  onRemove: (id) => void
}

export const ToasterMessage = ({ message, onRemove }: Props): JSX.Element => {
  const handlerRemove = useCallback(() => {
    onRemove(message.id);
  }, [onRemove]);

  return (
    <div className={`toaster-message ${message.type}`}>
      <p>{message.text}</p>
      <button type="button" className="icon-close" onClick={handlerRemove}>&times;</button>
    </div>
  );
};
