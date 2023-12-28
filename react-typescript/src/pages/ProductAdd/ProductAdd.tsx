import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductModel } from '../../models/responses/ProductModel';

export default function AddProduct(props: any) {
  const [newProduct, setNewProduct] = useState({
    id: 0,
    images: ' ',
    title: '',
    brand: '',
    thumbnail: '',
    description: '',
    category: '',
    stock: 0,
    rating: 0,
    price: '',
    discountPercentage: 0,
  });
  const navigate = useNavigate();

  const onChangeInput = (input: any) => {
    const { name, value } = input.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    navigate('/products/new', { state: newProduct });
  };

  return (
    <div>
      <h2>Ürün Ekle</h2>
      <form>
        <div className="form-group">
          <label>Ürün Adı:</label>
          <input type="text" className="form-control" name="title" value={newProduct.title} onChange={onChangeInput} />
        </div>

        <div className="form-group">
          <label>Resim:</label>
          <input type="file" className="form-control" name="images" value={newProduct.images} onChange={onChangeInput} />
        </div>

        <div className="form-group">
          <label>Fiyat:</label>
          <input type="text" className="form-control" name="price" value={newProduct.price} onChange={onChangeInput} />
        </div>

        <div className="form-group">
          <label>Açıklama:</label>
          <input type="text" className="form-control" name="description" value={newProduct.description} onChange={onChangeInput} />
        </div>

        <div className="form-group">
          <label>Kategori:</label>
          <input type="text" className="form-control" name="category" value={newProduct.category} onChange={onChangeInput} />
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button type="button" className="btn btn-primary" onClick={handleAddProduct}>
            <i className="fa fa-save mr-2"></i>Ekle
          </button>
        </div>
      </form>
    </div>
  );
}
