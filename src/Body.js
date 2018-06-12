import React, { Component } from 'react';
import {Grid,Col,Row,Carousel} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Details from './Details';

class Body extends Component {
  render() {
    return (
	<div className="container">
	<Grid>
	<Row>
    <Col md={6} xs={12}>
		<Carousel style={{borderRadius:100}}>
		  <Carousel.Item>
			<img width='800' height='400' alt="Image" src="/a.jpg" />
		  </Carousel.Item>
		  <Carousel.Item>
			<img width='800' height='400' alt="Image" src="/a.jpg" />
		  </Carousel.Item>
		  <Carousel.Item>
			<img width='800' height='400' alt="Image" src="/a.jpg" />
		  </Carousel.Item>
		</Carousel>
    </Col>
    <Col md={6} xs={12}>
	<Details />
	 </Col>
    </Row>
	</Grid>
	</div>
	);
  }
}
export default Body;