import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SApp } from './assets/styles/app.styles';
import Homepage from './components/Homepage';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

function App() {
    return (
        <SApp>
            <Routes>
                <Route path='/'>
                    <Route index element={<Homepage />} />
                    <Route path='timer' element={<Timer />} />
                    <Route path='countdown' element={<Countdown />} />
                </Route>
            </Routes>
        </SApp>
    );
}

export default App;
