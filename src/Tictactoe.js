import React, { useState } from 'react';
import './tic.css';

const TicTacToe = () => {
	const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}

		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}><h1>{cells[num]}</h1></td>;
	};

	return (
		<div className='container'>
			<table>
				<h1>Turn: {turn}</h1>
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
            <div className="winner">   
			{winner && (
				<>
					<h1>{winner} is the winner!</h1>   
					
				</>
			)}
            </div>
            <div className="button">
            <button onClick={() => handleRestart()}>Restart</button>
            </div>
		</div>
	);
};

export default TicTacToe;


// const TicTacToe = () => {
// const [turn , setTurn] =useState('x');

// const [cells , setCells] = useState(Array(9).fill(" "));
// const [winner , setWinner] = useState();
// const checkForWinner = (square) => {
//     let combos= {
//         across: [[0,1,2],[3,4,5],[6,7,8],],
//         down: [[0,3,6],[1,4,7],[2,5,8],],
//         digonal:[[0,4,8],[2,4,6],],

//     };
//     for(let combo in combos){
//        combos[combo].forEach((pattern) => {
//            if(
//                square[pattern[0]]=== "" || 
//                square[pattern[1]]=== "" || 
//                square[pattern[2]]=== "" 
//            ){      }
//            else if(square[pattern[0]]===square[pattern[1]] &&
//             square[pattern[1]]===square[pattern[2]]  ){
//                setWinner(square[pattern[0]]);
//             }
//        } ) 
//     }
// }


// const Cell = ({num}) => {
//     return <td onClick={() => {handler(num)}}   ><h1>{cells[num]}</h1></td>
// }
// const handler= (num) =>{
// if(cells[num]!== " "){
//     alert("cheater!!!");
//     return;
// }


// let square =[...cells]
//      if(turn==="x"){
//          square[num]='x';
//      setTurn("o")
//      }
//      else{
//         square[num]='o';
//          setTurn('x')
//      }

//      checkForWinner(square);
//      setCells(square);
//     //  console.log(square);
// }


// return(
// <div className="container">

    
//   <table>
//   <h1 >turn: {turn}</h1>
//     <tbody>
//         <tr>
//         <Cell num={0}/>
//         <Cell num={1}/>
//         <Cell num={2}/>
//         </tr>
//         <tr>
//         <Cell num={3}/>
//         <Cell num={4}/>
//         <Cell num={5}/>
//         </tr>
//         <tr>
//         <Cell num={6}/>
//         <Cell num={7}/>
//         <Cell num={8}/>
//         </tr>
//         </tbody>  
//       </table>  
//       {winner && (<>
//       <p>{winner} is the winner</p>
//       <button>PLAY AGAIN</button>
//        </>) }
// </div>

// )
// }
// export default TicTacToe