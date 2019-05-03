import React, {Component} from 'react';
import './../App.css';
import ListComponent from './ListComponent';
import {jsonData} from'./../json/dummy';

class SearchInputComponent extends Component {
	state = {
		searchText: '',
		searchData:[]
	}
	
	handleChange(e){
		this.setState({searchText:e.target.value});
	}
	
	search(e){
		let searchValue = this.state.searchText;
		const searchArray = [];
		for(var i = 0; i < jsonData.length; i++)
		{
		  if(jsonData[i].name == searchValue)
		  {
			searchArray.push(jsonData[i]);
		  }
		}
		
		this.setState({searchData:searchArray})
	}
	
	render(){
		
	  return (
		<div>
		  <input type = 'text' onChange = {(e)=>this.handleChange(e)} value = {this.state.searchText} />
		  <input type = 'button' onClick = {(e)=>this.search(e)} value = 'Search' />
			  {this.state.searchData.length > 0 ? <ListComponent data = {this.state.searchData} />: 'No Record Found'}
		</div>
	  );
	}
}

export default SearchInputComponent;