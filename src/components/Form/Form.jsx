import { useState } from 'react';

const Form = ({ onSetTextToConvert }) => {
    const [text, setText] = useState('');
    const [option, setOption] = useState('');

    function processText(input) {
        const parts = input
            .split('\n')
            .map((x) => x.replace(/\s+/g, ' ').trim())
            .filter((x) => x.length > 0);

        if (option === 'paragraph') {
            const wrapped = parts.map((x) => `<p>${x}</p>`).join('\n');
            return wrapped;
        }
        if (option === 'bold') {
            const wrapped = parts
                .map((x) => `<strong>${x}</strong>`)
                .join('\n');
            return wrapped;
        }
        if (option === 'unordered') {
            const wrapped = parts.map((x) => `      <li>${x}</li>`).join('\n');
            return `<ul>\n${wrapped}\n</ul>`;
        }
        if (option === 'ordered') {
            const wrapped = parts.map((x) => `      <li>${x}</li>`).join('\n');
            return `<ol>\n${wrapped}\n</ol>`;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!text) return;

        onSetTextToConvert(processText(text));
    }

    function handleReset() {
        setText('');
        onSetTextToConvert('');
    }

    return (
        <>
            <h2>Select HTML format</h2>
            <select
                value={option}
                onChange={(e) => setOption(e.target.value)}
                style={{ cursor: 'pointer' }}
            >
                <option value='' disabled>
                    -- Choose an option --
                </option>
                <option value='paragraph'>Paragraph</option>
                <option value='bold'>Bold</option>
                <option value='unordered'>Bullet list</option>
                <option value='ordered'>Numbered list</option>
            </select>
            <h2>Paste your text</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows='4'
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
