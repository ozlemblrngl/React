import React from 'react';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import List from './List'
import ProductDetail from './ProductDetail';
import CartDetail from './CartDetail';


export default function Dashboard() {
  return (
    <div>
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Categories/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={<List/>}/>
                            <Route exact path='/products' element={<List/>}/>
                            <Route path='/products/:id' element={<ProductDetail/>}/>
                            <Route path='/cart' element={<CartDetail/>}/>
                        </Routes>
                    </BrowserRouter>  
                </Grid.Column>
            </Grid.Row>      
        </Grid>
    </div>
  )
}
