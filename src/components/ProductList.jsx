import { useCart } from "../useCart";

export const ProductList = ({ product }) => {
  const { getCartItem, handleAddToCart, handleDecrement, handleIncrement } =
    useCart();

  const isInCart = getCartItem(product.name);

  const quantity = isInCart?.quantity;

  function handleSelected() {
    const newCartItem = {
      name: product.name,
      quantity: 1,
      product,
    };

    handleAddToCart(newCartItem);
  }

  return (
    <li className="flex flex-col gap-12 relative">
      <div>
        <img
          src={"../../assets/images/" + product.image.desktop}
          alt={product.name}
          className="w-72 rounded-2xl"
        />
      </div>

      <div>
        <span className="text-gray-600 font-semibold text-[1rem]">
          {product.category}
        </span>

        <p className="text-[1.4rem] font-bold">{product.name}</p>

        <p className="text-[1.2rem] font-semibold">$ {product.price}</p>
      </div>

      {isInCart ? (
        <InCartButton
          product={product}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          quantity={quantity}
        />
      ) : (
        <AddToCartButton onHandleSelect={handleSelected} />
      )}
    </li>
  );
};

const AddToCartButton = ({ onHandleSelect }) => {
  return (
    <button
      onClick={() => onHandleSelect()}
      className="flex items-center justify-center gap-3 bg-white rounded-full text-center cursor-pointer py-[5px] px-[1rem] w-[14rem] absolute top-[17rem] left-[9rem] add-cart-btn"
    >
      <img src="../assets/images/icon-add-to-cart.svg" alt="add to cart icon" />

      <p className="font-semibold">Add to Cart</p>
    </button>
  );
};

const InCartButton = ({ product, onDecrement, onIncrement, quantity }) => {
  return (
    <div className="flex items-center justify-between gap-3 w-[14rem] bg-[var(--color-red)] rounded-full absolute top-[16rem] left-[2rem] text-center] py-[5px] px-[1rem] text-white text-xl">
      <button
        onClick={() => onDecrement(product.name)}
        disabled={quantity === 1}
        className="rounded-full p-[4px]! border border-white cursor-pointer"
      >
        <img src="../../assets/images/icon-decrement-quantity.svg" alt="" />
      </button>

      <span className="font-semibold">{quantity}</span>

      <button
        onClick={() => onIncrement(product.name)}
        className="rounded-full p-[4px]! border border-white cursor-pointer"
      >
        <img src="../../assets/images/icon-increment-quantity.svg" alt="" />
      </button>
    </div>
  );
};
