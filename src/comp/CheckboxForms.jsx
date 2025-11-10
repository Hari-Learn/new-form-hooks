import React from "react";
import { useForm } from "react-hook-form";

const CheckboxForms = () => {
    const {register,handleSubmit,watch,reset,formState:{errors,isValid}} = useForm({
        mode:"onChange"
    })
    const onSubmit = (data) => {
        console.log(data)
    }

    const handleReset = async () => {
        reset() 
        await trigger()       
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type="checkbox"
                {...register("terms",{required:"Must check the box"})}
                />                
                Accepts terms and conditions</label>
                {errors.terms && (<span>{errors.terms.message}</span>)}
                <br/>
                <input type="submit"
                    disabled={!isValid}
                />
                <button onClick={handleReset} type="button">
                    Reset
                </button>

        </form>
    )
}

export default CheckboxForms