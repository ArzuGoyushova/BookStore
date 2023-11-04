import Layout from "./layout/Layout"
import { Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import ShoppingBag from "./pages/ShoppingBag";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="all-books" element={<AllBooks />} />
          <Route path="book-detail/:bookId" element={<BookDetail/>} />
          <Route path="basket" element={<ShoppingBag/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App