import { useState } from 'react';

const Output = ({ textToConvert }) => {
    const [buttonText, setButtonText] = useState('Copy to clipboard');

    function handleSubmit(e) {
        e.preventDefault();

        if (!textToConvert) return;
        navigator.clipboard.writeText(textToConvert);

        setButtonText('Copied!');
        setTimeout(() => {
            setButtonText('Copy to clipboard');
        }, 2000);
    }

    return (
        <>
            <h2>Copy transformed text</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    defaultValue={textToConvert}
                    rows='4'
                    cols='40'
                    readOnly={true}
                ></textarea>
                <div className='grid'>
                    <button>{buttonText}</button>
                </div>
            </form>
        </>
    );
};

export default Output;
