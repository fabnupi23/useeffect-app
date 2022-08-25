import React, { useState, useEffect } from 'react' //importamos el useState para poder crear un estado e importamos también el useEffect

console.log('preRenders');

const Lifecycle = () => {
    
    console.log('LogicRender');
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);


    useEffect(() => {
        console.log('useEffect  []');
        return () =>{
            console.log('cleanUp - useEffec []')
        }
    });
    

    //--------------1
    useEffect(() => {
        console.log('useEffect no dependency');
        return () =>{   //Función de celanup que se va a ejecutar por cada efecto
            console.log('cleanup - useEffec no dependency')
        }
    });

    //--------------2
    useEffect(() => {
        console.log('useEffect [] arreglo vacio');
    }, []);


    //--------------3
    useEffect(() => {
        console.log('useEffect [counter1]');
        return () =>{   //Función de celanup que se va a ejecutar por cada efecto
            console.log('cleanup - useEffec [counter1]')
        }
    }, [counter1]);

    useEffect(() => {
        console.log('useEffect [counter2]');
        return () =>{   //Función de celanup que se va a ejecutar por cada efecto
            console.log('cleanup - useEffec [counter2]')
        }
    }, [counter2]);

    //--------------4
    useEffect(() => {
        console.log('useEffect [counter1] y [counter2]');
        return () =>{   //Función de celanup que se va a ejecutar por cada efecto
            console.log('cleanup - useEffec [counter1, counter2]')
        }
    }, [counter1, counter2]);

  return (
    <div>
        {console.log('returnRender')}
        <h1>Clicks c1: {counter1}</h1>
        <h1>Clicks c2: {counter2}</h1>

        <button onClick={() => setCounter1(counter1+1)}>
            Increment c1
        </button>

        <button onClick={() => setCounter2(counter2+1)}>
            Increment c2
        </button>
    </div>
  )
}

export {Lifecycle}