import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ProductModel } from '../../models/responses/ProductModel';

interface NewProductFormValues {
  title: string;
  images: string;
  price: string;
  description: string;
  category: string;
}

const AddProduct: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: NewProductFormValues = {
    title: '',
    images: '',
    price: '',
    description: '',
    category: '',
  };

  const onSubmit = (values: NewProductFormValues) => {
    navigate('/products/new', { state: values });
  };

  return (
    <div>
      <div className="row mb-3">
        <div className="col-4 offset-4 ">
        <h2 style={{ textAlign: 'center' }} className='center'>Ürün Ekle</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label>Ürün Adı:</label>
            <Field type="text" className="form-control" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div className="form-group">
            <label>Resim:</label>
            <Field type="file" className="form-control" name="images" />
            <ErrorMessage name="images" component="div" />
          </div>

          <div className="form-group">
            <label>Fiyat:</label>
            <Field type="text" className="form-control" name="price" />
            <ErrorMessage name="price" component="div" />
          </div>

          <div className="form-group">
            <label>Açıklama:</label>
            <Field type="text" className="form-control" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>

          <div className="form-group">
            <label>Kategori:</label>
            <Field type="text" className="form-control" name="category" />
            <ErrorMessage name="category" component="div" />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-save mr-2"></i>Ekle
            </button>
          </div>
        </Form>
      </Formik>
      </div> 
</div>
        </div>
      
  );
};

export default AddProduct;
