import * as React from 'react';
import styles from './FirstWebpart.module.scss';
import type { IFirstWebpartProps } from './IFirstWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import BasiccForm from './ReactUnderstanding/BasicForm';
import { ListName } from '../../../Enum/ListNames';
const FirstWebpart:React.FC<IFirstWebpartProps>=(props)=>{

  //ways to declare variable in react

  //const=> it is constant means it is non volatile . means it can not reassaign

  const num1=30;
  console.log(num1);

  //let -> it is volatile means you can update the value even after decalarion
  let num2=90;
  console.log(num2);

  num2=100;

  console.log(100);

  //var is also volatile 

  var num3=98;
  console.log(num3);
  num3=89;
  console.log(num3);


  //data types

  ///string

  let name="Vijay thapak"
  console.log(name);

  //boolean

  let permission=true
  console.log(typeof(permission));

  //array

  let fruits=["Apple","mango","Grapes"];

  console.log(typeof(fruits));
  console.log(fruits);

  //For each loop=> it will iterate over the array inorder to print all the items

  fruits.forEach((item)=>{
    console.log(item);
  })

  //for loop
console.log("I am for loop");
  for(let i=0;i<fruits.length;i++){
    // console.log("For Loop Prints");
    console.log(fruits[i]);
  }

  //while loop

  console.log("I am while loop");

  let j=0;
  while(j<fruits.length){
    console.log(fruits[j]);
    j++;
  }

  //do while loop

  console.log("I am do while loop");

  let f=0;
  do{
     console.log(fruits[f]);
    f++;
  }
  while(f<fruits.length);


  const itemsArray=()=>{
    let name=["Aman","Jack","Kiran","Raman"];

    name.forEach((n)=>{
      console.log(n);
    })
  }


  // Condition statment

  const castingVote=()=>{
    let age =25;
    if(age>=18){
      console.log("you can cast the vote");
    }
    else{
      console.log("you can cast the vote");
    }

    // swtich case 

    let day=3;
  let  dayName="";

  switch(day){
    case 1:
      dayName="Sunday"
      break
    case 2:
      dayName="Monday"
      break;
    case 3:
      dayName="Tuesday"
      break
    case 4:
      dayName="Wednesday"
      break
    case 5:
      dayName="Thursday"
      break
    case 6:
      dayName="Friday"
      break
    case 7:
      dayName="Saturday"
      break
    default:
      dayName="None"

  }
  console.log(dayName);
  }

  return(
    <>
    <p className={styles.h4}>I am learning spfx</p>
    {/* Child component */}
    <BasiccForm/>

    {/* map function  */}

    {fruits.map((item)=>{
      return <p key={item}>{item}</p>
    })}
    {/* Function calll */}
    {itemsArray()}
    {castingVote()}

    <ul>
      <li>
        Apple
      </li>
      <li>
        Mango
      </li>
      <li>
        Keto
      </li>
    </ul>
    {ListName.List1}
    </>
  )
}
export default FirstWebpart;
