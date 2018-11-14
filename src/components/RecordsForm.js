import React from 'react'

export default class RecordForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date:"",
			title:"",
			amount:""
		}
	}

	valid(){
		return this.state.date && this.state.title && this.state.amount
	}
	render(){
		return (
			<form className="form-inline">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} />
				</div>
				<button type="submit" className="btn btn-primary" disabled={true} >Create Records</button>
			</form>
		)
	}
}