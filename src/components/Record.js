import React, { Component } from "react";
import PropTypes from 'prop-types'
import * as RecordsAPI from '../utils/RecordsAPI'




class Record extends Component {
	constructor() {
		super();
		this.state = {
			edit: false
		}
	}
	handleToogle() {
		this.setState({
			edit: !this.state.edit
		})
	}

	recordRow() {
		return (
			<tr>
				<td>{this.props.date}</td>
				<td>{this.props.title}</td>
				<td>{this.props.amount}</td>
				<td>
					<button className="btn btn-info mr-1" onClick={this.handleToogle.bind(this)}>Edit</button>
					<button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
				</td>
			</tr>
		)
	}
	handleEdit(e) {
		e.stopPropagation();
		const record = {
			date: this.refs.date.value,
			title: this.refs.title.value,
			amount: this.refs.amount.value
		}
		console.log(record)
		RecordsAPI.update(this.props.id, record).then(
			(res) => {
				console.log(res.data)
				this.props.handleNewRecord();
			}
		).catch(
			error => console.log(error.message)
		)
	}
	handleDelete(e) {
		e.stopPropagation();
		RecordsAPI.remove(this.props.id).then(
			(res) => {
				console.log(res.data)
				this.props.handleNewRecord();
			}
		).catch(
			error => console.log(error.message)
		)

	}
	recordForm() {
		return (
			<tr>
				<td>
					<input type="text" className="form-control" defaultValue={this.props.date} ref="date" />
				</td>
				<td>
					<input type="text" className="form-control" defaultValue={this.props.title} ref="title" />
				</td>
				<td>
					<input type="text" className="form-control" defaultValue={this.props.amount} ref="amount" />
				</td>
				<td>
					<button className="btn btn-info mr-1" onClick={this.handleEdit.bind(this)}>Update</button>
					<button className="btn btn-danger" onClick={this.handleToogle.bind(this)}>Cancel</button>
				</td>
			</tr>
		)
	}
	render() {
		if (this.state.edit) {
			return this.recordForm();
		} else {
			return this.recordRow()
		}
	}
}


Record.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	date: PropTypes.string,
	title: PropTypes.string,
	amount: PropTypes.string
}


export default Record;
