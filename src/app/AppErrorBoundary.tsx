import { Component } from 'react';

type Props = {
  children: any,
}

type State = {
  hasError: boolean
}

export class AppErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  private errorMessage =
    <div>
      <p>
        something went wrong please to
        <a href="mailto:react-moves@test.com?subject=App global error"> contact us</a>
      </p>
    </div>;

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? this.errorMessage : children;
  }
}
