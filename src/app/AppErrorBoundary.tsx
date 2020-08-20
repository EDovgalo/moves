import { Component, ReactNode } from 'react';

type Props = {
    children: ReactNode,
}

type State = {
    hasError: boolean
}

export class AppErrorBoundary extends Component<Props, State> {

    state = { hasError: false };

    private errorMessage = <div>
        <p>something went wrong please to
            <a href="mailto:react-moves@test.com?subject=App global error"> contact us</a>
        </p>
    </div>;

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? this.errorMessage : this.props.children;
    }
}
