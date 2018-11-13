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
	

Record.propTypes = {
	id:PropTypes.string,
	date:PropTypes.number,
	title:PropTypes.string,
	amount:PropTypes.number
}


export default Record;
