import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
const useDeleteData = () => {
    const client=useQueryClient()
    const {mutate}=useMutation({
        mutationFn:async(data:number)=>{
            const response=await axios.delete(`http://localhost:3000/users/${data}`)
            return response.data
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['users']})
        }
    })
    return {mutate};
}
 
export default useDeleteData;