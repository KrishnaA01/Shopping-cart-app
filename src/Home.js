import React from 'react'
import { CartState } from './context/Context'

const Home = () => {

  const { state } = CartState();
  console.log(state.products);
  

  return (
    <div>Home</div>
  )
}

export default Home