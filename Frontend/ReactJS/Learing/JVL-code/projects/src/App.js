// import './App.css';
// import { useState } from 'react';

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

// function AboutPage(){
//   return(
//     <>
//     <h1>About</h1>
//     <p>Hello there. <br/>how do you do?</p>
//     </>
//   );
// }

// //Rendering lists:   ----------------------------------

// const user = {
//   name: "John Doe",
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90
// };


// const products = [
//   {title:'Cabbage',isFruit:false, id:1},
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 }
// ];


// function ShoppingList(){
//   const listItems = products.map(product=>
//     <li
//     key={product.key}
//     style={{
//       color : product.isFruit? 'magenta' : 'blue',
//     }}
//     >
//       {product.title}
//     </li>
//   )

//   return(
//     <ul>{listItems}</ul>
//   );
// }


// //Responding to events: -------------------------------
// //Counters that update separately

// function CountbtnClickSeparate(){
//   const [count,setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }

//   return(
//     <>
//     <button onClick={handleClick}>
//       Clicked {count} times!
//     </button>
//     </>
//   );
// }

// //Responding to events: -------------------------------
// //Counters that update together
// function CountbtnClickTogether(){
//   const [count,setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }

//   return(
//     <>
//     <h1>Counter that update together!</h1>
//     <Btn count={count} onClick={handleClick}/>
//     <br/>
//     <Btn count={count} onClick={handleClick}/>
//     </>
//   );
// }

// function Btn({count,onClick}){
//   return(
//     <button onClick={onClick}>
//       Clicked {count} times!
//     </button>
//   );
// }




// function App() {

//   // return (
//   //   <>
//   //   <h1>Welcome to my app!</h1>
//   //   <MyButton/>
//   //   <AboutPage/>
//   //   </>
//   // );

//   // return (
//   //   <>
//   //   <h1>{user.name}</h1>
//   //   <img
//   //     className='avatar'
//   //     src={user.imageUrl}
//   //     alt={'Photo of '+user.name}
//   //     style={{
//   //       width: user.imageSize,
//   //       height: user.imageSize,
//   //     }}
//   //   />
//   //   </>
//   // );

//   // return (
//   //   <>
//   //   <ShoppingList/>
//   //   </>
//   // );

//   // return(
//   //   <>
//   //   <h1>Counters That update Separately!</h1>
//   //   <CountbtnClick/>
//   //   <br/>
//   //   <CountbtnClick/>
//   //   </>
//   // );
  
//   return (
//     <>
//     <CountbtnClickTogether/>
//     </>
//   );

// }

// export default App;


// export default function Board(){
//   const[squares,setSquares] = useState(Array(9).fill(null));
//   return(
//     <>
//       <div className="board-row">
//         <Square value={squares[0]} />
//         <Square value={squares[1]} />
//         <Square value={squares[2]} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} />
//         <Square value={squares[4]} />
//         <Square value={squares[5]} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} />
//         <Square value={squares[7]} />
//         <Square value={squares[8]} />
//       </div>
//     </>
//   );
// }




// Tic Tac Toe Game! ------------------------------------->

import {useState} from 'react';
import './App.css';

function Square({value,onSquareClick}){
  return (
  <button className='square' onClick={onSquareClick}>
    {value}
  </button>
  );
}

function Board(){

  const [squares,setSquares] = useState(Array(9).fill(null));
  const [xIsNext,setxIsNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if(xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: "+winner;
  } 
  else{
    status = "Next player: "+(xIsNext?"X":"O");
  }
  
  return(
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>  
  );
};

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++){
    const[a,b,c] = lines[i];
    if(squares[a] && squares[a]==squares[b] && squares[a]==squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
