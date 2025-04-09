const student = {
    name: "Julila Mpesha",
    age: 28,
    enrolled: true,
    courses: ["Algorithms", "JavaScript", "Operating Systems"],
    // Method for dynamically adding a new course...
    addCourse: function(newCourse) {
        this.courses.push(newCourse);
        console.log(`${newCourse} has been added to your courses.`);
    },
    // Method for calculating and returning total number of courses...
    getTotalCourses: function() {
        return this.courses.length;
      },

    displayInfo: function() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses.join(", ")}`);
    }
  };

console.log("Name:", student.name);
console.log("Age:", student.age);

student.displayInfo();

// Adding the new course...
student.addCourse("Music");

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

// Reduce method for average score...
const totalScore = scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
const averageScore = totalScore / scores.length;
console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore.toFixed(2));

// Using the spread operator...
const clonedStudent = { ...student };
clonedStudent.graduationYear = 2027;

console.log("Original Student:", student);
console.log("Cloned Student:", clonedStudent);
console.log("Graduation Year of Cloned Student:", clonedStudent.graduationYear);

clonedStudent.displayInfo();

// Merging new array...
const newCourses = ["Databases", "Technical Reading and Writing", "Web Development"];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses);

// Calling the TotalCourses method...
const totalCourses = student.getTotalCourses();
console.log("Total number of courses:", totalCourses);