import React from "react";
import {ProductModel} from "../../models/responses/ProductModel";
import {Link} from "react-router-dom";
import ProductService from "../../services/ProductService";
import {HttpStatusCode} from "axios";

type Props = {
	product: ProductModel;
	onDelete: (id: number) => void;
	title?: string; // (opsiyonel)
};

const ProductCard = (props: Props) => {
	const deleteProduct = async () => {
		try {
			let response = await ProductService.delete(250);
			if (response.status == HttpStatusCode.Ok) {
				props.onDelete(props.product.id);
				alert("Veri başarıyla silindi.");
			}
		} catch (e) {
			alert("Veri silinemedi");
		}
	};

	return (
		<>
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<p>{props.product.price}₺</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary">
					<i className="fa fa-search mr-2"></i>
					Details
				</Link>
				<button
					onClick={() => {
						deleteProduct();
					}}
					className="btn btn-danger">
					 <i className="fa fa-trash mr-2" />
					Sil
				</button>
			</div>
		</div>
   </>
	);
};

export default ProductCard;
