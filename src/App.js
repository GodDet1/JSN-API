import { Navigate, Route, Routes } from 'react-router-dom';
import CreateHeroPage from './components/CreateHeroPage/CreateHeroPage';
import HeroPage from './components/HeroPage/HeroPage';
import NavBar from './components/NavBar/NavBar';
import './styles.css';
import SuperHeroList from './components/SuperHeroList/SuperHeroList';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/home" element={<SuperHeroList />} />
        <Route path="/:id" element={<HeroPage />} />
        <Route path="/createHero" element={<CreateHeroPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
