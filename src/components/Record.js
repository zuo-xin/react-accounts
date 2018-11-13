import React, { Component } from "react";
import util from '../util'
import PropTypes from 'prop-types'




class Record extends Component {
  render() {
    return (
     	<tr>
			<td>{util.formatDate(this.props.date)}</td>
			<td>{this.props.title}</td>
			<td>{this.props.amount}</td>
		</tr>
    );
  }
}
	

Record.PropTypes = {
	id:PropTypes.string,
	date:PropTypes.string,
	title:PropTypes.string,
	amount:PropTypes.number
}


export default Record;
