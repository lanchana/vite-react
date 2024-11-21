import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)

  const fetchId = async () => {
    const {data} = await axios.post('https://yourLocalIPAddress/invoices', {currency: 'USD',
      price: 1,
      token: 'TokenAbc'})

    console.log(data.data.url)
    bitpay.showInvoice(data.data.id)
  }

  console.log(bitpay)
  return (
      <>
        <button onClick={fetchId}>Checkout</button>
        </>
  )
}

export default App
