import { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context/products-context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.style.scss";

const Shop = () => {
  const Products = useContext(ProductsContext);

  return (
    <div className="products-container">
      {Products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
