import { Link } from 'react-router-dom';
// import data from '../data';
import { useEffect, useState } from 'react';
import axios from 'axios';
function HomeScreen() {
  // useState return an array that contains variable(products) and a function to update this vriable
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchDate();
  }, []);
  return (
    <div>
      {' '}
      <h1>Featured Products </h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                {' '}
                <strong>${product.price}</strong>{' '}
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
