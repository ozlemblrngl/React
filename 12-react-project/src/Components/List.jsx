import React, {useState, useEffect}  from 'react';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function List() {

  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data); 
        setProducts(res.data.products);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleAddToCart= (product)=>{
    dispatch(addToCart(product));
    toast.success(`${product.title} sepete eklendi`)

  }

  return (

    <div>      
       <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
        <Table.HeaderCell>Marka</Table.HeaderCell>
        <Table.HeaderCell>Kategori</Table.HeaderCell>
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
        <Table.HeaderCell>Ürün Fiyatı</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {
        products.map(product => (
        <Table.Row key={product.id}>
          <Table.Cell><Link to={`/products/${product.id}`}>{product.title}</Link></Table.Cell>
          <Table.Cell>{product.brand}</Table.Cell>
          <Table.Cell>{product.category}</Table.Cell>
          <Table.Cell>{product.description}</Table.Cell>
          <Table.Cell>{product.price}</Table.Cell>  
          <Table.Cell><Button onClick={() =>handleAddToCart(product)}>Sepete ekle</Button></Table.Cell>
      </Table.Row>
        ))
}
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    </div>
  )
}
