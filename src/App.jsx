import React from 'react'
import WeatherTimeData from './components/WeatherTimeData'

const App = () => {

  return (
    <div className='container text-center'>
      <h1 className='mt-4'>WeatherTime</h1>
      <WeatherTimeData />
    </div>
  )
}

export default App