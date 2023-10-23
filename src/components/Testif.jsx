import React from 'react';

function coinToss(){
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// judgemental will be true half the time.
const judgemental = Math.random() < 0.5;

const people = ['Kenny', 'Matt', 'Nick', 'Adam'];
let peopleList = people.map((person,i) => 
    <li key= {'person_' + i}>{person}</li>
);

const h1reactElement = React.createElement(
    "h1",
    null,
    "Hello world"
);

const Testif = () => {
    // JSX Conditionals: IF ELSE CONDITIONS

    if (coinToss() == 'heads') {
        img  (
            <img src={pics.kitty} />
        );
    } else {
        img  (
            <img src={pics.doggy} />
        );
    };

    return (img);

}

export default Testif;