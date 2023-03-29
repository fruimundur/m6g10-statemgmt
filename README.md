For this project I built a simple counter, using the useState React hook to keep track of the state of the count. When using the useState hook the state value is not global, so in order to use it in other components you have pass it using props. While this works fine it can get complex as your component tree grows. An alternativ is to use a state management library which allows you to use global state values.

I used the Recoil state management library, and more specifically the useRecoilState hook which is very similar to the useState hook. As you can see in my 'src' folder I have a file called atoms.js, which is where I'm storing the state of the count globally.

If you're interested in learning more about Recoil you can see their documentation here: https://recoiljs.org/