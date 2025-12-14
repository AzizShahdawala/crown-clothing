import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories-context/categories-context";
import ProductCard from "../../components/product-card/product-card.component";

import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoriesMap && categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Category;
