import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-accent'>React Q/A</h1>
            <div class="grid grid-cols-1 w-9/12 mx-auto">
                <div class="p-10">
                    <h3 class="text-2xl font-bold mb-3">How does react work?</h3>
                    <p class="text-gray-500 text-xl">React is a declarative, efficient, and flexible JavaScript library for building user interfaces.While building client-side apps, a team of Facebook developers realized that the DOM is slow. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
                </div>
                <div class="p-10">
                    <h3 class="text-2xl font-bold mb-3">Difference Between props and state </h3>
                    <p class="text-gray-500 text-xl">Props allow you to pass data from one component to other components as an argument.State holds information about the components.Props are read-only. State changes can be asynchronous. Props are immutable.State is mutable.Props are used to communicate between components.States can be used for rendering dynamic changes with the component.Props can be accessed by the child component.State cannot be accessed by child components.Props are external and controlled by whatever renders the component.The State is internal and controlled by the React Component itself.</p>
                </div>
                <div class="p-10">
                    <h3 class="text-2xl font-bold mb-3">Uses of useEffect </h3>
                    <p class="text-gray-500 text-xl"> Validating an input while it's receiving characters is another great application for useEffect.We can use useEffect to filter an array "on the fly" by typing letters into an input element.We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. We want to trigger a state update due to an updated fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it.  </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;