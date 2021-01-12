import React from 'react'
import { Container,Row } from 'react-bootstrap';

export interface ProductDetailsProps {
    
}
 
const ProductDetails: React.FC<ProductDetailsProps> = () => {
    return ( 
      <Container>
          <Row>
              <div className="col-md-6 col-sm-12">
                <p>hello</p>
              </div>
          </Row>
      </Container>
     );
}
 
export default ProductDetails;