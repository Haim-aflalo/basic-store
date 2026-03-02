import { useCart } from "../states/cart";

function Clear() {
  const products = useCart((state) => state.products);
  const counter = Object.keys(products).length;
  const reset = useCart((state) => state.reset);
  return (
    <>
      {counter !== 0 && (
        <div>
          <h3>Order summary</h3>
          <p>Total items</p>
          <p>Total price</p>
          <button
            onClick={() => {
              reset();
            }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
}

export default Clear;
