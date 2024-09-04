import { Tdata } from "../types/dataType";
import useDeleteData from "../hooks/useDeleteData"
import { MyContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
 {/*styling each user in this component*/}
const User = ({user}:{user:Tdata}) => {
       {/*set the user to edite the object*/}
    const {setEditeData}=useContext(MyContext)
       {/*delete request*/}
    const {mutate:mutateDelete}=useDeleteData()
    return ( 
       <>
         {/*main dev*/}
         <div className="bg-gray-400 rounded-md shadow-xl ">
              {/*user image*/}
            <img className="w-full h-44 rounded-md animated-background bg-gradient-to-r from-gray-400 via-zinc-300 to-white"  src={user.image} alt="" />
              {/*user email*/}
            <div className="text-sm text-center pt-1">{user.email}</div>
            {/*user name &lastName&gender dev */}
            <div className="flex justify-between items-center p-4">
                <h3 className="text-lg">{user.name} {user.lastName}</h3>
                <span className="text-zinc-700">{user.gender}</span>
            </div>
            {/*delete & edite user btns*/}
            <div className="flex items-center justify-center gap-x-3 mb-2 ">
                 {/*edite*/}
            <Link to={"/editeUser"} onClick={()=>setEditeData(user)} className=" w-1/2 rounded-md  bg-white border border-black px-3 py-1 ">Edite</Link>
             {/*delete*/}
            <button onClick={()=>mutateDelete(user.id)} className="px-3 py-1 bg-rose-500 rounded-md active:bg-red-300">Delete</button>
            </div>
        </div>
       </>
     );
     }
 
export default User;