import {ClassDemo} from './ClassDemo';

let acd=new ClassDemo(123);
acd.setUserName();
acd.getUserName();
acd.getSSN();

function validate(value: string)
{
    console.log(value);
}

validate("world");

function validateNum(value: number):number //void
{
    return value+1;
}

console.log(validateNum(2));

export interface vehicle
{
    color: string;
    engine: number;
    camera: boolean;
}

let Bmw=
{
    color:"Red",
    engine:100,
    camera: true,
}

function validateObj(car:vehicle)
{
    console.log(car.engine);
    console.log(car.camera);

}

validateObj(Bmw);