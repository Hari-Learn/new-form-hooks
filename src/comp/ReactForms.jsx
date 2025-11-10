import React from "react";
import { useForm } from "react-hook-form";

const ReactForms = () => {
    const {register,handleSubmit, reset,watch,formState:{errors,isValid}} = useForm({
        mode:"onChange"
    })

    const onSubmitForm = (data) => {
        console.table(data)
    }
    const allValues = watch();
    console.log(allValues)

    const handleReset = () => {
        reset();
    }

    return(
        <>
            <h3>React-hook-forms</h3>
            <form onSubmit={handleSubmit(onSubmitForm)} >
                <input type="text" placeholder="Enter Name"
                {...register('name',{required:"❌ Name is required",
                    minLength:{
                        value:4,
                        message:"❌ Name should contain minimum 4 charcter"
                    }
                })} style={{marginLeft:"0px",marginTop:"10px",marginRight:"5px"}} />

                {errors.name && (<span>{errors.name.message}</span>)}
                    <br/>
                <input type="text" placeholder="Enter Email"
                {...register('email',{
                    required:"📧 Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "❌ Enter a valid email address"
                        }})} style={{marginLeft:"0px",marginTop:"10px",marginRight:"5px"}}  />

                {errors.email && (<span>{errors.email.message}</span>)}
                        <br/>
                <input type="submit"  disabled={!isValid}
                style={{margin:"10px",marginLeft:"0px",backgroundColor:isValid ? "#3498db" :"#95a5a6", padding:"10px",fontFamily:"sans-serif",color:"#fff",fontWeight:"bold",border:"none"}}   />

                <button type="button" onClick={handleReset} 
                style={{margin:"10px",backgroundColor:  "#3498db", padding:"10px",fontFamily:"sans-serif",color:"#fff",fontWeight:"bold",border:"none"}}  >
                    Reset
                </button>

            </form>

        </>
    )
}

export default ReactForms