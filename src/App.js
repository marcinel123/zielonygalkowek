import './App.css';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="App">
     <Header/>
     <Carousel/>
    </div>
  );
}