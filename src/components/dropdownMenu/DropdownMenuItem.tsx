type Props = {
    title: string,
    handlerClick?: any
}

export const DropdownMenuItem = ({ title, handlerClick }: Props) => {
    return <li className="list-items__item" onClick={handlerClick}>{title}</li>;
};
