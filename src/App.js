import './App.css';
import Button from "./components/Button";

export default function App() {
  return(
    <div className="App">
    <main>
      <h1 className="title">Light Mode ON</h1>
      <Button />
    </main>

    <footer>
      Dark and Light Mode by Wander Torres
    </footer>
    </div>
  );
}