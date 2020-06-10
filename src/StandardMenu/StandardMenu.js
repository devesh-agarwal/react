import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Items from '../ItemsService'
import {ItemList} from '../ModernMenu/ModernMenu'
function StandardMenu() {
    return( 
        <ItemList itemName={Items}/>
     )
    
}
export default StandardMenu;