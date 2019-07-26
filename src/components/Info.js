import React, {useContext} from 'react'
import { BoardContext } from '../Context/BoardContext';

const Info  = () => {
    const {player_char} = useContext(BoardContext);
    return ( <div className="player">
        The player {player_char} turn
    </div> );
}
 
export default Info;