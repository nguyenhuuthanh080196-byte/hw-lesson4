import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map(p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>${p.price}</p>
          <Link to={`/products/${p.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;