type Props = {
    title: string,
    value?: any
}

export const MovieModalItem = ({ title, value }: Props) => {
    return <div className='movie-modal-wrapper'>
        <p className='movie-modal-title'>{title}</p>
        <input className='movie-modal-item' value={value} onChange={() => {}}/>
    </div>;
};
