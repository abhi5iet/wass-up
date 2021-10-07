import './App.css';
import { Messanger } from './components/Messanger';
import { AcccountContextProvider } from './store/AcccountContext';
import { DrawerContextProvider } from './store/DrawerContext';

function App() {
  return (
    <AcccountContextProvider>
      <DrawerContextProvider>
        <div className="App">
          <Messanger />
        </div>
      </DrawerContextProvider>
    </AcccountContextProvider>
  );
}

export default App;
