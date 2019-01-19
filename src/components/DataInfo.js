import React, { Component } from 'react';
import './DataInfo.css';

export default class DataInfo extends Component {


  render() {
    const {updatedState,handleEventName,handleEventDescription,handleEventLastName,handleSubmit}=this.props;     
    var info=false;
    if(updatedState.name==""){
      info=false;
    }else if(updatedState.lastName==""){
      info=false;
    }else if(updatedState.description==""){
      info=false;
    }else{
      info=true;
    }
    
    return (
      <div className="DataInfo">
      <header className="Header">Complete all the fields</header>
        <form action="" onSubmit={handleSubmit}>
           <div ><input  value={updatedState.name} onChange={handleEventName} type="text" id="name" placeholder="Name                   (Limit 25 words)"/></div> 
           <div><input value={updatedState.lastName} onChange={handleEventLastName} type="text" placeholder="Last Name            (Limit 25 words)"/></div> 
           <div><textarea value={updatedState.description} onChange={handleEventDescription} name="" id="" cols="30" placeholder="Description" rows="10">{updatedState.description}</textarea></div>   
            <button disabled={!info} onClick={handleSubmit} type="button">Complete</button>
        </form>
      </div>
    )
  }
}
