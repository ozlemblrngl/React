import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image} from 'semantic-ui-react'
import axios from 'axios'

// bu component düzgün çalışmıyor!!! 
export default function CartDetail() {
  let{id} = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios("https://dummyjson.com/products/1")
      .then((res) => {
        console.log(res.data); 
        setProduct(res.data.product);
      })
      .catch((e) => console.log(e));
  }, []);

  return ( 
    <div> 
       {id}
    <Card.Group>
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='large'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{product.title}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
   </div>
  )
}
