import React, { useState } from 'react';

const ProductForm = ({ onAdd }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', category:'',image:'' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = () => {
    onAdd(newProduct);
    setNewProduct({ name: '', price: '', description: '', category:'', image:'' });
  };

  return (
    <div>
      <h2>Ürün Ekle</h2>
      <form>
        <div className="form-group">
          <label>Ürün Adı:</label>
          <input type="text" className="form-control" name="name" value={newProduct.name} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Resim:</label>
          <input type="file" className="form-control" name="image" value={newProduct.image} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Fiyat:</label>
          <input type="text" className="form-control" name="price" value={newProduct.price} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Açıklama:</label>
          <input type="text" className="form-control" name="description" value={newProduct.description} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Kategori:</label>
          <input type="text" className="form-control" name="category" value={newProduct.category} onChange={handleInputChange} />
        </div>
    
      <div className='d-flex justify-content-end mt-4'> <button type="button" className="btn btn-primary" onClick={handleAddProduct}><i className="fa fa-save mr-2"></i>
          Ekle
        </button></div>
       
      </form>
    </div>
  );
};

export default ProductForm;


