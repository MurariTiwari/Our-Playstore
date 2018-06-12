import React, { Component } from 'react';
import {Grid,Col,Row,Tooltip,OverlayTrigger,Button} from 'react-bootstrap';

const tooltip = (
  <Tooltip id="tooltip">
    Like
  </Tooltip>
);
const tooltip1 = (
  <Tooltip id="tooltip">
    Dislike
  </Tooltip>
);
class Details extends Component{
	render(){
		return(
		<div id="root1">
		<h3  style={{textAlign:'center',fontFamily:'Merienda'}}>Gaming Laptop</h3>
		<br/>
		<p  style={{textAlign:'center',fontFamily: 'Hind Vadodara',fontSize:20}}>A gaming computer is a personal computer designed for playing computationally demanding video games. Due to the integration of common hardware components onto the motherboard since the 1990s, a modern gaming computer is comparable to a mainstream computer with the addition of a performance-oriented video card.</p>
		<hr />
		<span>
		<Grid>
		<Row>
		<Col md={1} xs={3}>
		<OverlayTrigger placement="top" overlay={tooltip}>
		<a href="#">
		<img width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARQSURBVFhH5ZhZqFVVGMePlZERNFBhI5JloWWODyaZJmVRvQhRFCJSphGFqKE+NZlFaiqYWjhQDxENUhk9JEqkVIamIJLlkJVRUUrapFbm77fu3XruPns6m7PtwT/8uOdbZ++91v3W2t9waieCusJQuAsegPtgJPSHM+C46yRwQS/B1/BfBv/AOngCukOlcmGjYSs4+d+wBmbAPTAE9JqMgHGwEL4Crz8M78BAaLn6wXpwol0wEc6HoroW5sOf8C/o/bOgJXoIDsCv8Ah0hrK6AF4BvbkT9HZpdYLnQa99ApdCmrx2EiwAvZ2n2+AX+A1udqCMZoOLew1OdSBDd4LXun0HYRjk6XLQi15/owPN6GFwwlfhZAdy5JlyoivgB/DNLaKL4Tvw+PRwoIj6gpN9DHmei7QJPm/7WHsZvL+oroE/YCPkzqe3fFv3QdaZq5dhQ28/Fqxa7Q34qe1jYY0FnzEtWBkyznmhb2sRnQl6zy0yo/iyfA8fQjPyvo/gdzjPgSQZiA3CxrkioeQi+BQMGXc7gMww/oPGyWY1GLzXwJ+o6OETgpWtQfAjmE3GO9Aut9dgfG6wmpde9LmnBCumxXAI8jKEMcxD/TPEw4mxzUncjTK6H3RSYmw08Ztbs3QVuLjtYEiJSw86gW/x3hi7wVx8JaTJc+yReS5YdfILH/x0sJKl233D/4JeDiSoCxhDl8DrMd4DM8dmyNIXsLbt4zHdAC7w3mAlazp4jSmtrJaCeT1Ly8Gj0kGWS05+fbAaFZ0Nt6js+VJvguf81mAlay44V4egbSXsYJ9gNcr4OA9OD1Z5eYa3wH7wOCTpSXAt5wSrXWPAwUqKyZisrp3rwmA16hnwe5PAUUXVyPBgVSePkGnU7JOmRWBVZHY5KgtHF1gfdKuQR8XJVwYrWR+AIa+D7L5scOwhqtazoDOSEoJes9BYEayYrOG+bPtYmczfxlLTYVJL2htc/KPBiulx8Mu0N7kV0gHuVFq8fQpcQ89gxWTfapp5IVjVyGLWVJlUDBj3voENwUrRu6D77b7qNRV8sGnKf8BA22zb6Ja+D1ZASeVcVLSOClaKBoBetDWs1y3wFnh+3CIfJDvgbbCbM8BOacd06F+r7BdhFViMek9DIYD8Z+1lrEcTS6162QC5yNuD1ShrPVPjLFgNvnWGjmjRcfzuW7BguAOS5NZ7baEW1AhuO7gHbA2LyPBwNnSDy+qwSsqrzh8EF2eALiwDt2duG1ziQEXyVzCPjK3DaQ40o5vA0sjtsTVstSxQXJznLrVRypMlvR2b3rTk6pAfS8oXYhm4rZ9B6cVFsrS3qfaB9hvXQRkZ5wwlvq0+y7e76W1Nkw+3qbZk9+H2LnrUlyBLetz0ZQjyJw7vdUs9PpXI7bBvMbQ4WTShMXIOmKosBiw6rErqrzOGGoRz41wr5E8kemEm6E17iGghYuwzVNkoTYar4X+X8c5YKCeKarUjGmIUvCtY9hYAAAAASUVORK5CYII="/>
		</a>
		</OverlayTrigger>
		<div>100</div>
		</Col>
		<Col md={1} xs={3}>
		<OverlayTrigger placement="top" overlay={tooltip1}>
		<a href="#">
		<img width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARHSURBVFhH5ZhZ6BVVHMf/poXaapoptKHpQ6SW24PRKpWQDypUkIiUaWq4IEr2IlravgmWFmWlIJUUqeGDCIKKpZgiiUuiuTyUoGSm0WLL53Puf/Le+c/cmTvdaw9+4QP3nJk755zfnPNbpul8UBe4Cx6GcTAGRkA/uATOuS4AJ/QOfAd/V+EMbIY50B0aKic2GvaAg/8BG+A5eATuAK0m98MTsBC+Be//C1bAAKi7+sJWcKCDMA06Q171gQXwC/wJWv8KqIuehF/hBEyGC6GousIS0JoHQGsXVit4DbTal3Ad1EsPwDH4Ge6zo4heBSf3EVxkR511I2jF3+AeO2rRJHByy6C1HQ3SNXAE3D497cijW8FVbYIsy3WA22E46ANd2FNleJIfgoGQ9qxecBq2Q+ab0lqe1p8gvue8dj08Dp+Ar0cr58VJvAcdIa6x4D1Ph1YV6ee80dNarimg34sGOwlr4WUYBYNBy3eLoXvxEEyET0HH7ZuJywO5Hk7BVXYkSUesE9bPxV3JMFgKRgQ3dNFD8ya4wHahVanbwGs6/kQZvrxhamg1RutA66ctUCv+AG1CK6Z34XeoJULUKveuRng/tFrK/e31RN9o4De2NlqLwUhydWhVyszIay+FVpm84MznhVbj5N77AnxT7e1I0G7YWPp5VneCExwZWo3TLHCcD0IrWZ+BYbBCpkv+UafbSOlCdMg/QuJBQG+Ac6k4SEYBO28JrZa6DNIeWKt0VY6Vlnw8A16/MrSa9SjYmZZMzoRDYFj6L/JN6Yx3QlqMfx6cy+Wh1awHwU4jQpLcowZ0A3snOwrKaGLISzrBkRaBSa3R5V+ZODrB8aGVrCGgC9CXFZF7ygma/FbTGtDlVcjqyzhpDVFNpuouxPibpJvBaHEcvC8JU7g0abWjsCq0YrL62lv6maqLYRfoxx6zI6YdYCb0MbwdYz6YjLSFNPUGFzEjtGKaDV5MO8mRdOpfg/eadZdvdg9SUraSV8+Cz70ptGKybnWPmXFk6VL4HHzYaoh8liEqzyKT5DNcoItP1UqwNLT6ypL7ZS44obfsQDeAi3wltGpTlLSm7e+g/uAAloZ5ZZbsf0zr1Tb4pvQzt6yRvwfz0cyA4El1wKGhlS3DlzWMWYr6EDwotcj/aL1cJage3HpDV2FpmEf6rv2ln+HzhklpXk0AJ6eDzi0dtx5/H1xrR4ZeBAeZDlpzOeSRX8H0v19BNfeTqHtBr38YsmKwC3JiTtJ9lFr4lMkExcnlvT9Rd4MxWGuajlfEx5is4iyosizhgTDldzFboPDkIvUAczgfaFEzCIpIP6cr8bT6LKNLza81TT7cotqPPT7c2kWLGlWqSYsbvszxzISiLeD2aYh8HdYtBnQHiwY0S3kdDFUvgEmHJ7v8Pr9Y6ITrlfhWlfFXK/hlQWtaQ0QTEfM5XZUFkifbLOd/l18j/Jgk54uamv4BBfcUrEyXjSgAAAAASUVORK5CYII="/>
		</a>
		</OverlayTrigger>
		<div>100</div>
		</Col>
		<Col md={2} xs={0}>
		</Col>
		<Col md={2} xs={6}>
		<a href="#">
		<Button style={{backgroundColor:'#4CAF50',color:'#fff'}}>Download</Button>
		</a>
		</Col>
		</Row>
		</Grid>
		
		</span>
	</div>	
	);
	}
}
export default Details;
	