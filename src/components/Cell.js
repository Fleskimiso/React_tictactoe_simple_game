import React, {useContext} from 'react'

import { BoardContext } from '../Context/BoardContext';
 const Cell = (props) => {
     const {cell} = props;
    let char_of_cell;
    if( cell.char === '?'){
        char_of_cell = ' '
    }else{
        char_of_cell =cell.char;
    }
  //  console.log(cell.char);
  const {click} = useContext(BoardContext);
     return ( <td onClick={()=>{click(cell.id)
         console.log(props)}}  className="cell">
         {char_of_cell} 
     </td> );
 }
  
 export default Cell;