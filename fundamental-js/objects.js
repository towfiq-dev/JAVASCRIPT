// const person = {
//   name: "Towfiq",
//   age: 22,
//   profession: "MERN Stack Developer",
//   isStudent: true
// };

// person.address = "Dhaka"

// console.log(person);
// const res = Object.values(person)
// console.log(res);
const students = {
  name: "Towfiq",
  age: 22,
  country: "Bangladesh",
  isStudent: true,
  skills: ["HTML", "CSS", "JavaScript", "React"],
  address: {
    district: "Narsingdi",
    upazila: "Raipura",
  }
}

for(let student in students){
  console.log(students[student]);
  
}