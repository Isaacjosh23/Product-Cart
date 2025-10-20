import data from "../data.json";

const products = data;

const App = () => {
  return <ProductContainer />;
};

const ProductContainer = () => {
  return (
    <div className="py-8! container">
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
  return;
};

const ProductTitle = () => {
  return <h1 className="text-5xl font-bold">Desserts</h1>;
};

export default App;
