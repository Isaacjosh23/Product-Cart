import { useCart } from "../useCart";
import { ProductCheckout } from "./ProductCheckout";
import { ProductDisplay } from "./ProductDisplay";
import { ProductOrderConfirm } from "./ProductOrderConfirm";

export const ProductContainer = () => {
  const { isConfirm } = useCart();

  return (
    <div className="flex items-start py-8! container relative">
      <ProductDisplay />

      <ProductCheckout />

      {isConfirm && <ProductOrderConfirm />}
    </div>
  );
};
