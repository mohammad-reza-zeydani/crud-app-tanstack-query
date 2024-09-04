import { Tdata } from "../types/dataType";
import User from "./user";
 {/*maping the users array list*/}
const UsersList = ({data}:{data:Tdata[]}) => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 mt-5">
            {
                data && data.map((user)=>{
                   return <User user={user}/>
                })
            }
        </div>
     );
}
 
export default UsersList;