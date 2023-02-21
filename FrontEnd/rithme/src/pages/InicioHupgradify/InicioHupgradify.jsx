import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading';

const InicioHupgradify = () => {
    const [loading, setLoading] =useState(false);
    setTimeout(()=>{
        setLoading(true)
    }, 2000)
  return (
    <div>{loading? <Header></Header> : <Loading></Loading>}
      
    </div>
  )
}

export default InicioHupgradify
