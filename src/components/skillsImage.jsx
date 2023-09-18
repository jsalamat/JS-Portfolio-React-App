import React, { useState } from 'react';
import {
    Card, 
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';


function skillsImage({ title, alt, img, svg  }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Card className="my-2">
            {/* <CardImg
            alt={ alt }
            src={img}
            style={{height: 180}}
            top
            width="100%"
            /> */}

            <div className="w-full" dangerouslySetInnerHTML={{ __html: svg }} />

            <CardBody>
            <CardTitle tag="h5">
                Title: { title }
            </CardTitle>
            <CardText>
                Alt: { alt }
            </CardText>
            </CardBody>
            
        </Card>
      </div>
    );
  }

  skillsImage.defaultProps = {
    alt: 'Dev Skills',
    title: 'Skills',
    img: 'https://picsum.photos/900/180',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"/></svg>'
  }
  
  export default skillsImage;