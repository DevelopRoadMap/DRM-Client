import GlobalStyles from './public/Globalstyle'
import Login from './pages/LoginPage/Login';
import Header from './public/Header';
import TestMajor from './pages/TestMajor/TestMajor';
import SelectMajor from './pages/SelectMajor/SelectMajor';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <SelectMajor/>
    </div>
  );
}

export default App;
