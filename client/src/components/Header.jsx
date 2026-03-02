// import { useNavigate } from "react-router-dom";
// import { useCart } from "../states/cart";

// function Header() {
//   const counter = useCart((state) => state.count);
//   const navigate = useNavigate();
//   const goShop = () => {
//     navigate("/");
//   };
//   const goCart = () => {
//     navigate("/cart");
//   };

//   return (
//     <header>
//       <h1>StarterStore</h1>
//       <button onClick={goShop}>Shop</button>
//       <button onClick={goCart}>
//         Cart <div>{counter}</div>
//       </button>
//     </header>
//   );
// }

// export default Header;

import { useNavigate } from "react-router-dom";
import { useCart } from "../states/cart";

function Header() {
  const products = useCart((state) => state.products);
  const counter = Object.keys(products).length; // ← calcul dynamique
  const navigate = useNavigate();

  const goShop = () => navigate("/");
  const goCart = () => navigate("/cart");

  return (
    <header>
      <h1>StarterStore</h1>
      <button onClick={goShop}>Shop</button>
      <button onClick={goCart}>
        Cart <div>{counter}</div>
      </button>
    </header>
  );
}

export default Header;
