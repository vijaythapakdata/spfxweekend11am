
import { TextField } from '@fluentui/react';
import * as React from 'react';
import { useState,useMemo } from 'react';

const UseMemoHooks:React.FC<{}>=(props)=>{
    const [name,setName]=useState<string>("");
   

const greeting=useMemo(()=>{
console.log("use memo is called")

return `Hello ${name}`
},[name]);
    

    return(
        <>
      <p>Hello:{greeting}</p>
      <TextField
      label='Person Name'
      value={name}
    onChange={(_,b)=>setName(b||"")}
      />
     

       
        </>
    )
}
export default UseMemoHooks