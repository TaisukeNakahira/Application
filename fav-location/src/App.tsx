import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './features/Login/page/LoginPage';
import LocationListPage from './features/List/page/LocationListPage';
import LocationDetailPage from './features/Detail/page/LocationDetailPage';
import LocationRegisterPage from './features/Register/page/LocationRegisterPage';
import LocationUpdatePage from './features/Update/page/LocationUpdatePage';
import { EdittingLocationDataProvider } from './features/Register/components/EdittingLocationDataProvider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<LocationListPage />} />
        <Route path="/detail/:id" element={<LocationDetailPage />} />
        <EdittingLocationDataProvider>
          <Route path="/Register" element={<LocationRegisterPage />} />
        </EdittingLocationDataProvider>
        <Route path="/detail/:id/update" element={<LocationUpdatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
