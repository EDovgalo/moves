type Props = {
  title: string,
  handlerClick?: any
}

export const DropdownMenuItem = ({ title, handlerClick }: Props):JSX.Element => (
  <li
    role="presentation"
    className="list-items__item"
    onClick={handlerClick}
  >
    {title}
  </li>
);
