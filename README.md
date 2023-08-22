# The useEffect Hook allows you to perform side effects in your components.
# Some examples of side effects are: fetching data, directly updating the DOM, and timers.
# useEffect accepts two arguments. The second argument is optional.
# useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
# Some effects require cleanup to reduce memory leaks.
# Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
#  We do this by including a return function at the end of the useEffect Hook.
