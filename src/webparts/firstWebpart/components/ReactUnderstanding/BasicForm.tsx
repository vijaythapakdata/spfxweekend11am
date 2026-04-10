import { ChoiceGroup, ComboBox, Dropdown, PrimaryButton, Slider, TextField, Toggle } from '@fluentui/react';
import * as React from 'react';

const BasiccForm:React.FC<{}>=()=>{
   return(
    <>
    <h3 style={{color:"blue",textAlign:"center",textDecoration:"underline"}}>Basic Form</h3>
    <hr/>
    <form>
        <TextField
        label='Name'
        placeholder='Enter your name here...'
        required
        iconProps={{iconName:'people'}}
        
        />
         <TextField
        label='Email Address'
        placeholder='Enter your mail here...'
       
        iconProps={{iconName:'mail'}}
        
        />

        {/* Compensation textfield */}

        <TextField
        label='Compensation'
        prefix='$'
        suffix='USD'
        />

        {/* Password text field */}

        <TextField
        label='Password'
        type='password'
        canRevealPassword={true}
        />
        {/* File */}

        <TextField
        label='File'
        type='file'
        />

        {/* Dropdown */}
        <Dropdown
        label='Department'
        options={[
            {key:"IT",text:"IT"},
            {key:"HR",text:"HR"}
        ]}
        multiSelect
        />

        {/* Radio  buttons */}
        <ChoiceGroup
        label='Gender'
        options={[
            {key:"Male",text:"Male"},
            {key:"Female",text:"Female"}
        ]}
        
        />
        {/* Combo box */}

         <ComboBox
        label='Department'
        options={[
            {key:"IT",text:"IT"},
            {key:"HR",text:"HR"}
        ]}
        multiSelect
        autoComplete='on'
        allowFreeform
        />
        {/* Slider */}
        <Slider
        label="Experience"
        min={0}
        max={25}
        step={0.1}
        />
        {/* Toggle */}
        <Toggle
        label="Permission"
        />
        {/* Multi-line text field */}
        <TextField
        label='Address'
        multiline
        rows={5}
        />
        <br/>
        <PrimaryButton
        text="Save"
        iconProps={{iconName:"save"}}
        onClick={()=>alert("I am save button")}
        />
        &nbsp; &nbsp; &nbsp;
        <PrimaryButton
        text="Cancel"
        iconProps={{iconName:"cancel"}}
        onClick={()=>alert("I am cancel button")}
        />
    </form>
    </>
   ) 
}
export default BasiccForm