import './App.css';
import { Messanger } from './components/Messanger';
import { AcccountContextProvider } from './store/AcccountContext';

function App() {
  return (
    <AcccountContextProvider>
      <div className="App">
        <Messanger />
      </div>
    </AcccountContextProvider>
  );
}

export default App;
