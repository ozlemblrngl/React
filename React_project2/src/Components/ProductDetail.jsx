import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  if (!products || products.length === 0) {
    return <div>Ürün bulunamadı.</div>;
  }

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (

    
    <div>
      <h2>{product.name} Detayları</h2>
      <ul class="list-group">
        <li class="list-group-item">Fiyat: {product.price}</li>
        <li class="list-group-item">Açıklama: {product.description}</li>
        <li class="list-group-item">Kategori: {product.category}</li>
    </ul>     
    </div>
  );
};

export default ProductDetail;
