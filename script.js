const student = {
    name: "Julila Mpesha",
    age: 28,
    enrolled: true,
    courses: ["Algorithms", "JavaScript", "Operating Systems"],
    
    displayInfo: function() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses.join(", ")}`);
    }
  };

console.log("Name:", student.name);
console.log("Age:", student.age);

student.displayInfo();

// Converting student object to JSON string...
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// Converting JSON string back to JS object...
const parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent);
// New object is more organized in the terminal than original...

// Destructing assignment...
const {name, courses} = student;
console.log(name);
console.log(courses.join(", "));

// Scores array...
const scores = [85, 92, 78, 98, 70, 89];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

// Using the spread operator...
const clonedStudent = { ...student };
clonedStudent.graduationYear = 2027;

console.log("Original Student:", student);
console.log("Cloned Student:", clonedStudent);
console.log("Graduation Year of Cloned Student:", clonedStudent.graduationYear);

clonedStudent.displayInfo();