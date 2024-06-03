import { useState } from "react"
function Header(){
    const [state,setState]=useState(0)
    return(
        <div>
            <h1>Counter:</h1>
            <button onClick={()=>{setState(state+1)}}>Add</button>
            {state}
        </div>
    )
}
export default Header