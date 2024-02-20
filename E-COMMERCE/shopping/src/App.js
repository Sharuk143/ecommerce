import { createContext, useState } from 'react';
import './App.css';

import NavigationStack from './PageScreens/NavigationStack';
export const Logininfo=createContext()
function App() {
const [login,setLogin] = useState(false)
const loginUser=()=>{
    setLogin(true)
  }
return (
  <>
  <Logininfo.Provider value={{ login: login, loginUser: loginUser }}>
<NavigationStack/>
    </Logininfo.Provider>
</>
  );
}
export default App;
