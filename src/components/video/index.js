import react from 'react';
import Reactplayer from 'react-player';
import  './styles.css';
function Vidéo () {
const source="";
const internalSource="https://youtu.be/SMcztSqSQ18";
 return(
    <div> 
        <Reactplayer 
        url={internalSource} 
        controls
        playing
        width="100%"
        height="100%"
        className="player"
        onended={()=>{console.log("video ended")}}
        
        />
    </div>
 )
};
export default Vidéo;