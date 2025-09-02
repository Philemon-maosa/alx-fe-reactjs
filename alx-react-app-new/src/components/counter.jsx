import {useState} from 'react';

function Counter() {
const [count, setCount] = useState(0);

return(
<div>
<h2>Counter: {count}</h2>
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset = () => setCount(0);
</div>
);
}
export default Counter;