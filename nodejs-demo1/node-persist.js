var storage = require('node-persist');

var student = {
  id : "",
  fullname: ""
}
var options = {
  dir : "mydata",
  ttl : false
}
storage.initSync(options);

//storage.setItemSync('sub','1');

function getAllStudent()
{
   var students = storage.getItemSync('student');
   console.log(students);
   if (typeof students === "underfined"){
       return [];
   }
   return students;
}

function showStudents(){
  var students = getAllStudent();
  for (var i = 0; i < students.length;i++){
    console.log('Student: ',students[i].fullname + "(" + students[i].id + ")");
  }
}


function addStudent(studentId, studentName){
  var students = getAllStudent();
  students.push({
    id : studentId,
    fullname : studentName
  });
  storage.setItemSync('students',students);
}

addStudent(1,'Hieu');
addStudent(2,'Huyen');
addStudent(3,'Nhan');

showStudents();
