
import { TextField } from '@fluentui/react';
import * as React from 'react';
import { useState,useCallback } from 'react';

const UseCallbackHooks:React.FC<{}>=(props)=>{
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");

const handleClick=useCallback((_val:any,val?:string)=>{
setName(val||"");
setEmail(val||"")

},[name,email]);
    

    return(
        <>
      <p>Name of the Person:{name}</p>
      <TextField
      label='Person Name'
      value={name}
      onChange={handleClick}
      />
      <TextField
      label='Person Email'
     value={email}
      onChange={handleClick}
      />

       
        </>
    )
}
export default UseCallbackHooks