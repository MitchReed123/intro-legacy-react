/*
DIFFERENCES BETWEEN FUNCTIONAL AND CLASS COMPONENTS

    - SYNTAX 
        - the most obvious difference between functional and class componets is the syntax
        - a class component requires you to extend from React.Component and create a render function which returns the React element. This requires more code but also unlocks the use of other feateres - like state
    
    - STATE
        - because functional components are just plan JS functions, you cant use setState() in them. Functional components are also known as stateless components.
        - If you need a state in your component, you will either need to create a class component, or make sure your parent component is a class compoent so you can pass down the state via props 


    - LIFECYCLE METHODS
        - Lifecycle methods are another feature you cannot use with functional components, and you can only use with class components - just like state. Both state and lifecycle methods come from the React.Component you extend from in class components.

    - WHY USE FUNCTIONAL COMPONENTS AT ALL?
        - functional components are easier to read and test since they are just JS functions without state or lifecycle methods
        - less code
        - help you implemnt best practices. It will get easier to separate stateful and stateless components since you need to think and plan your components out more, without both class and funtional components have access to all of the react logic we need.

*/

/*

LIFECYCLE METHODS

    - React Components have whats known as a lifecycle. The different points during the lifecycle of a React component are accessible via lifestcle methods
        - the basic lifecycle of react components :
            - Creation
            - Mounted
            - Unmounted
            - Destroyed
        - each of these phases of a compenents lifecycle have methods that are called automatically at each point during the lifecycle, that give you control over what happens at the time those methods are invoked

        NOTE: Lifecycle methods are inteded to be a last resort. They are to be used in special cases, when other fallbacks like rearranging your components or moving your state around wont work
            - there are edge cases here, like fetching from an API. You cant guarantee that your fetch will resolve before teh component finishes mounted. If it did, youd be trying to setState on an unmounted component, which will throw you an error. 

*/
