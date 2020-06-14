module.exports = Student;
function Student(name) {
    this.name = name;
}
Student.prototype.talk = function () {
    console.log("姓名：",this.name);
}