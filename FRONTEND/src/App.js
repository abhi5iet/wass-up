import './App.css';
import { Messanger } from './components/Messanger';
import { AcccountContextProvider } from './store/AcccountContext';
import { DrawerContextProvider } from './store/DrawerContext';
import UserProvider from './store/UserContext';

function App() {
  return (
    <AcccountContextProvider>
      <DrawerContextProvider>
        <UserProvider>
          <div className="App">
            <Messanger />
          </div>
        </UserProvider>
      </DrawerContextProvider>
    </AcccountContextProvider>
  );
}

export default App;
