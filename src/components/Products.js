import { popularProducts } from "../data";
import Product from "./Product";

import "../components/styles/products.css";


const Products = () => {
  return (
    <div className="products-container">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
