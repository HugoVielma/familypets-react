import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./CartContext";
import CartView from "./componentes/CartView ";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer title="Que tal React Router Present" />
              }
            />
            <Route
              path="/especie/:especieid"
              element={<ItemListContainer title="Alimentos" />}
            />
            <Route
              path="/producto/:itemId"
              element={<ItemDetailContainer id={0} />}
            />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
