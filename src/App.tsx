import { PATH } from './common/constants';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATH.main} element={<MainPage/>} />
      </Routes>
    </>
  );
}

export default App;
