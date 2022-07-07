import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
