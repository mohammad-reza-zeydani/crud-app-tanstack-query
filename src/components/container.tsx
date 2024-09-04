import UsersList from "./usersList";
import useGetData from "../hooks/useGetData";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
const Container = () => {
     {/*destuctucuring useGet hook properties*/}
    const {data,isFetchingNextPage,isLoading,hasNextPage,fetchNextPage}=useGetData();

    const { ref, inView} = useInView({
        threshold: 1,
      });
      useEffect(()=>{
        if(hasNextPage && inView){
            fetchNextPage()
        }
      },[inView,hasNextPage,fetchNextPage])
    return ( 
        <>
            <div className="container mx-auto px-5 md:px-6 xl:px-12 mb-3 mt-28">
            {
                isLoading ? (
                    <div className="h-screen w-screen flex justify-center items-center">
                        <div className="border-8 rounded-full border-black mx-auto block border-t-transparent animate-spin w-44 h-44"></div>
                    </div>
                ):(
                    data && data.pages.flatMap(e=><UsersList data={e}/>)
                )
            }
            <div>
            {/*isFetching next page loading element*/}
            {isFetchingNextPage && <div className="border-8 rounded-full border-blue-700 mx-auto block border-t-transparent animate-spin w-12 h-12"></div>}
            </div>
               {/*the InView element*/}
            <div ref={ref}></div>
        </div>
        </>
     );
}
 
export default Container;