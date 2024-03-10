import React, { useState } from 'react';
import {
    Card, 
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';


function featureWork({ image, title, alt, cat, description, url}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Card className="my-2">
            <img
            alt={ alt }
            src={image}
            style={{height: 180}}
            top
            width="100%"
            />

            <CardBody>
            <CardTitle tag="h5">
                Title: { title }
            </CardTitle>
            <CardText>
                Alt: { alt }
            </CardText>
            <CardText>
                Category: { cat }
            </CardText>
            <CardText>
                Description: { description }
            </CardText>
            <CardText>
                Link: { url }
            </CardText>
            </CardBody>
            
        </Card>
      </div>
    );
  }

  featureWork.defaultProps = {
    image: 'https://picsum.photos/900/180',
    title: "Work Sample",
    alt: "Image Alt Tag",
    cat: "feature wordpress hubspot ecommerce react html css javascript php tailwind other",
    description: "N/A",
    url: "/"
  }
  
  export default featureWork;