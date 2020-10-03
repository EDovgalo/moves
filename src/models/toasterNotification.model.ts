// eslint-disable-next-line no-shadow
export enum ToasterMessageType {
  SUCCESS= 'success',
  ERROR = 'error'
}

export interface IToasterMessage {
  id: number,
  type: ToasterMessageType,
  text: string
}

export class ToasterMessage {
  constructor(public text: string,
              public type = ToasterMessageType.SUCCESS,
              public id = new Date().valueOf()) {
  }
}
