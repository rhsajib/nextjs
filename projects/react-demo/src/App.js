import { useEffect, useState } from 'react';
import './css/App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
    return (
        <div className='App'>
            <Header />
            <Countries />
            <Footer />
        </div>
    )
}





function Counter () {
    const [count, setCount] = useState(0)   // here, useState(0) means useState(initialState)
    // useState is a functionor hook which return 
    // an array of a value and a function like [value, function]
    // generally we use set prefix for function like [value, setValue] 



    // const increaseCount = () =>{
    //     const newCount = count + 1;
    //     setCount(newCount);
    // }


    // const decreaseCount = () =>{
    //     const newCount = count - 1;
    //     setCount(newCount);
    // }

    const increaseCount = () => setCount(count + 1)
    const decreaseCount = () => setCount(count - 1)

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}




function ExternalUsers () {
    const [users, setUsers] = useState([]);   // here, [] means no dependency


    // geenral format to write useEffect is 
    // useEffect(arrowFunction, dependencies)
    // useEffect( () => {}, [])    
    // here, [] means no dependency

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')  // API = https://jsonplaceholder.typicode.com/users
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>External Users</h2>
            <p>Total users: {users.length}</p>
            {
                users.map(user => <User name={user.name} email={user.email}/>)
            }
        </div>
    )
}


function User(props) {
    return (
        <div style={{
            border: '2px solid red',
            margin: '20px',
            borderRadius: '20px'
            }}>

            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
        </div>
    )
}






export default App;


