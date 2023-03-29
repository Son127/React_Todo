import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Global } from '@emotion/react';
import  Todo  from './pages/Todo/Todo'
import MainAside from './components/Aside/MainAside/MainAside'
import { reset } from './styles/Global/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Global style={reset}/>
        <MainAside />
        <Routes>
          <Route path="/todo" Component={Todo}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

