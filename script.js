const student = {
    name: "Julila Mpesha",
    age: 28,
    enrolled: true,
    courses: ["Algorithms", "JavaScript", "Operating Systems"],
    
    displayInfo: function() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses.join(", ")}`);
    }
  };