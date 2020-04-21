import {vehicle} from './access';

export class ClassDemo
{
    
    username: string;
    password: string;
    ssn: number;

constructor(ssn:number)
{
    this.ssn=ssn;
}
getUserName()
{
    return this.username;
}

setUserName()
{
    this.username = "hello";
}
getSSN()
{
    return this.ssn;
}
}

let cd=new ClassDemo(123);
cd.setUserName();
console.log(cd.getUserName());
console.log(cd.getSSN());

function validateObj(car:vehicle)
{
    console.log(car.engine);
    console.log(car.camera);

}