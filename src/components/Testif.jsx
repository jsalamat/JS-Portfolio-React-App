import React from 'react';
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

function coinToss(){
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}
let coinresult;

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

const people = ['Kenny', 'Matt', 'Nick', 'Adam'];

//  const greatestDivEver = <div>i am div</div>;
// create the element above without using JSX

const greatestDivEver = React.createElement(
    "div",
  null,
  "i am div"
);

// const Testif = () => {
    
//     if (coinToss() == 'heads') {
//         img = (
//             <img src={pics.kitty} />
//           );
//         } else {
//         img = (
//             <img src={pics.doggy} />
//         );
//         }
//     return img;
    
// }

// OR

const Testif = () => {
    coinresult = coinToss();

    let peopleList = people.map((person,i) => 
    <li key= {'person_' + i}>{person}</li>
    );

    return (
    <div>
        <p>{coinresult}</p>
        <img src={pics[coinresult === 'heads' ? 'kitty' : 'doggy']} />

        <br/>
        <ul>
            <li>Sushi Burrito</li>
            <li>Rhubarb Pie</li>
            {!judgmental &&<li>Nacho Cheez Straight Out The Jar</li>}
            <li>Broiled Grapefruit</li>
        </ul>

        <br/>
        <ul>{peopleList}</ul>

        {greatestDivEver}
    </div>
    )
}

export default Testif;