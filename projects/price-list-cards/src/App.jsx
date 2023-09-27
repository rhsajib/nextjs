import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import Phones from './components/Phones/Phones'


function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar />
            <h1 className='text-6xl text-purple-100'>Hello from tailwind</h1>
            <ProductList />
            <Phones />
        </div>
    )
}

export default App
