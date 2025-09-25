import { useState } from 'react';

const CopyToClipboard = ({ text, className }) => {
    const [buttonText, setButtonText] = useState('Copy to clipboard');

    function handleCopyToClipboard() {
        if (!text) return;

        navigator.clipboard.writeText(text);

        setButtonText('Copied!');
        setTimeout(() => {
            setButtonText('Copy to clipboard');
        }, 2000);
    }

    return (
        <button className={className} onClick={handleCopyToClipboard}>
            {buttonText}
        </button>
    );
};

export default CopyToClipboard;
