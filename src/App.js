import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import Board from './components/Board';
import Popup from './components/Popup.js';


const boardsURL = `${ process.env.REACT_APP_BACKEND_URL }`

//axios calls go up here 

function App() {

  // initiate state
  const [ boardsData, setBoardsData ] = useState([]);

  //function to update board data goes here? whats the diff?

  //function to add board data goes here

  //function that handles API POST new board call Crud-dy
  // does this need to be accessed by other functions? do we need to use this in something else?
  const createNewBoard = (newBoard) => {
    console.log('on board submission');
    axios
      .post(`${boardsURL}/boards`, newBoard)
      .then((response) => {
        const boards = [...boardsData];
        boards.push(response.data.board);
        setBoardsData(boards);
      }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t create a new board')
      });
  };

  return (
    <main className="background-image">
    <div className="App">
      <Popup/>
      <header> 
        <h1 className="header__">Lantern Festival </h1>
      </header>
      <body className = "boards__container">
        <h1>Participants</h1>
        <h1>.</h1>
        <section className="new-board-form__container">
        <h1>Add new Participant</h1>
        <NewBoardForm
          createNewBoard={ createNewBoard }
        />
        <button className='new-board-form__toggle-btn'>Hide new board form</button>
        </section>
      </body>
    </div>
    </main>
  );
}

export default App;


//all headers wil live here 
//inspiration board is a static header  
//boards header
//selected board
//create new board
//on click board list, cards for board and new card form show up


//states in APP
//boardsData
//selectedBoard
//isBoardFormVisible

//apps will pass these props to board, board and onBoardSelect

//apps will pass these props to new board form: createNewBoard
