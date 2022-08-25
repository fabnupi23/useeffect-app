import React, {useEffect, useState} from 'react'

const ResizeApp = () => {
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);  

    const isMobile = windowWidth < 768;
    
    useEffect(() => {
        const handelResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handelResize);     

        return () => {  //CleanUp o accion que se ejecuta cuando el componente se desmonta, me ayuda a no ocupar mas estados en memoria
            window.removeEventListener('resize', handelResize);
        }
    },[]);


  return (
    <div>
        <h1>{windowWidth}</h1>
        {isMobile && <h2>Show en linea de dispositivos moviles</h2>}
    </div>  
  )
}

export { ResizeApp };