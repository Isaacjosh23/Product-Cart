import { ProductCheckout } from "./ProductCheckout";
import { ProductDisplay } from "./ProductDisplay";

export const ProductContainer = () => {
  return (
    <div className="flex items-start py-8! container">
      <ProductDisplay />

      <ProductCheckout />
    </div>
  );
};
