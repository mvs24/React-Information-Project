import React, { Component } from 'react';
import './Response.css';
import Infinit from './Infinity.gif';



export default class Response extends Component {
    
  render() {
      const {editItem,updatedState,deleteItem}=this.props;  

      if(updatedState.name.length>25 || updatedState.lastName.length>25){
          return(
              <p className="validation">Name or Surname can not be more than 25 words...</p>
          )
      }
    
        if(updatedState.clicked===false){
            return (
            <div className="First">
                 <img src={Infinit} alt=""/>
            </div>
            )
        }
        else{ 
        return( 
        <div className="Response">  
        <div className="Info"> 
        <p>Name: {updatedState.name}</p>
        <p>Surname: {updatedState.lastName}</p>
        <p className="Description">Description: {updatedState.description}</p>
        </div>
        <div className="Button">
        <button onClick={editItem} type="button">Edit</button>
        <button onClick={deleteItem} type="button">Delete</button>
        </div>
       
    </div>
        )
      }
   
  }
}
