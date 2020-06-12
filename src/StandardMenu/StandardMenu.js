import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Items from '../ItemsService'
import {ItemList} from '../ModernMenu/ModernMenu'
import Header from '../Header/Header';
function StandardMenu() {
    return( 
        <Fragment>
            <Header/>
            <br/>
        <ItemList itemName={Items}/>
        </Fragment>
     )
    
}
export default StandardMenu;