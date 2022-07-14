import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import './scss/base.scss';

function App() {
  return (
    <>
      <Navbar />
      <main className="site-content">
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
