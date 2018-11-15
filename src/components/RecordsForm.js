import React from 'react'
import * as RecordsAPI from '../utils/RecordsAPI'
export default class RecordForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			title: "",
			amount: ""
		}
	}

	valid() {
		return this.state.date && this.state.title && this.state.amount
	}

	handleChange(e){
		e.stopPropagation()
		let target = e.target;
		let name = target.name;
		let value = target.type === "checkbox" ? target.checked:target.value
		console.log(value)
		this.setState({
			[name]:value
		})
	}
	resetForm(){
		this.setState({
			date: "",
			title: "",
			amount: ""
		})
	}
	handleSubmit(e){
		e.preventDefault();
		RecordsAPI.create(this.state).then(response=>{
			console.log(response.data)
			this.props.handleNewRecord()
			this.resetForm()
		}).catch(
			error => console.log(error.message)
		)
	}
	render() {
		return (
			<form className="form-inline mb-3" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group mr-1">
					<input type="text" className="form-control" placeholder="Date" name="date" onChange={this.handleChange.bind(this)} value={this.state.date} />
				</div>
				<div className="form-group mr-1">
					<input type="text" className="form-control" placeholder="Title" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} />
				</div>
				<div className="form-group mr-1">
					<input type="text" className="form-control" placeholder="Amount" name="amount" onChange={this.handleChange.bind(this)} value={this.state.amount} />
				</div>
				<button type="submit" className="btn btn-primary" disabled={!this.valid()} >Create Records</button>
			</form>
		)
	}
}