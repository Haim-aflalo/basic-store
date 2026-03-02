import { useCart } from "../states/cart";

function CartCards() {
  const products = useCart((state) => state.products);
  const counter = Object.keys(products).length;
  const remove = useCart((state) => state.remove);

  return (
    <>
      {counter == 0 ? (
        <div>
          <h2>Your cart is empty</h2>
          <p>Add products from the shop page .</p>
        </div>
      ) : (
        <div>
          <ul>
            {Object.values(products).map((product) => (
              <li key={product.id}>
                <p>{product.category}</p>
                <h4>{product.name}</h4>
                <p>{product.price}$</p>
                <button
                  onClick={() => {
                    remove(product.id);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default CartCards;
