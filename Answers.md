1. What problem does the context API help solve?

    --Context API solves the problem of prop drilling. It is cleaner code that still lets you share specific data all over your application.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    --Actions are objects with two keys; type and payload. Actions send data from your app to your store, which holds the app state. It is known as the single sourse of truth because it brings everything together in your app. Reducers are like the middle man that react to the application's state depending on the actions, it also makes code more concise.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    --Applicaton state used a lot of prop drilling, passing props down from a parent. And Component state uses store, which holds everything in your app. Application is global and component is local. Component uses a single component. I think depending on what you're trying to pass down is when you would decide which one to use.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    --Redux-thunk interacts with the store and it's a middleware used to write sync and async logic.Actions turn into functoins.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    --I really like context state management, for me it's a lot easier to understand. I'm still learning!