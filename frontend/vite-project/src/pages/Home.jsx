import React from 'react'
import { Hero } from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Policycomponent from '../components/Policycomponent'
import Sub from '../components/sub'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection></LatestCollection>
      <Bestseller />
      <Ourpolicy />
      <Sub />
    </div>
  )
}

export default Home