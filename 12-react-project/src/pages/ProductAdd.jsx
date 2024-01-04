import React from 'react';
import { Formik, Form, Field} from 'formik';
import {FormField, Button} from 'semantic-ui-react'
import * as Yup from "yup"

export default function ProductAdd() {
  const initialValues ={title: "", price:10}
  const schema = Yup.object({
    title: Yup.string().required("ürün adı zorunlu"),
    price: Yup.number().required("ürün fiyatı zorunlu")
  })
   
  return (
 
        <Formik 
        initialValues = {initialValues}
        validationShema= {schema}
        onSubmit={(values)=>{ console.log(values)}}>
        <Form className='ui form'>
            <FormField>
                <Field name="title" placeholder="ürün adı"></Field>
            </FormField>
            <FormField>
                <Field name="price" placeholder="ürün fiyatı"></Field>
            </FormField>
            <Button color="green" type="submit">Ekle</Button>
        </Form>
        </Formik>
  )
}
