const headOfMathematics = university.departments.filter(department => department.name === "Mathematics")
console.log(headOfMathematics[0].head)
// task one


const newSubject = university.departments .filter(department => department.name === "Computer Science")
  console.log(newSubject[0].courses[0].courseCode)
 console.log(newSubject[0].courses[1].courseCode)

 // task two



 const bobGreen = university.departments.filter(department => department.name === "Mathematics")
console.log(bobGreen[0].courses[1].enrolledStudents[0].grade = "A+")
 // task 3 


 university.students = university.students.concat([{ studentId: 1008, name: "Hannah Yellow", major: "Mathematics", year: 2 }]);
console.log(university.students);

 // task four



 const intrucrtor = university.departments.filter(department => department.name === "Computer Science")
console.log(intrucrtor[0].courses[1].instructor.name)
 //task five


 const calculas = university.departments.filter(department => department.name === "Mathematics")
 
 console.log(calculas[0].courses[1].enrolledStudents.push({studentId: 1008, name: 'hannah yellow', grade: 'b'}))
 // task six

 const mathematicsStudents = university.students.filter(department => department.major === "Mathematics")

 console.log(mathematicsStudents)
 // task seven



 for (let i = 0; i < university.departments.length; i++) {
    for (let j = 0; j < university.departments[i].courses.length; j++) {
        for (let k = 0; k < university.departments[i].courses[j].enrolledStudents.length; k++) {
            if (university.departments[i].courses[j].enrolledStudents[k].name === "Bob Green") {
                console.log( university.departments[i].courses[j].courseName, 
                             university.departments[i].courses[j].enrolledStudents[k].grade);
            }
        }
    }
}

// task eight


// could not do question 9 



const officeNumber = university.departments.filter(department => department.name === "Computer Science")

console.log(officeNumber[0].courses[0].instructor.office)
// task 10


// didnt know how to do task 11

const newStudents = university.departments.filter(department => department.name === "Mathematics")

console.log(newStudents[0].courses[0].instructor = {name: "Prof. Albert Einstein", office: 'Room 320'})
// task 12


// didnt know how to do 13



const changingStudents = university.students.filter(department => department.name === "Eve Blue")

console.log(changingStudents[0].major = 'Computer Science')
console.log(changingStudents[0].year = '2')
// task 15

