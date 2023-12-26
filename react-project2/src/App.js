import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import ProductForm from './Components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sony PlayStation 5', price: 50, description: 'Oyun Konsolu', category:'Teknoloji', image:'https://percdn.com/f/271833/b3NhVUoyVTArYkI4Tm53Z0hzOXBiZlJlYmNFPQ/p/sony-playstation-5-slim-standart-edition-825gb-ithalatci-garantili--69985733-sw900sh900.webp' },
    { id: 2, name: 'Acer', price: 5000, description: 'Bilgisayar', category:'Teknoloji',image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700517566-716Agdq-YPL.jpg?crop=1xw:1.00xh;center,top&resize=980:*' },
    { id: 3, name: 'IPhone Pro Max', price:3000, description: 'Telefon', category:'Teknoloji',image:'https://www.bufflabs.com.tr/file/thumb/f/f4/f47/f479/f479e7bf024792bcaed51812ba6c7f7b/1-clear.jpg' },
    
  ]);

  const handleAddProduct = newProduct => {
    setProducts(prevProducts => [...prevProducts, { id: prevProducts.length + 1, ...newProduct }]);
  };

  const handleDeleteProduct = productId => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Ana Sayfa</Link>
            </li>
          </ul>
        </nav>
        <h6> <Link to="/products" ><button type='btn' className='btn btn-warning'>Ürünlerimiz için tıklayınız</button></Link></h6>
        <Routes>
          <Route path="/products" element={<ProductList products={products} onDelete={handleDeleteProduct} />} />
          <Route path="/products/new" element={<ProductForm onAdd={handleAddProduct} />} />
          <Route path="/products/:id" element={<ProductDetail products={products} />} />
          <Route path="/" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
