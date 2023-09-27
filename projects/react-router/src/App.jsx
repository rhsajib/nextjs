
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {
    const navigation = useNavigation();
    return (
        <div>
            <h1>This is main page</h1>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet />
        </div>
    )
}

export default App
