import { useForm } from "react-hook-form";
import { Tdata } from "../types/dataType";
import usePostData from "../hooks/usePostData";
const AddUser = () => {
     {/*post data hook*/}
    const {mutate}=usePostData()
      {/*form hook*/}
    const form=useForm<Tdata>()
      {/*destuctucuring form properties*/}
    const {handleSubmit,register,formState:{errors}}=form
    {/*submit handler*/}
    const submit=(data:Tdata)=>{
        mutate(data);
        alert("the new user is added successfully")
    }
    return ( 
        <div  className="dev-form"> 
           {/*my form*/}
        <form noValidate onSubmit={handleSubmit(submit)} className="form ">
              {/*name input & validation*/}
            <input placeholder="First Name" className="input mt-7" type="text" {...register("name",{
                required:true,
                minLength:3,
                maxLength:15
            })} />
               {errors.name && errors.name.type === "required" && <span>This is required</span>}
               {errors.name && errors.name.type === "maxLength" && <span>Max length is 15</span> }
               {errors.name && errors.name.type === "minLength" && <span>min length is 3</span> }
                 {/*last name input & validation*/}
            <input placeholder="Last Name" className="input" type="text" {...register("lastName",{
                required:true,
                minLength:3,
                maxLength:20
            })} />
               {errors.lastName && errors.lastName.type === "required" && <span>This is required</span>}
               {errors.lastName && errors.lastName.type === "maxLength" && <span>Max length is 20</span> }
               {errors.lastName && errors.lastName.type === "minLength" && <span>min length is 3</span> }
                 {/*email input & validation*/}
            <input placeholder="Gmail" className="input" type="email" {...register("email",{
                required:true,
                pattern:{
                    value:/[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g,
                    message:"invalid format"
                },
                validate:{
                    notAdmin:(field)=>{
                        return (field !=="MmdzYzw05@gmail.com" || "try another email address")
                    },
                    notBlockListed:(field)=>{
                        return (!field.endsWith("baddomain.com") || "unacceptable")
                    }
                }
            })} />
             {
                errors.email?.message ?<p>{errors.email?.message}</p>:null
             }
             {errors.email && errors.email.type === "required" && <span>This is required</span>}
               {/*image input & validation*/}
              <input placeholder="image" className="input" type="text" {...register("image",{
                required:true,
                pattern:{
                    value:/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i,
                    message:"use image link"
                },
             })} />
               {/*radio input*/}
           <p>{errors.image?.message}</p>
            <div className="flex items-center gap-x-4 text-lg">
               male <input defaultChecked={true}  value={"male"} type="radio" {...register("gender")}/>
               female <input value={"female"} type="radio" {...register("gender")} />
            </div>
              {/*sub btn*/}
            <input className="submit" type="submit" />
        </form>
        </div>
     );
}
 
export default AddUser;