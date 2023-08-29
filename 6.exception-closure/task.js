function parseCount(parms) {
    let value = Number.parseFloat(parms);
    if (isNaN(value)) {
         throw new Error ("Невалидное значение");
       }
      return value;
}


function validateCount(defParms){
    try{
        return parseCount(defParms);
    }catch(error){
        return error;
    }
}
class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;

    if (!this.defTriangle()) {
        throw new Error('Треугольник с такими сторонами не существует');;
      }
    }
  
defTriangle(){
      return (
        this.a + this.b > this.c &&
        this.b + this.c > this.a &&
        this.c + this.a > this.b
      );
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        let p = this.perimeter / 2;
        p = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        const area = Math.sqrt(p);
        return parseFloat(p.toFixed(3));
    }
}
function getTriangle(a, b,c){
    try{
        return triangle = new Triangle(a, b, c);
    }catch(error){
        let mistake = {
        get perimeter(){
            return 'Ошибка! Треугольник не существует';
        },
        get area(){
            return 'Ошибка! Треугольник не существует';
        }
    };
    return mistake;
    }
}﻿
