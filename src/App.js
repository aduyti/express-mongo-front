import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NewPerson from './Pages/NewPerson/NewPerson';
import Person from './Pages/Person/Person';
import NotFound from './Pages/NotFound/NotFound';
import Header from './compo/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="/create" element={<NewPerson />} />
        <Route path="/create/:id" element={<NewPerson />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
