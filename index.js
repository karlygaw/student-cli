const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
//Connect to db
const db = mongoose.connect('mongodb://127.0.0.1:27017/university', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Import model
const Student = require('./models/student');

//Add Customer
const addStudent = (student) => {
    Student.create(student).then(student => {
        console.info('New Student Added');
        db.close;
    });
}

//Find Customer
const findStudent = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    //2 different fields firstname or lastname
    Student.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then(student => {
            console.info(student);
            console.info(`${student.length} matches`);
            db.close;
        });

}



const updateStudent = (_id, student) => {
    Student.findOneAndUpdate({ _id }, student)
        .then(updatedStudent => {
            if (updatedStudent) {
                console.info('Student Updated:', updatedStudent);
            } else {
                console.error('Student not found or no changes were made.');
            }
            db.close;
        })
        .catch(err => {
            console.error('Error updating student:', err);
            db.close;
        });
}




const removeStudent = (_id) => {
    Student.deleteOne({ _id })
        .then(result => {
            if (result.deletedCount > 0) {
                console.info('Student Deleted');
            } else {
                console.error('Student not found.');
            }
            db.close;
        })
        .catch(err => {
            console.error('Error deleting student:', err);
            db.close;
        });
}

// List Students
const listStudents = () => {
    Student.find()
        .then(students => {
            console.info(students);
            console.info(`${students.length} students`);
            db.close;
        });
}

//Export All methods
module.exports = {
    addStudent,
    findStudent,
    updateStudent,
    removeStudent,
    listStudents
}