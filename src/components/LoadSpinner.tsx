import './LoadSpinner.scss';

type Props = {
    children: any
    isLoading: boolean
}

export const LoadSpinner = ({ children, isLoading }: Props) => {

    const loadSpinner = <div className="load-container">
        <div className="lds-dual-ring"></div>
    </div>;

    return isLoading ? loadSpinner : children;
};
