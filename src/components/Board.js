import React, {useContext} from 'react'
import { BoardContext } from '../Context/BoardContext';
import Row from './Row';


const Board = () => {
    const {boardArray} = useContext(BoardContext);
    return ( 
        <table className="board" > 
            <tbody >
            {boardArray.map( row_array =>{
            return(<Row key={Math.random()} row_array={row_array}/> );
        })}
            </tbody>
        </table>
     );
}
 
export default Board;