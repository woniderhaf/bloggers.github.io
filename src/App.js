import Header from './components/Header/Header';
import './App.css';
import Slider from './components/Slider/Slider';
import Svg from './components/svg';

function App() {
  return (
    <div className="body">
      <div className="container">
        <Svg class='bg__img1'/>
        <Svg class='bg__img2'/>
        <Header/>
        <Slider />
      </div>
    </div>

  );
}

export default App;
