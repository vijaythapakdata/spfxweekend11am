import * as React from 'react';
import styles from './FirstWebpart.module.scss';
import type { IFirstWebpartProps } from './IFirstWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import BasiccForm from './ReactUnderstanding/BasicForm';

const FirstWebpart:React.FC<IFirstWebpartProps>=(props)=>{
  return(
    <>
    <p className={styles.h4}>I am learning spfx</p>
    {/* Child component */}
    <BasiccForm/>

    
    </>
  )
}
export default FirstWebpart;
