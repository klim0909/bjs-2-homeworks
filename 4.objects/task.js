function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  } 
  this.marks.push(mark);
}
Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  } 
  this.marks.push(...mark);
}


Student.prototype.getAverage = function () {
  
  let average = this.marks.reduce((acc,item,idx,arr)=> {
    if (idx === arr.length - 1){
      return (acc+item)/ arr.length;
    }
    else {
      return acc+item;
    }
  }, 0)
  return average;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;

  delete this.marks;
  delete this.subject;
}
