import React from "react";
import { Route , Switch , Redirect} from 'react-router-dom';
import First from './head';
import Sec from './body';
import Nav from './nav';
import './index.css';

function Not(){
  return(
    <h1>Page not found</h1>
  )
}

const X = () =>{
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/' render={() => <First x="hi"/>}></Route>
        <Route exact path='/sec/:name/:id' component={Sec}></Route>
        {/* <Route component={Not}></Route> */}
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default X;