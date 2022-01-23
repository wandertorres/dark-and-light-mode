import './Button.css';

export default function Button({titleButton, changeMode}) {
    return(
        <button onClick={() => changeMode()}>{titleButton}</button>
    );
}