
import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';


class FooterPage extends React.Component {
    render(){
        return(
		<div style={{backgroundColor:'#263238',color:'#fff'}}>
		<Grid>
		<div>
		<Row className="py-4 d-flex align-items-center">
		<Col md={6}xs={3} className="text-center text-md-left mb-4 mb-md-0">
        <h6>Get connected with us on social networks!</h6>
        </Col>
        <Col md={6}xs={3}>
          <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
           <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
            <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
			<a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
            <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>  
		</Col>
		</Row>

		</div>			
		<Row className="container">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Company name</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.</p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4">
                            
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mb-4">
                            
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
					
				</Grid>
				<div className="footer-copyright text-center" style={{backgroundColor:'#000'}}>
                         &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> SoftwareSide.com</a>
                </div>
			</div>
        );
    }
}
      
export default FooterPage;