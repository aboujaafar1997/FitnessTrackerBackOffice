import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import Login from './login';
function App() {
  const [isLogin, setislogin] = useState(false);
  return (
    <>
      {isLogin ? <Users /> : <Login setislogin={setislogin} />}
    </>
  );
}

export default App;
