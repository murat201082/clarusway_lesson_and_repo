import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h2>Product Page</h2>
      <div className={styles.products}>
        {products.map((each) => (
          <Link
            to={`details/${each.id}`}
            key={each.id}
            className={styles.product}
          >
            <h6>{each.category}</h6>
            <p>{each.title}</p> 
            
            <img style={{ width: "100px" }} src={each.image} alt="" /> <br />
            <span>{each.rating.count}</span> <br />
            <span>{each.rating.rate}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
