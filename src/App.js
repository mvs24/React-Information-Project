import React, { Component } from 'react';
import DataInfo from './components/DataInfo';
import Response from './components/Response';

export default class App extends Component {
  state={
    name:'',
    lastName:'',
    description:'',
    info:false,
    clicked:false
  };

  handleEventName=(e)=>{
     if(e.target.value!==""){
      this.setState({
        info:true
      })
    }
    this.setState({
      name:e.target.value
    })
   
  }
  handleEventLastName=(e)=>{
    if(e.target.value!==""){
      this.setState({
        info:true
      })
    }
    this.setState({
      lastName:e.target.value
    })
  }
  handleEventDescription=(e)=>{
    if(e.target.value!==""){
      this.setState({
        info:true
      })
    }
    this.setState({
      description:e.target.value
    })
  }


  handleSubmit=()=>{
    let updatedState={
      ...this.state
    };
    
    this.setState({
      name:updatedState.name,
      lastName:updatedState.lastName,
      description:updatedState.description,
      info:updatedState.info,
      clicked:true
    });
  }

  deleteItem=()=>{
    this.setState({
      clicked:false,
      name:"",
      lastName:"",
      description:""
    })
  }

  editItem=()=>{
    let WorkingState={
      ...this.state
    }

   this.setState({
     clicked:false,
     name:WorkingState.name,
     lastName:WorkingState.lastName,
     description:WorkingState.description
   })
  }
  
 
  render() {
    return (
      <div>
        <DataInfo  updatedState={this.state} handleSubmit={this.handleSubmit} handleEventName={this.handleEventName} handleEventLastName={this.handleEventLastName} handleEventDescription={this.handleEventDescription} />
        <Response editItem={this.editItem} deleteItem={this.deleteItem} updatedState={this.state} />
      </div>
    )
  }
}
