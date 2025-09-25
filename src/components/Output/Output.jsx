import CopyToClipboard from '../CopyToClipboard/CopyToClipboard';

const Output = ({ text }) => {
    return (
        <>
            <h2>Copy item name</h2>
            <div>
                <textarea
                    defaultValue={text}
                    rows='1'
                    cols='40'
                    readOnly={true}
                ></textarea>
                <div className='grid'>
                    <CopyToClipboard text={text} />
                </div>
            </div>
        </>
    );
};

export default Output;
