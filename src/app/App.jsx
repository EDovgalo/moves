import React from 'react';
import { HomePage } from '../pages/home/HomePage';
import { AppFooter } from '../components/AppFooter';
import { AppErrorBoundary } from './AppErrorBoundary';

const App = () => {
    return <React.StrictMode>
        <React.Fragment>
            <AppErrorBoundary>
                <HomePage/>
                <AppFooter/>
            </AppErrorBoundary>
        </React.Fragment>
    </React.StrictMode>;
};
export default App;
