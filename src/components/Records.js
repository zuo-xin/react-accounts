import React, { Component } from "react";
import Record from './Record'

import * as RecordsAPI from '../utils/RecordsAPI'

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
	render() {
		const { error, isLoaded, records } = this.state;
		if (error) {
			return <div>Error:{error.message}</div>
		} else if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div>
					<h2>Records</h2>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Date</th>
								<th>Title</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							{
								records.map((item, index) =>
									<Record key={item.id} {...item} />
								)

							}

						</tbody>
					</table>
				</div>
			);
		}
	}
}

export default Records;
