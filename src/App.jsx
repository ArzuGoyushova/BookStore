import Layout from "./layout/Layout"
import { Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import ShoppingBag from "./pages/ShoppingBag";
import Checkout from "./pages/Checkout";
import Bookmark from "./pages/Bookmark";
import User from "./pages/User";
import Confirmation from "./components/main/checkout/Confirmation";

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
          <Route path="checkout" element={<Checkout/>} />
          <Route path="bookmark" element={<Bookmark/>}/>
          <Route path="user/*" element={<User/>}/>
          <Route path="checkout/confirmation" element={<Confirmation/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App