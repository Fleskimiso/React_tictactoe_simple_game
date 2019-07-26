import React, {useContext} from 'react';
import { BoardContext } from '../Context/BoardContext';

const Result = () => {
    const {should_show_winner, reset} = useContext(BoardContext);
  
    return ( <div onClick={() => reset()} className="winner">
        {should_show_winner.should ? "The Winner is: " + should_show_winner.winner + " player" : ""}
    </div> );
}
 
export default Result;