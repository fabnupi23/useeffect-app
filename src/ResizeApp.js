import React, {useEffect, useState} from 'react'

const ResizeApp = () => {
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);  

    const isMobile = windowWidth < 768;
    
    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));     
    },[]);


  return (
    <div>
        <h1>{windowWidth}</h1>
        {isMobile && <h2>Show en linea de dispositivos moviles</h2>}
    </div>  
  )
}

export { ResizeApp };