import React, { Component} from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
import Avatar from 'react-avatar';

const style={
	overflowY:'scroll',
	height:180,
	overflowX:'hidden'
};

class List extends Component{
	render(){
		return(
		<div style={style}>
		<Row>
		<Col md={2} xs={3}>
		<Avatar name="Ankesh" round={true} size="50"/>
		</Col>
		<Col md={4} xs={3}>
		<b>UserId007</b>
		<p>
		nic
		</p>
		</Col>
		</Row>
		<hr/>
		</div>
		);
	}
}

export default List;