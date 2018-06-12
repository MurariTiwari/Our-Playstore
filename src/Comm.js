import React, { Component } from 'react';
import {Form,FormControl,Col,FormGroup,ControlLabel,Grid,Row,Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import List from './List';

class Comm extends Component {
  render() {
    return (
	<div className="container"> 
		<hr/>
		<Grid>
	<Row>
    <Col md={6} xs={12}>
	<List />	
	</Col>
	<Col md={6} xs={12}>
	<Form horizontal>
	<h4>Feedback</h4>
	<FormGroup>
    <Col xs={12}>
      <FormControl componentClass="textarea" placeholder="Enter Your Feedback" style={{resize:'none',width:'100%',height:100}}/>
    </Col>
  </FormGroup>
	</Form>
	<Button bsStyle="primary" style={{float:'right'}}>Submit</Button>
	</Col>
	</Row>
	</Grid>
	<br/><br/><br/><br/><br/><br/><br/>
  </div>
  
	);
  }
}
export default Comm;