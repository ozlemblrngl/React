import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";
import {ProductModel} from "../../models/responses/ProductModel";
import { Link } from "react-router-dom";

type Props = {};

const Homepage = (props: Props) => {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const onProductDelete = (id: number) => {
		setProducts(products.filter(i => i.id !== id));
	};

	const fetchProducts = () => {
		ProductService.getAll().then((response: any) => {
			setProducts(response.data.products);
		});
	};

	return (
		<div className="container">
			<div className="d-flex justify-content-end">
      		<Link to="/products/new">
      		  <button className="btn btn-warning mt-4 mb-4 ">
          	  <i className="fa fa-save mr-2"></i>Ürün Ekle
       		 </button>
     	    </Link>
        </div>
			<div className="row">
				{products.map(product => (
					<div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
						<ProductCard onDelete={onProductDelete} product={product} />
					</div>
				))}
			</div>
			
		</div>
	);
};

export default Homepage;
