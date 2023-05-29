import React from 'react';

const UseCallback = () => {

/* 
    useCallBack is a React Hook that lets you cache a function definition between re-renders.

    const cacheFn = useCallback(fn, dependecies);


    call useCallback at the top of your component to cache a function definition between re-renders:

    fn:-
        - the function value that you want to cache.
        - it can take any arguments and return any values.
        - React will return (not call!) your function during initial render
        - On the next render react will give you the same function if the dependencies have not changed since last render
        - otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later.
        - React will not call your function.
        - The function is returned to you so you can decide when and weather to call it.
        - React will compare each dependencies with it's previous value using th Object.is comparsion algorithm.



    Returns:-
        - On the initial render, useCallback returns the fn function you have passed.
    

    Caveats:-
        - useCallback is a Hook, so you can call it at the top level of your Component
        - React will not throw away the cached function unless there is specific reason to do that
        - in development, React throw away the cache when you edit the file of your component.
        - React will throw away the cache if your component suspend during initial mounting
        
        

    Usage:-
      - Skiping re-rendering of components
      - when you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components


    You need to pass two things to useCallback
    - A function definition that you want to cache between re-renders
    - A list of dependencies including every value of your component that's used inside your function
*/


  return (
    <div></div>
  )
}

export default UseCallback