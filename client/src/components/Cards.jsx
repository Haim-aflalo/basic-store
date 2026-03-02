import axios from "axios";
import Card from "./Card";
import { useState, useEffect } from "react";

function Cards() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Card
              image={product.image}
              category={product.category}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
