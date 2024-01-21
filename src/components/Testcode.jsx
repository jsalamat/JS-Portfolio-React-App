import React from 'react';
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

const testname ='Kenny Omega';

function makeDoggy(e) {
    // Call this extreme useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
};

const Testcode = () => {
    return (
        <div className="testDiv">
            <h1> 2 + 2 = {2 + 3}</h1>
            <p>{Math.PI.toFixed(20)}</p>
            <p>{testname}</p>
            <img src={goose}/>
            <img
                src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
                alt="kitty"
                onClick={makeDoggy}
            />
        </div>
    )
}

export default Testcode;