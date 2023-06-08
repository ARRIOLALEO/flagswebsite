import FlagCard from "./FlagCard"
import { nanoid } from 'nanoid'

const FlagsContainer = ({flags}) =>{
    return(
    <div className="flagsContainer">
        {flags.map(flag=>{
            return <FlagCard name={flag.name.common} image ={flag.flags.png}  key={nanoid()}/>
        })}
    </div>)
}
export default FlagsContainer