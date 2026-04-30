export interface MYfirstListColumns{
    Title:string;
    Email:string;
    YesNo:boolean;
}

export interface MySecondListColumns{
    Department:string;
    Manager:any[];
    City:{
        Title:string
    }
}

export interface ISharePointFormColumns{
    Name:string;
    Email:string;
    Age:any;
    Permission:boolean;
    Compensation:any;
    Experience:number;
    FullAddress:string;
    Admin:string;
    AdminId:any;
Manager:string[];
ManagerId:any[];
Department:string;
Skills:any[];
Gender:string;
City:string;
  

}