import { PATH } from './common/constants';
import { MainPage } from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.main} element={<MainPage/>} />
      </Routes>
    </>
  );
}

export default App;
