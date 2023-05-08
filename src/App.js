import { Route, Routes} from "react-router-dom";
import Level1 from "./components/Level1/Level1";
import Level2 from './components/Level2/Level2';
import Level3 from './components/Level3/Level3';
import Level4 from './components/Level4/Level4';
import Level5 from './components/Level5/Level5';
import Dead1 from './components/DeadEnd1/Dead1'
import Dead2 from './components/DeadEnd2/Dead2'
import Home from "./components/Home/Home";
import Solution from "./components/Solution/Solution";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level1" element={<Level2 />} />
        <Route path="/level2" element={<Level5 />} />
        <Route path="/level3" element={<Level1 />} />
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level3 />} />
        <Route path="/dead1" element={<Dead1 />} />
        <Route path="/dead2" element={<Dead2 />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </div>
  );
}

export default App;
