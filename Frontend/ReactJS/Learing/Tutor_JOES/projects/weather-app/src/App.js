import React from 'react'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import humidity from './assets/humidity.png'
import rain from './assets/rain.png'
import search from './assets/search.png'
import snow from './assets/snow.png'
import wind from './assets/wind.png'



const App = () => {
  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text" placeholder='Enter City Name' className='cityInput'/>
          <div className='search-icon'><img src={search} alt='search'/></div>
        </div>
      </div>
    </>
  )
}

export default App
