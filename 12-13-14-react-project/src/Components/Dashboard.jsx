import React from 'react';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import List from '../pages/List'
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductAdd from '../pages/ProductAdd';

export default function Dashboard() {
  return (
    <div>
        <ToastContainer position="bottom-right"/> 
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Categories/>
                </Grid.Column>
                <Grid.Column width={12}>
                        <Routes>
                            <Route exact path='/' element={<List/>}/>
                            <Route exact path='/products' element={<List/>}/>
                            <Route path='/products/:id' element={<ProductDetail/>}/>
                            <Route path='/cart' element={<CartDetail/>}/>
                            <Route path='/product/add' element={<ProductAdd/>}/>
                        </Routes>    
                </Grid.Column>
            </Grid.Row>      
        </Grid>
    </div>
  )
}
