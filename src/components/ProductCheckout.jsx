import { useCart } from "../useCart";

export const ProductCheckout = () => {
  const { cart } = useCart();

  const isCartEmpty = cart.length === 0;

  const numberOfItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartCheckoutBox numberOfItems={numberOfItems}>
      {isCartEmpty ? <EmptyCart /> : <FilledCart cart={cart} />}
    </CartCheckoutBox>
  );
};

function FilledCart({ cart }) {
  let totalAmount = 0;

  cart.map((a) => (totalAmount += a.product.price * a.quantity), 0);

  console.log(totalAmount);

  return (
    <>
      {cart.map((cartItem) => (
        <>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-[1.3rem] mb-2">
                {cartItem.product.name}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-[1.2rem] font-semibold text-[var(--color-red)]">
                  {cartItem.quantity}x
                </span>
                <span className="text-[1.2rem] font-semibold text-gray-600">
                  @${cartItem.product.price}
                </span>
                <span className="text-[1.2rem] font-semibold text-gray-600">
                  ${cartItem.product.price * cartItem.quantity}
                </span>
              </div>
            </div>

            <button className="rounded-full cursor-pointer p-[6px]! cancel-btn">
              <img
                src="../../assets/images/icon-remove-item.svg"
                alt="cancel icon"
              />
            </button>
          </div>
          <hr />
        </>
      ))}

      <div className="flex items-center justify-between">
        <span className="inline-block text-[1.2rem]">Order Total</span>

        <p className="text-3xl font-bold">${totalAmount.toFixed(2)}</p>
      </div>

      <p className="flex items-center justify-center gap-4 rounded-2xl bg-[var(--color-rose-100)] py-[8px]!">
        <img
          src="../../assets/images/icon-carbon-neutral.svg"
          alt="carbon neutral icon"
        />

        <span>
          This is a <strong>carborn-neutral</strong> delivery
        </span>
      </p>

      <button className="text-white cursor-pointer rounded-full font-bold text-[1.3rem] bg-[var(--color-red)] py-[8px]! px-[3rem]! hover:bg-[#8b290b] active:bg-[#8b290b] order-btn">
        Confirm Order
      </button>
    </>
  );
}

function EmptyCart() {
  return (
    <div className="place-items-center">
      <img
        src="../../assets/images/illustration-empty-cart.svg"
        alt="empty cart icon"
      />

      <p className="text-xl font-medium text-[var(--color-rose-500)]">
        Your added items will appear here
      </p>
    </div>
  );
}

function CartCheckoutBox({ children, numberOfItems }) {
  return (
    <div className="bg-white w-[40rem] flex flex-col gap-8 rounded-3xl py-[2rem]! px-[3rem]!">
      <h3 className="text-3xl font-bold text-[var(--color-red)]">
        Your Cart ({numberOfItems})
      </h3>

      {children}
    </div>
  );
}
