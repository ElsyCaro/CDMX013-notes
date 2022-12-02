import { signOutAccount } from '../google'

export default function Wall(){
    const img = require.context('../../img',true)
    const closeSession = () =>{
    signOutAccount ()
    console.log("Cerrar")
    }

return (
 <div className='wall'>
        <img
        src={img ('./notes.png')}
        alt={""}
        className="addnotes"
        />
<button className="btnClose" onClick={() => {closeSession()}} >Close</button>
     
    </div>    
       


   
)
};