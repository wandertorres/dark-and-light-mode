import { useState } from 'react';
import './App.css';
import Button from "./components/Button";

export default function App() {
  const [activeDark, setActiveDark] = useState(false);
  const [titleH1, setTitleH1] = useState('Light Mode ON');
  const [titleButton, setTitleButton] = useState('Dark Mode');

  const changeText = () => {
    if(activeDark) {
      setTitleH1('Light Mode ON');
      setTitleButton('Dark Mode');
    } else {
      setTitleH1('Dark Mode ON');
      setTitleButton('Light Mode');
    }
  }
  
  const changeMode = () => {
    setActiveDark(!activeDark);
    changeText();
  }

  return(
    <div className="App">
    <main>
      <h1 className="title">{titleH1}</h1>
      <Button titleButton={titleButton} changeMode={changeMode}/>
    </main>

    <footer>
      Dark and Light Mode by Wander Torres
    </footer>
    </div>
  );
}