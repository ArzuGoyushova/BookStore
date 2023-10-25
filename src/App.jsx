import Layout from "./layout/Layout"
import { Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="all-books" element={<AllBooks />} />
        </Route>
      </Routes>
    </>
  )
}

export default App