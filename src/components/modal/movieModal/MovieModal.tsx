import { MovieModalItem } from './MovieModalItem';
import { ModalContainer } from '../ModalContainer';
import { IMovie } from '../../../pages/home/HomePage';
import './MovieModal.scss';

type Props = {
    handlerClose: any,
    handlerSubmit: any,
    isShow: boolean,
    modalTitle?: string,
    data: IMovie
}

export const MovieModal = ({
                               data,
                               handlerClose,
                               handlerSubmit,
                               isShow,
                               modalTitle = 'add movie',
                           }: Props) => {
    return <ModalContainer isShow={isShow} modalTitle={modalTitle} handlerClose={handlerClose}>

        <div className='movie-modal__body'>
            <MovieModalItem title='title' value={data ? data.title : ''}/>
            <MovieModalItem title='release date' value={data ? data.releaseDate : ''}/>
            <MovieModalItem title='movie url'/>
            <MovieModalItem title='genre'/>
            <MovieModalItem title='overview'/>
            <MovieModalItem title='runtime'/>
        </div>
        <div className="movie-modal-controls">
            <button className="add-btn movie-modal-controls__btn--reset">reset</button>
            <button className="add-btn pink-button">submit</button>
        </div>
    </ModalContainer>;
};
