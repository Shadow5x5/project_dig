import './App.css';
import MainPage from './pages/MainPage';
import './fonts.css';
import { Suspense } from 'react';

function App() {
    return (
        <div className='App'>
            <Suspense fallback={<div>Loading...</div>}>
                <MainPage />
            </Suspense>
        </div>
    );
}

export default App;
