import { useCart } from "../states/cart";

function Card({ id, name, price, category, description, image }) {
  const products = useCart((state) => state.products);
  const add = useCart((state) => state.add);
  const remove = useCart((state) => state.remove);

  const isInCart = !!products[id];

  return (
    <div className="card">
      <h1>{image}</h1>
      <section className="card-infos">
        <p>{category}</p>
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>{price}$</h6>
        <button onClick={() => (isInCart ? remove(id) : add(id))}>
          {isInCart ? "Remove" : "Add"}
        </button>
      </section>
    </div>
  );
}

export default Card;
