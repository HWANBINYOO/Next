import React, { useState } from "react"
import { useForm } from "react-hook-form";

// Less code (c)
// Better vlidation
// Better validation( set , clear , display)
// Habe control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

interface LoginForm {
    username: string;
    password: string;
    email:    string;
}

export default function Forms(){
    const { register , handleSubmit } = useForm<LoginForm>();
    const onValid = (data:LoginForm) => {
        console.log("im valid bby");
    };
    const onInvalid = (errors : FieldErrors)  => {
        console.log(errors);
    };
    return (
        <form onSubmit={handleSubmit(onValid , onInvalid)}>
            <input {...register("username" , {required:"Username is required", minLength : {
                message:"The username should be longer than 5 chars.",
                value:5,
            }, })} type="text" placeholder="Username"  />
            <input {...register("email" , {required:"Email is required", })} type="email" placeholder="Email"  />
            <input {...register("password" , {required:"Password is required", })} type="password" placeholder="password"  />
            <input type="submit" value="Create Account" />
        </form>
    )
}