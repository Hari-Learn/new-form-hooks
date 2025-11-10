import React from "react";
import { useForm } from "react-hook-form";

const PasswordForms = () => {
    const {register,handleSubmit,watch,reset,formState:{errors,isValid}} = useForm({
        mode:"onChange"
    })
    const onSubmitPasswords = (data) => {
        console.log(data)
    }

    const passwordValue = watch("password")

     const handleReset = () => {
        reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmitPasswords)}>
            <input type="password" placeholder="Enter password"
                {
                    ...register("password",
                        {
                            required: "Password must not be empty",
                            minLength: {
                                value:6,
                                message:"Password must contain min of 6 characters"
                            }}
                        )} /> 
                {errors.password && (<span>{errors.password.message}</span>)}
                
                   <input type="password" placeholder="Confirm password"
                {
                    ...register("confirmPassword",
                        {
                            required: "Confirm Password must not be empty",
                            minLength: {
                                value:6,
                                message:"Password must contain min of 6 characters"
                            },
                            validate:(value) => value === passwordValue || "Password not match"
                            
                        })} /> 
                         {errors.confirmPassword && (<span>{errors.confirmPassword.message}</span>)}

                         <input type="submit"  disabled={!isValid}
                style={{margin:"10px",marginLeft:"0px",backgroundColor:isValid ? "#3498db" :"#95a5a6", padding:"10px",fontFamily:"sans-serif",color:"#fff",fontWeight:"bold",border:"none"}}   />

                <button type="button" onClick={handleReset} 
                style={{margin:"10px",backgroundColor:  "#3498db", padding:"10px",fontFamily:"sans-serif",color:"#fff",fontWeight:"bold",border:"none"}}  >
                    Reset
                </button>

        </form>
    )
}

export default PasswordForms