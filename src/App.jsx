import { useState } from 'react';

import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import Centralised from './components/UI/Centralised/Centralised';
import Output from './components/Output/Output';

function App() {
    const [text, setText] = useState('');
    return (
        <>
            <Centralised>
                <Hero />
                <Form onSetText={setText} />
                <Output text={text} />
            </Centralised>
        </>
    );
}

export default App;
