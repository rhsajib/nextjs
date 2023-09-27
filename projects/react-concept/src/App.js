import { useEffect, useState } from 'react';
import './css/App.css';

function App() {
    return (
        <div className='App'>
            <LoadPost></LoadPost>
            <District name='Dhaka' specility='Capital'></District>
            <District name='Noakhali' specility='Noakhaillllllllaaaaa'></District>
        </div>
    )
}


const districtStyle = {
    backgroundColor: 'lightblue',
    margin: '20px',
    borderRadius: '20px',
    padding: '20px'
}

function District(props){
    const [power, setPower] = useState(1);
    const boostPower = () => setPower(power * 2)
    return (
        <div style={districtStyle}>
            <h2>Name: {props.name}</h2>
            <p>Speciality: {props.specility} </p>
            <h4>Power: {power}</h4>
            <button onClick={boostPower}>Boost the power</button>
        </div>
    )
}


function LoadPost() {
    const [posts, setPost] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, []) 
    // console.log(post)
    return (
        <div>
            <h2>Total Posts : {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}

function Post(props){
    return (
        <div style={{
            backgroundColor: 'lightgreen',
            border: '1px solid',
            borderRadius: '10px',
            margin: '20px',
            padding: '10px'
            }}>
            <h3>Title: {props.post.title}</h3>
            <p>Body: {props.post.body}</p>
        </div>
    )
}



export default App;
