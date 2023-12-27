
//////////   1   
console.log("task1");
let arr1 : number[]=[1,2,3,4,5];
console.log(arr1);
////////    2
console.log("task2");
let arr2:(string|number)[]=[1,2,3,"ahmed"];
console.log(arr2);
////////    3
console.log("task3");
let varboolornum: number|boolean;
varboolornum=10;
console.log(varboolornum);
varboolornum=true;
console.log(varboolornum);
///////    4
console.log("task4");
function fun1 (id:number,age:number=18,name?:string):void {
    console.log(`${id} -- ${age} -- ${name} `)
}
fun1(1);
fun1(2,19);
fun1(3,29,"ayman");
//////   5
console.log("task5");
interface Iuser{
   
    id:number,
    name: string,
    username: string,
    email: string,
    Post ?: {
        title: string,
        body: string
        Comment?:{
        name: string,
        email: string,
        body: string
        }  
}
}

class User implements Iuser{
   
   private localusername : string;
   public get_username() : string {
    return this.localusername;
   }
   public set_username(v : string) {
    this.localusername= v;
   }
   
    constructor( 
     readonly  id:number,
      public  name: string,
       public username: string,
       public email: string,
       public Post?: {
            title: string,
            body: string
            Comment?: {
                name: string,
                email: string,
                body: string
            }
        }) {
       this.localusername= username;

    }

}

let user1=new User(5,"ayman","jjjj","dfddxf@lmkmn");
console.log(`user ${user1.name} = ${user1.email} `);


////////        6
console.log("task6");
class VIPUser extends  User{


    constructor( 
        readonly  id:number,
         public  name: string,
         public username: string,
          public email: string,
          public Post?: {
               title: string,
               body: string
               Comment?: {
                   name: string,
                   email: string,
                   body: string
               }
           })  {
                super(id,name,username,email,Post);
       }


         show():void {   
              console.log(this.Post);
                }

              
                   

}

let xs= new VIPUser(1,"ahmed","awdwa","dawadwdd@dwadwa",{"title": "mytitle", "body": "clean body"});

xs.show();
