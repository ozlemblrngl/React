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
                            <Route exact path='/' Component={List}/>
                            <Route exact path='/products' Component={List}/>
                            <Route path='/products/:id' Component={ProductDetail}/>
                            <Route path='/cart' Component={CartDetail}/>
                        </Routes>
                    </BrowserRouter>  
                </Grid.Column>
            </Grid.Row>      
        </Grid>
    </div>
  )
}
