var storage = require('node-persist');

var student = {
  id : "",
  fullname: ""
}

storage.initSync({
  dir : "students"
});

//storage.setItemSync('sub','1');

function getAllStudent()
{
   var students = storage.getItemSync('students');
   var matchedStudent = null;
   console.log(students);
   if (typeof students === "undefined"){
       return [];
   }
   return students;
}

function getStudent(studentId){

  var students = getAllStudent();
  var matchedStudent = null;

  for(var i = 0; i < students.length; i++){
    if (students[i].id === studentId){
      matchedStudent = students[i];
      break;
    }
  }
  return matchedStudent;
}


function addStudent(studentId, studentName){
 var students = getAllStudent();
  students.push({
    id : studentId,
    fullname : studentName
  });
   
  storage.setItemSync('students',students);
}

function removeStudent(studentId){
  var students = getAllStudent();

  for(var i = 0; i < students.length; i++){
    if(students[i].id === studentId){
      students.splice(i,1);
    }
  }
  storage.setItemSync('students',students);
}

function editStudent(studentId, studentName){

  var students = getAllStudent();
  for (var i = 0; i < students.length; i++){
    if (students[i].id === studentId){
      students[i].fullname = studentName;
    }
  }
}

function showStudents(){
  var students = getAllStudent();
  // for (var i = 0; i < students.length;i++){
  //    console.log('Student: ',students[i].fullname + "(" + students[i].id + ")");
  // }
  students.forEach(function(student){
    console.log('Student : ' + student.fullname + '(' + student.id + ')');
  });
}



addStudent(1, 'Hieu');
addStudent(2, 'Huyen');
addStudent(3, 'Nhan');

showStudents();
