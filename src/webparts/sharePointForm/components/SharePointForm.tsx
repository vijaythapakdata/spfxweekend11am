import * as React from 'react';
import styles from './SharePointForm.module.scss';
import type { ISharePointFormProps } from './ISharePointFormProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ServiceApiClass } from '../../../Service/ServiceApi';
import { ISharePointFormColumns } from '../../../Commonmethods/SharePointColumns';
import { useEffect,useCallback,useState } from 'react';
import {sp} from "@pnp/sp/presets/all";
import { Dialog } from '@microsoft/sp-dialog';
import { PrimaryButton, TextField } from '@fluentui/react';
const SharePointForm:React.FC<ISharePointFormProps>=(props)=>{
  const [formdata,setFormData]=useState<ISharePointFormColumns>({
    Name:""
  });

  useEffect(()=>{
    sp.setup({
      spfxContext:props.context
    })
  },[props.context]);

  const createItems=async()=>{
    try{
const _service=new ServiceApiClass(props.siteurl);
const result=await _service.addListItems(formdata);
Dialog.alert("Item created successfully with ID: "+result.data.Id);
console.log("Result after creating item",result);
setFormData({
  Name:""
})
    }
   
    catch(err){
      console.log("Error while creating item",err);
    }
  }

  //form event 
  const handleChange=useCallback((field:keyof ISharePointFormColumns,value:string)=>{
setFormData(prev=>({...prev,[field]:value}))
  },[]);
  return(
    <>
    <TextField
    label='Name'
    value={formdata.Name}
    onChange={(_,val)=>handleChange("Name",val||"")}
    />
<br/>
<PrimaryButton
text='Save'
onClick={()=>createItems()}
iconProps={{iconName:"save"}}
/>
    </>
  )
}

export default SharePointForm;