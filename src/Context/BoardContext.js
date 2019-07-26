import React, {useState, createContext} from 'react';

export const BoardContext = createContext();

let initial_state = [];
     for(let i=0; i<3; i++){
        initial_state.push([]);
        for(let j =0; j<3; j++){
            initial_state[i].push({
                id: Math.random(),
                char: "?"
            })
        }
    };

const BoardContextProvider = (props) => {

    const [boardArray, setBoardArray] = useState(initial_state);
    const [player_char, setPlayer_char] = useState('O');
    const [should_show_winner, setshould_show_winner] = useState({
        should: false,
        winner: '?'
    })

    const click = (id) =>{
       setBoardArray(boardArray.map(row_array=>{
           return row_array.map(currentItem =>{
                if(currentItem.id === id){
                    if(player_char === 'O'){
                        if(currentItem.char === "?"){
                            currentItem.char = 'O';
                            setPlayer_char('X');
                            //to do check  win
                            check_who_won();
                        }
                    }else if(player_char === 'X'){
                        if(currentItem.char === "?"){
                            currentItem.char = 'X';
                             setPlayer_char('O');
                            //to do check  win
                            check_who_won();
                        }
                    }
                }

                return currentItem;

           });
       }));
    };

    const check_who_won = () => {
if((boardArray[0][0].char === 'O' && boardArray[0][1].char === 'O' && boardArray[0][2].char === 'O')||
(boardArray[1][0].char === 'O' && boardArray[1][1].char === 'O' && boardArray[1][2].char === 'O')||
(boardArray[2][0].char === 'O' && boardArray[2][1].char === 'O' && boardArray[2][2].char === 'O')||
(boardArray[0][0].char === 'O' && boardArray[1][0].char === 'O' && boardArray[2][0].char === 'O')||
(boardArray[0][1].char === 'O' && boardArray[1][1].char === 'O' && boardArray[2][1].char === 'O')||
(boardArray[0][2].char === 'O' && boardArray[1][2].char === 'O' && boardArray[2][2].char === 'O')||
(boardArray[0][0].char === 'O' && boardArray[1][1].char === 'O' && boardArray[2][2].char === 'O')||
(boardArray[0][2].char === 'O' && boardArray[1][1].char === 'O' && boardArray[2][0].char === 'O')){
            console.log("Hrllo wrold, does it work?")
            setshould_show_winner({
                should: true,
                winner: 'O'
            })
        }

        if((boardArray[0][0].char === 'X'
         && boardArray[0][1].char === 'X'
         && boardArray[0][2].char === 'X'
        )||
        (boardArray[1][0].char === 'X'
         && boardArray[1][1].char === 'X'
         && boardArray[1][2].char === 'X'
        )||
        (boardArray[2][0].char === 'X'
         && boardArray[2][1].char === 'X'
         && boardArray[2][2].char === 'X'
        )||
        (boardArray[0][0].char === 'X'
         && boardArray[1][0].char === 'X'
         && boardArray[2][0].char === 'X'
        )||
        (boardArray[0][1].char === 'X'
         && boardArray[1][1].char === 'X'
         && boardArray[2][1].char === 'X'
        )||
        (boardArray[0][2].char === 'X'
         && boardArray[1][2].char === 'X'
         && boardArray[2][2].char === 'X'
        )||
        (boardArray[0][0].char === 'X'
         && boardArray[1][1].char === 'X'
         && boardArray[2][2].char === 'X'
        )||
        (boardArray[0][2].char === 'X'
         && boardArray[1][1].char === 'X'
         && boardArray[2][0].char === 'X'
        )){
                   setshould_show_winner({
                       should: true,
                       winner: 'X'
                   })
                }

    }

    const reset = () =>{
        setBoardArray(boardArray.map(arr =>{
            return arr.map(elem =>{
                return {...elem, char:"?"}
            })
        }));
        setPlayer_char('O');
        setshould_show_winner({
            should: false,
            winner: '?'
        });
    }

    return ( <BoardContext.Provider value={{boardArray, click, player_char,should_show_winner,reset}}>
        {props.children}
    </BoardContext.Provider> );
}
 
export default BoardContextProvider;
