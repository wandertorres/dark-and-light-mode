import './Button.css';

export default function Button({className, titleButton, changeMode}) {
    return(
        <button className={className} onClick={() => changeMode()}>
            {titleButton}
        </button>
    );
}