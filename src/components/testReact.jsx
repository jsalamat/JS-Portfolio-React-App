import React from 'react'


const people = ['Rowe', 'Prevost', 'Gare'];


const testReact = () => {
    const peopleList = people.map((person,i) =>
    <li>{person}</li>
    );
    
  return (
    <ul>{peopleList}</ul>
  );
}

export default testReact