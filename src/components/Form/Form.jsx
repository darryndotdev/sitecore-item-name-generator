import { useState } from 'react';

const Form = ({ onSetText }) => {
    const [textToConvert, setTextToConvert] = useState('');

    function processText(input) {
        const processed = input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s]/g, '')
            .split(/\s+/)
            .join('-');

        const item = `-${processed}`;

        return item;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!textToConvert) return;

        onSetText(processText(textToConvert));
    }

    function handleReset() {
        setTextToConvert('');
        onSetText('');
    }

    return (
        <>
            <h2>Paste your text</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={textToConvert}
                    onChange={(e) => setTextToConvert(e.target.value)}
                    rows='1'
                    cols='40'
                ></textarea>
                <div className='grid'>
                    <button>Convert text</button>
                    <button onClick={handleReset} className='outline'>
                        Reset
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
