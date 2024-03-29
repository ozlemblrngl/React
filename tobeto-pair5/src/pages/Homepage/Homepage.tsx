import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";
import {ProductModel} from "../../models/responses/ProductModel";

type Props = {};

const Homepage = (props: Props) => {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
		AuthService.login({username:"kdsdk", password:"123"})
	}, []);

	const onProductDelete = (id: number) => {
		setProducts(products.filter(i => i.id !== id));
	};

	const fetchProducts = () => {
		console.log("istek homepage e attılıyor.")
		ProductService.getAll().then((response: any) => {
			console.log("cevap homepage'e döndü")
			setProducts(response.data.products);
		});
	};

	return (
		<div className="container">
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