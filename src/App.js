import React, {useState} from 'react';
import { FetchCard } from './FetchCard';
import {ResizeApp} from './ResizeApp';
import {Lifecycle} from './Lifecycle';


function App() {
  const [show, setShow] = useState(false); //como valor inicial se deja false paa que no renderice en la primera carga
  return (
    <div>
      {show && <Lifecycle/>}
      {<FetchCard/>}
      {show && <ResizeApp/>}
      <button onClick={() => setShow(!show)}> 
        Show/Hide
      </button>
    </div>    
  );
}

export default App;
