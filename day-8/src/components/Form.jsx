import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const Form = ({setUsers, setToggle, users, updateData}) => {




  let {register, handleSubmit,reset,formState:{errors}} = useForm({
    mode:"onChange",
    defaultValues: updateData,
  });

  let formSubmit = (data) =>{
    if(updateData){
      setUsers((prev)=>{
        return prev.map((val)=>{
          return val.id === updateData.id ? {...data} : val;
        })

      })
      

    }else{
      console.log(data);
    let arr = [...users, {...data, id : nanoid()}];
    setUsers(arr);
    localStorage.setItem("user", JSON.stringify(arr));
    }
    
    reset();
    setToggle(prev => !prev);
  }
  return (
    <div className='flex flex-col gap-3 items-center'>
      <h1 className='text-xl font-bold'>Create User</h1>
      <form 
      onSubmit={handleSubmit(formSubmit)}
      className = "w-90 flex flex-col bg-white gap-3 p-4 rounded border-2 border-black" >
        <input
        {...register("name", 
          {required:"Name is required",
            pattern:{value:/^[A-Za-z]+$/,message:"Name should contain only letters"}
          }
        )}
         className="p-2 rounded border border-black" type="text" placeholder="Name" />
         {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input 
        {...register("email", {required:"Email is required",
          pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email address"}
        })}
        className="p-2 rounded border border-black" type="email" placeholder="Email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
        {...register("mobile", {required:"Mobile is required",
          minLength:{value:10,message:"Minimum 10 digits required"},
          maxLength:{value:10,message:"Maximum 10 digits required"},
        })}
         className="p-2 rounded border border-black" type="number" placeholder="Mobile" />
         {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
        <input
        {...register("image", {required:"Image is required"})}
         className="p-2 rounded border border-black" type="url" placeholder="Image" />
         {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className='text-white bg-blue-700 p-2 rounded-xl cursor-pointer'>Add user</button>
      </form>
    </div>
  )
}

export default Form
