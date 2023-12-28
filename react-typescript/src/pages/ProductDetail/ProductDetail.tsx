import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";
import "./ProductDetail.css";

const ProductDetail = () => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    if (params.id) {
      ProductService.getById(parseInt(params.id)).then(response => {
        setProduct(response.data);
      });
    }
  }, [params.id]);

  return (
    <div className="container mt-4">
      <h2>{product?.title} Detayları</h2>
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item "><b>Marka:</b> {product?.brand}</li>
          <li className="list-group-item "><b>Açıklama:</b> {product?.description}</li>
          <li className="list-group-item "><b>Stok Miktarı:</b> {product?.stock}</li>
          <li className="list-group-item "><b>Kategori:</b> {product?.category}</li>
          <li className="list-group-item "><b>Fiyat: </b>{product?.price}</li>
          <li className="list-group-item "><b>İndirim Oranı: </b>{product?.discountPercentage}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
