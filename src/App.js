import { Route, Routes } from 'react-router-dom';
import './App.css';
import Amount from './pages/Amount/Amount';
import NoAmount from './pages/NoAmount/NoAmount';

function App() {
  return (
    
      <Routes>
        <Route index path="/" element={<Amount />} />
        <Route path="/no_amount" element={<NoAmount/>}/>
      </Routes>
    
  );
}

export default App;
