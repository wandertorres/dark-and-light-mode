import { useState } from 'react';
import './App.css';
import Button from "./components/Button";

export default function App() {
  const [activeDark, setActiveDark] = useState(false);
  const [titleH1, setTitleH1] = useState('Light Mode ON');
  const [titleButton, setTitleButton] = useState('Dark Mode');
  const [className, setclassName] = useState("");

  const changeText = () => {
    activeDark ? setTitleH1('Light Mode ON') : setTitleH1('Dark Mode ON');
    activeDark ? setTitleButton('Dark Mode') : setTitleButton('Light Mode');
  }

  const changeStyle = () => {
    activeDark ? setclassName("") : setclassName("dark-mode");
  }
  
  const changeMode = () => {
    setActiveDark(!activeDark);
    changeText();
    changeStyle();
  }

  return(
    <>
      <main className={className}>
        <h1 className="title">{titleH1}</h1>
        <Button 
          className={className} 
          titleButton={titleButton} 
          changeMode={changeMode}
        />
      </main>

      <footer className={className}>
        <span>Dark and Light Mode by Wander Torres</span>
      </footer>
    </>
  );
}
