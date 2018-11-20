const storage  = require('node-persist');
var yargs = require('yargs');

storage.initSync({
   dir : 'qlsv',
   ttl : false
});

function getAllStudents(){
  var students = storage.getItemSync('qlsv');
  if (typeof students ===  "undefined"){
    return [];
  }
  return students;
}

function showStudents(){
  var students = storage.getItemSync('qlsv');
  for (var i = 0; i < students.length ; i++){
    console.log('Student'+ students[i].fullname + "(" + students[i].id + ")" );
  }
}

function addStudent(studentId,studentName){
  var students = getAllStudents();
  students.push({
    id : studentId,
    fullname : studentName
  })
  storage.setItemSync('qlsv',students);
}
function removeStudent(studentId){
  var students = getAllStudents();
  for (var i = 0; i < students.length; i++){
    if (students[i].id === studentId){
      students.splice(i , 1);
    }
  }
  storage.setItemSync('qlsv',students);
}

function editStudent(studentId,studentName)
{
  var students = getAllStudents();

  for(var i = 0 ; i < students.length; i++){
    if (students[i].id === studentId){
      students[i].fullname = studentName;
    }
  }
  storage.setItemSync('qlsv',students);
}

var argv = yargs
              .command("list","Get List Student",function(yargs){

              })
              .command("create","Create a Student",function(yargs){
                return yargs.options({
                  id : {
                    demand : true,
                    type : "number"
                  },
                  fullname : {
                    demand : true,
                    type : "string"
                  }
                });
              })
              .command('delete', 'Delete a student',function(yargs){
               return yargs.options({
                 id : {
                   demand : true,
                   type : "number"
                 }
               });
             })
             .command('edit','Edit a student',function(yargs){
               return yargs.options({
                 id : {
                   demand : true,
                   type : "number"
                 },
                 fullname : {
                   demand : true,
                   type : "string"
                 }
               });
             })
              .argv;
     var action = argv._[0];
     if (action === 'list') {
       showStudents();
     } else if (action === 'create'){
       addStudent(argv.id,argv.fullname);
       console.log('Add Successfully!');
     } else if (action === 'delete'){
       console.log('Delete Sucessfully');
     } else if (action === 'edit'){
       console.log('Edit Successfully');
     } else {
       console.log('Command not found!');
       showStudents();
     }


addStudent(1,"NgocHieu");
addStudent(2,"HuyenDuong");
showStudents();
