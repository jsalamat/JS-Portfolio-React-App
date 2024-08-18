import React, { useState } from 'react';
import {
    Card, 
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';


function featureWorkB({ image, title, alt, cat, url}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div  className="card-portfolio" style={{ color: '#ffffff' }}>
                <a href={url} target="_blank" >
                    <div className="imageRowImageContainer " style={{ background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                    </div>
                    <div className="imageRowTextArea" >
                        <div className="imageRowTextArea-inner">
                            <p>{title}</p>
                        </div>
                    </div>
                </a>
        </div>
    );
  }

  featureWorkB.defaultProps = {
    image: 'https://picsum.photos/900/180',
    title: "Work Sample",
    alt: "Image Alt Tag",
    cat: "feature wordpress hubspot ecommerce react html css javascript php tailwind other",
    url: "/"
  }
  
  export default featureWorkB;