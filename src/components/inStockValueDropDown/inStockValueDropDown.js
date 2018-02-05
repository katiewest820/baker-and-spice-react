import React from 'react';

export default class InStockValueDropDown extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      inStockValue: true
    }
  }
  
  updateInStockValue(e){
    this.setState({inStockValue: e.target.value})
  }


  render(){
    return(
      <div>
        <select onChange={this.updateInStockValue.bind(this)}>
          <option value={true}>In Stock</option>
          <option value={false} >Out of Stock</option>
        </select>
        <button value={this.props.item} onClick={() => this.props.onClick(this.props.item, this.state.inStockValue)}>Add To Pantry</button>
      </div>  
    )
  }
}


