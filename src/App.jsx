import data from "../data.json";

const products = data;

const App = () => {
  return <ProductContainer />;
};

const ProductContainer = () => {
  return (
    <div className="flex items-start py-8! container">
      <ProductDisplay />

      <ProductCheckout />
    </div>
  );
};

const ProductDisplay = () => {
  return (
    <div className="flex flex-col gap-12 container">
      <ProductTitle />

      <ul className="grid grid-cols-3 gap-x-16 gap-y-24">
        {products.map((product) => (
          <ProductList key={product.name} product={product} />
        ))}
      </ul>
    </div>
  );
};

const ProductList = ({ product }) => {
  return (
    <li className="flex flex-col gap-12 relative">
      <div>
        <img
          src={product.image.desktop}
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

      <AddToCartButton />
    </li>
  );
};

const AddToCartButton = () => {
  return (
    <button className="flex items-center justify-center gap-3 bg-white rounded-full text-center cursor-pointer py-[0.5rem] px-[1rem] w-[14rem] absolute top-[17rem] left-[9rem] add-cart-btn">
      <img src="../assets/images/icon-add-to-cart.svg" alt="add to cart icon" />

      <p className="font-semibold">Add to Cart</p>
    </button>
  );
};

const ProductCheckout = () => {
  return (
    <div className="bg-white w-[40rem] flex flex-col gap-8 rounded-3xl py-[2rem]! px-[3rem]!">
      <h3 className="text-3xl">Your Cart (7)</h3>

      <div>
        <div>
          <p className="font-semibold text-[1.3rem]">Classic Tiramisu</p>

          <div className="flex items-center gap-3">
            <span className="text-[1.2rem] font-semibold text-[var(--color-red)]">
              1x
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              @$5.50
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              $5.50
            </span>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <div>
          <p className="font-semibold text-[1.3rem]">Classic Tiramisu</p>

          <div className="flex items-center gap-3">
            <span className="text-[1.2rem] font-semibold text-[var(--color-red)]">
              1x
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              @$5.50
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              $5.50
            </span>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <div>
          <p className="font-semibold text-[1.3rem]">Classic Tiramisu</p>

          <div className="flex items-center gap-3">
            <span className="text-[1.2rem] font-semibold text-[var(--color-red)]">
              1x
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              @$5.50
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              $5.50
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span>Order Total</span>

        <p className="text-3xl font-bold">$46.50</p>
      </div>

      <div className="flex items-center justify-center gap-4 rounded-2xl bg-[var(--color-rose-50)] py-[8px]!">
        <img src="../assets/images/icon-carbon-neutral.svg" alt="carbon icon" />

        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>

      <button className="text-white cursor-pointer rounded-full font-bold text-[1.3rem] bg-[var(--color-red)] py-[8px]! px-[3rem]! hover:bg-[#8b290b] active:bg-[#8b290b] order-btn">
        Confirm Order
      </button>
    </div>
  );
};

const ProductTitle = () => {
  return <h1 className="text-5xl font-bold">Desserts</h1>;
};

export default App;
