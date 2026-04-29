import * as React from 'react';
import styles from './SharePointForm.module.scss';
import type { ISharePointFormProps } from './ISharePointFormProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ServiceApiClass } from '../../../Service/ServiceApi';
import { ISharePointFormColumns } from '../../../Commonmethods/SharePointColumns';
import { useEffect,useCallback,useState } from 'react';
import {sp} from "@pnp/sp/presets/all";
import { Dialog } from '@microsoft/sp-dialog';
import { PrimaryButton, Slider, TextField, Toggle } from '@fluentui/react';
import {  PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { handleMultiSelectedPeoplePicker, handleSingleSelectedPeoplePicker } from '../../../Commonmethods/HandlePeoplePicker';
const SharePointForm:React.FC<ISharePointFormProps>=(props)=>{
  const [formdata,setFormData]=useState<ISharePointFormColumns>({
    Name:"",
    Email:"",
    FullAddress:"",
    Experience:0,
    Compensation:"",
    Age:"",
    Manager:[],
    ManagerId:[],
    Admin:"",
    AdminId:0,
    Permission:false
  });

  useEffect(()=>{
    sp.setup({
      spfxContext:props.context as any
    })
  },[props.context]);

  const createItems=async()=>{
    try{
const _service=new ServiceApiClass(props.siteurl);
const result=await _service.addListItems(formdata);
Dialog.alert("Item created successfully with ID: "+result.data.Id);
console.log("Result after creating item",result);
setFormData({
  Name:"",
  Email:"",
    FullAddress:"",
    Experience:0,
    Compensation:"",
    Age:"",
    Manager:[],
    ManagerId:[],
    Admin:"",
    AdminId:0,
    Permission:false
})
    }
   
    catch(err){
      console.log("Error while creating item",err);
    }
  }

  //form event 
  const handleChange=useCallback((field:keyof ISharePointFormColumns,value:string|number|boolean)=>{
setFormData(prev=>({...prev,[field]:value}))
  },[]);
  return(
    <>
    <TextField
    label='Name'
    value={formdata.Name}
    onChange={(_,val)=>handleChange("Name",val||"")}
    />
    {/*  Mail*/}
      <TextField
    label='Email Address'
    value={formdata.Email}
    onChange={(_,val)=>handleChange("Email",val||"")}
    iconProps={{iconName:'mail'}}
    />
    {/* Age */}
      <TextField
    label='Age'
    value={formdata.Age}
    onChange={(_,val)=>handleChange("Age",val||"")}
    />
    {/* Salary */}
      <TextField
    label='Compensation'
    value={formdata.Compensation}
    onChange={(_,val)=>handleChange("Compensation",val||"")}
    prefix='$'
    suffix='USD'
    />
    {/* Experiecne */}
    <Slider
    label='Experience'
    value={formdata.Experience}
    onChange={(val)=>handleChange("Experience",val)}
    max={25}
    step={0.1}
    />
    <Toggle
    label="Permission"
    checked={formdata.Permission}
    onChange={(_,checked)=>handleChange("Permission",!!checked)}
    />
    {/* Single selected people picker */}
    <PeoplePicker
    context={props.context as any}
    titleText="Admin"
    personSelectionLimit={1}
    showtooltip={true}
    onChange={(items)=>handleSingleSelectedPeoplePicker(items,setFormData)}
    principalTypes={[PrincipalType.User]}
    ensureUser={true}
    webAbsoluteUrl={props.context.pageContext.web.absoluteUrl}
    defaultSelectedUsers={[formdata.Admin?formdata.Admin:""]}
    resolveDelay={1000} />
    {/* Multiselect people picker*/}
    <PeoplePicker
    context={props.context as any}
    titleText="Manager"
    personSelectionLimit={2}
    showtooltip={true}
    onChange={(items)=>handleMultiSelectedPeoplePicker(items,setFormData)}
    principalTypes={[PrincipalType.User]}
    ensureUser={true}
    webAbsoluteUrl={props.context.pageContext.web.absoluteUrl}
    defaultSelectedUsers={formdata.Manager}
    resolveDelay={1000} />
    {/* Address */}
       <TextField
    label='Full Address'
    value={formdata.FullAddress}
    onChange={(_,val)=>handleChange("FullAddress",val||"")}
    rows={5}
    multiline
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