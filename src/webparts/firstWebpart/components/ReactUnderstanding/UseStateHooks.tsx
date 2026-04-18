import { PrimaryButton, TextField } from '@fluentui/react';
import * as React from 'react';
import { useState } from 'react';

const UseStateHooks:React.FC<{}>=(props)=>{
    const [count,setCount]=useState<number>(0);
    const [name,setName]=useState<string>("")
    return(
        <>
        <p>Count of the Value:{count}</p>
        <PrimaryButton
        label='Count'
        onClick={()=>setCount(count+1)}
        iconProps={{iconName:'add'}}
        />
        <p>Name of the user:{name}</p>
        <TextField
        label='Name'
        value={name}
        onChange={(_,val)=>setName(val||"")}
        />
        </>
    )
}
export default UseStateHooks