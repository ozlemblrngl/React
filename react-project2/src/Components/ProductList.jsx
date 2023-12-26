import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, onDelete }) => (
  <>
    <h2>Ürün Listesi</h2>
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <Link to={`/products/${product.id}`} className="btn btn-info">
                <i className="fa fa-search mr-2"></i>Ürün Detayları
              </Link>
              <button
                className="btn btn-danger float-right"
                onClick={() => onDelete(product.id)}
              >
                <i className="fa fa-trash mr-2" />
                Sil
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="d-flex justify-content-end">
      <Link to="/products/new">
        <button className="btn btn-primary mt-4 ">
          <i className="fa fa-save mr-2"></i>Ürün Ekle
        </button>
      </Link>
    </div>
  </>
);

export default ProductList;
