import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <div>
       <img
          className='loading'
          src={'https://media.giphy.com/media/W5s26R38g69Uc9CWCI/giphy.gif'}
          alt={''}
        />
      <p>Hang tight...delivering your data</p> 
    </div>
  )
}

export default Loading