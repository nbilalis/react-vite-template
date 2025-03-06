import Avatar from './components/Avatar';

import alan from './data/alan.json';
import hedy from './data/hedy.json';

import './App.css';

function App() {
  const title = 'Unsung Legends';

  return (
    <>
      <h1>{title}</h1>
      <Avatar user={alan} imageSize={75} />
      <Avatar user={hedy} />
    </>
  );
}

export default App;
