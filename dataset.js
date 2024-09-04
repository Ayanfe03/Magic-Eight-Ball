let studentData = [
  {name: 'James', age: 17, grade: 70},
  {name: 'Jane', age: 18 , grade: 60 },
  {name: 'Mark', age: 19, grade: 55},
  {name: 'Deborah', age: 17, grade: 60},
  {name: 'Demion', age: 20, grade: 45}
]
console.log(studentData);

const filterByGrade = (studentData, grade) => {
  return studentData.filter((studentGrade) => studentGrade.grade === grade);
}

const filteredGrade = filterByGrade(studentData, 60);
console.log(filteredGrade);

// Average Age
const averageAge = (studentData) => {
  const totalStudentAge = studentData.reduce((sumOfAge, studentAge) => sumOfAge + studentAge.age, 0);
  return totalStudentAge / studentData.length;
}

const addAge = averageAge(studentData);
console.log(addAge);