import React, { useState } from "react"
import { useForm } from "react-hook-form";

// Less code (c)
// Better vlidation
// Better validation( set , clear , display)
// Habe control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

export default function Forms(){
   const {register , watch} = useForm();
   console.log(watch());
   
    return (
        <form >
            <input {...register("username")} type="text" placeholder="Username" required />
            <input {...register("email")} type="email" placeholder="Email" required />
            <input {...register("password")} type="password" placeholder="password" required />
            <input type="submit" value="Create Account" />
        </form>
    )
}