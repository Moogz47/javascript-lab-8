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