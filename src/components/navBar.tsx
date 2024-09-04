import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <div className="flex items-center gap-x-4 w-full fixed top-0 bg-black/90 child:bg-white child:rounded-lg text-zinc-800  text-base lg:text-xl px-12 sm:px-20 lg:px-32 py-3 md:py-5 child:px-2 child:py-1">
          <Link to={"/"} className=" active:bg-zinc-500">Home</Link>
          <Link to={"/addUser"} className="active:bg-zinc-500"> Add New User</Link>
        </div>
     );
}
 
export default NavBar;