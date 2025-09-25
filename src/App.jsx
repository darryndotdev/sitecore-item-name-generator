import { useState } from 'react';

import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import Centralised from './components/UI/Centralised/Centralised';
import Output from './components/Output/Output';

function App() {
    const [textToConvert, setTextToConvert] = useState('');
    return (
        <>
            <Centralised>
                <Hero />
                <Form onSetTextToConvert={setTextToConvert} />
                <Output textToConvert={textToConvert} />
            </Centralised>
        </>
    );
}

export default App;
