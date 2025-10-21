import { ProductContainer } from "./components/ProductContainer";
import { CartProvider } from "./useCart";

const App = () => {
  return (
    <CartProvider>
      <ProductContainer />
    </CartProvider>
  );
};

export default App;
