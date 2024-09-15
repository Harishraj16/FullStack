import React from 'react'
import './App.css'


const App = () => {
  const [advice, setadvice] = React.useState(""); 
  const [count, setcount] = React.useState(0);

  async function getadvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    const newAdvice = data.slip.advice;
    setadvice((prevAdvice) => {
      if (newAdvice !== prevAdvice) {
        setcount(c => c + 1);
      }
      return newAdvice;
    });
  }

  React.useEffect(function(){
    getadvice();
  },[])

  return (
    <>
      <div className='whole-container'>
        <div className='container'>
          <h3>{advice}</h3>
          <button onClick={getadvice}>Get Advice!</button>
          <p>You've got <b>{count}</b> advices!</p>
        </div>
      </div>
    </>
  )
}

export default App
