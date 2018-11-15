import React, { Component } from "react";
import Record from './Record'

import * as RecordsAPI from '../utils/RecordsAPI'
import RecordsForm from './RecordsForm'
class Records extends Component {
	constructor() {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			records: []
		}
	}

	componentDidMount() {
		RecordsAPI.getAll().then(res => {
			console.log(res.data)
			this.setState({
				records: res.data,
				isLoaded: true
			})
		}).catch(
			error => {
				console.log(error)
				this.setState({
					isLoaded: true,
					error
				})
			}
		)
	}

	handleNewRecord(){
		RecordsAPI.getAll().then(res => {
			console.log(res.data)
			this.setState({
				records: res.data,
				isLoaded: true
			})
		}).catch(
			error => {
				console.log(error)
				this.setState({
					isLoaded: true,
					error
				})
			}
		)

	}


	render() {
		const { error, isLoaded, records } = this.state;
		let recordsComponnet;
		if (error) {
			recordsComponnet =  <div>Error:{error.message}</div>
		} else if (!isLoaded) {
			recordsComponnet =  <div>Loading...</div>
		} else {
			recordsComponnet =  (
				<div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Date</th>
								<th>Title</th>
								<th>Amount</th>
								<th>operate</th>
							</tr>
						</thead>
						<tbody>
							{
								records.map((item, index) =>
									<Record handleNewRecord={this.handleNewRecord.bind(this)} key={item.id+item.amount+item.date+item.amount} {...item} />
								)

							}

						</tbody>
					</table>
				</div>
			);
		}

		return (
			<div>
				<h2>Records</h2>
				<RecordsForm handleNewRecord={this.handleNewRecord.bind(this)} />
				{recordsComponnet}
			</div>
		)
	}
}

export default Records;
