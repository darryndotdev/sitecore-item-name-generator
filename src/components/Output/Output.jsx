import { useState } from 'react';

const Output = ({ text }) => {
    const [buttonText, setButtonText] = useState('Copy to clipboard');

    function handleSubmit(e) {
        e.preventDefault();

        if (!text) return;
        navigator.clipboard.writeText(text);

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
                    defaultValue={text}
                    rows='1'
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
