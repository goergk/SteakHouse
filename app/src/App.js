import '../src/scss/style.scss';
import { Navbar, Slider, Logos, Boxes } from './layout/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Logos />
      <Boxes />
    </div>
  );
}

export default App;
