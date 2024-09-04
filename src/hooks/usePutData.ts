import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Tdata } from "../types/dataType";
const usePutData = () => {
    const client=useQueryClient()
    const {mutate}=useMutation({
        mutationFn:async(data:Tdata)=>{
            const response=await axios.put(`http://localhost:3000/users/${data.id}`,data)
            return response.data
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['users']})
        }
    })
    return {mutate}
}
 
export default usePutData;