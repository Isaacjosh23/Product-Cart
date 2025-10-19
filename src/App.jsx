const App = () => {
  return <ProductContainer />;
};

const ProductContainer = () => {
  return (
    <div>
      <ProductDisplay />

      <ProductCheckout />
    </div>
  );
};

const ProductDisplay = () => {
  return (
    <div>
      <ProductTitle />
    </div>
  );
};

const ProductCheckout = () => {
  return;
};

const ProductTitle = () => {
  return;
};

export default App;
