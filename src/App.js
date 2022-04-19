import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {!authCtx.isLoggedIn && (
          <Route path='/auth/*' element={<AuthPage />} />
        )}
        <Route path='/profile/*' element={<> {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Navigate to='/auth' />}</>}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </Layout>
    </React.Fragment>
  );
}

export default App;
