import React, { Component } from 'react';
import { HomePage } from '../pages/home/HomePage';
import { AppFooter } from '../components/AppFooter';
import { AppErrorBoundary } from './AppErrorBoundary';

class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <React.Fragment>
                    <AppErrorBoundary error={false}>
                        <HomePage/>
                        <AppFooter/>
                    </AppErrorBoundary>
                </React.Fragment>
            </React.StrictMode>
        );
    }
}

export default App;
