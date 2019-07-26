import React, {useContext} from 'react';
import Cell from './Cell';


const Row = (props) => {

    const {row_array} = props;
    return ( <tr className='row'>
        {row_array.map(cell =>{
            return (<Cell key={cell.id} cell={cell}/>)
        })}
    </tr> );
}
 
export default Row;