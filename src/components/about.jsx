import React from 'react';

const Aboutus  = () => {
    return (
    <section className="flex container">
        <div className="w-1/2">
        {/* <h1>{2 + 3}</h1> */}
        {/* {Math.PI.toFixed(20)} */}
        <img src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="placeholder dev" class="dev-img"/>
        </div>
        <div className="w-1/2">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non volutpat nulla. Curabitur lacinia, urna vel mollis feugiat, ipsum velit accumsan urna, ut sodales nibh massa sit amet augue. Etiam vel lectus orci. Suspendisse fringilla massa eu erat lacinia, a eleifend ante efficitur. Duis porta molestie mauris, ut fermentum neque ullamcorper quis. Etiam pretium egestas magna at luctus. Donec volutpat felis felis, vitae maximus quam luctus vitae.</p>
        </div>
    </section>
    );
};

export default Aboutus;