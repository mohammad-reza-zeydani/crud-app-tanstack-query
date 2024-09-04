import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetData = () => {
    const {data,isLoading,isFetchingNextPage,hasNextPage,fetchNextPage}=useInfiniteQuery({
        queryKey:["users"],
        initialPageParam:1,
        queryFn:async({pageParam})=>{
            const respons=await axios.get(`http://localhost:3000/users?_limit=3&&_page=${pageParam}`)
            return respons.data
        },
        getNextPageParam:(lastPage,allPages)=>{
            const nextPage= lastPage.length ? allPages.length + 1 : undefined
            return nextPage
        }
    })
    return {data,isFetchingNextPage,hasNextPage,isLoading,fetchNextPage};
}
 
export default useGetData;