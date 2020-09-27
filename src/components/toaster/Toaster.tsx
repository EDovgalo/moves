import ReactDOM from 'react-dom';
import { ToasterContainer } from './ToasterContainer';

// eslint-disable-next-line no-shadow
enum MessageType {
  SUCCESS= 'success',
  ERROR = 'error'
}

export type Message = {
  id: number,
  text: string,
  type: MessageType
}

export class Toaster {
  private addMessage: (message: Message) => void;

  constructor() {
    const el = document.createElement('div');
    el.id = 'toaster';
    document.body.appendChild(el);
    ReactDOM.render(
      <ToasterContainer bindFns={this.bindFns} />,
      el,
    );
  }

  bindFns = (addMessage: (message: Message) => void): void => {
    this.addMessage = addMessage;
  };

  success(text: string): void {
    if (this.addMessage) {
      this.addMessage({ id: new Date().valueOf(), text, type: MessageType.SUCCESS });
    }
  }

  error(error: Error): void {
    if (this.addMessage) {
      this.addMessage({ id: new Date().valueOf(), text: error.message, type: MessageType.ERROR });
    }
  }
}
