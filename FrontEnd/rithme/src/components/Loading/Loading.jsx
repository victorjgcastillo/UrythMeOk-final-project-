import React from 'react'

import { Audio } from 'react-loader-spinner';

const Loading = () => {
  
  return (
    <div className='loader'>
      <Audio height="100" width="100" color='green' ariaLabel='Loading'/>
    </div>
  )
}

export default Loading