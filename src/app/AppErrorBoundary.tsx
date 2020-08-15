import React from 'react';

type Props = {
    children: React.ReactNode,
    error?: boolean
}
export const AppErrorBoundary = ({ children, error }: Props) => {

    const errorMessage = <div>
        <p>something went wrong please to
            <a href="mailto:react-moves@test.com?subject=App global error"> contact us</a></p>
    </div>;

    return error ? errorMessage : children;
};
