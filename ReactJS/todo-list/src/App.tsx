import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
// import { StatsCard } from "./components/StatsCard/StatsCard";
import './styles/global.css';

function App() {
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   console.log('useEffect disparado');
  // }, [toggle]);
  // o useEffect sera disparado sempre que alguma variável do array de dependências for alterada.
  //por padrão, sempre o useEffect será disparado após a montagem do componente (componentDidMount).
  return(
    <>
    <Header />
    <Tasks />

    <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
}

export default App;
