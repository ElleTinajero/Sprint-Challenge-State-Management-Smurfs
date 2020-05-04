1. What problem does the context API help solve?
        --The problem context API solves is prop drilling.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        --Reducers are functions that listen for changes in the application, when theyre called (dispatched) those changes are injected into the state.
        
        Actions are pieces of logic that send data to the store. The actions are the only thing sending that information to the store. They are what the reducers are listening for. The store is known as a 'single source of truth" because it is a one way pattern for information to be removed and added to the state and it relys on reducers and actions.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
        --Application state is global, component state is local. When using single component and it's children, you don't need to provide it in the application state. When using multiple components, application state is good for passing data around.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        --'redux thunk' is a middleware that lets you call action creators that return a function instead of an object in order to dispatch and update the state with the reducer asynchronously.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
        --I personally enjoy writing redux. I think it's quite fun, mostly because I understand the flow and how it works to some extent. I need more practice with context. 