import { useState } from "react";
import { useCart } from "../states/cart";

function Card(props) {
  const [flag, setFlag] = useState(true);
  const add = useCart((state) => state.add);
  const remove = useCart((state) => state.remove);
  const { name, price, category, description, image } = props;
  function addToCart() {
    add();
    setFlag(false);
  }
  function removeFromCart() {
    remove();
    setFlag(true);
  }
  return (
    <div>
      <h1>{image}</h1>
      <section className="card-infos">
        <p>{category}</p>
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>{price}$</h6>
        {flag ? (
          <button onClick={addToCart}>Add to cart</button>
        ) : (
          <button onClick={removeFromCart}>remove from cart</button>
        )}
      </section>
    </div>
  );
}

export default Card;
