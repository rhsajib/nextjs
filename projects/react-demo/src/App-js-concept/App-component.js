


import './css/App.css';


const user = {
    name: 'Sajib',
    age: '30'
}


function Person(props){
    // console.log(props)  
    if (props.name && props.age) {
        return (
            <div className='person' key={props.name}>
                <h1>Name: {props.name}</h1>
                <p>Age: {props.age}</p>
            </div>
        )
    } else {
        return (
            <div className='person'>
                <h1>Name: {user.name}</h1>
                <p>Age: {user.age}</p>
            </div>
        )
    }
    // <h1>Name: {user.name}</h1> 
    // <p>Age: {user.age}</p> 

}

const friends = [
    {name: 'Kuber', age: 'friends age'},
    {name: 'Piash', age: 'friends age'},
    {name: 'Akash', age: 'friends age'},
    {name: 'Faruk', age: 'friends age'},
]


function App() {
    return (
        <div className='App'>
            {
                friends.map(friend => <li>{friend.name}</li>)
            }
            <h1 style={{color: 'red', backgroundColor: 'yellow', textAlign: 'center'}}>Component Writing style -1 </h1>
            <Person />
            <Person name="Rubel" age="40"></Person>
            <Person></Person>
            <Person name="Bapparaz" age="50"></Person> 
            
            <h1 style={{color: 'red', backgroundColor: 'yellow', textAlign: 'center'}}>Component Writing style -2 </h1>
            {
                friends.map(friend => <Person name={friend.name} age={friend.age} />)
            }
            
            <h1 style={{color: 'red', backgroundColor: 'yellow', textAlign: 'center'}}>Component Writing style -3 </h1>
            {
                friends.map(({name, age}) => <Person name={name} age={age} />)
            }
        </div>
    )
}



export default App;


