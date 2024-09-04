import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { Tdata } from "../types/dataType";
const usePostData = () => {
    const client=useQueryClient()
    const {mutate}=useMutation({
        mutationFn:async(data:Tdata)=>{
            const response=await axios.post(`http://localhost:3000/users/`,data)
            return response.data
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['users']})
        }
    })
    return {mutate};
}
 
export default usePostData;