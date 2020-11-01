var student = {
    name: 'Anu',
    age: 20,
    hobbies: ['painting', 'papercraft'],
    greet: function() {
        console.log('Good day')
    },
    address: {
        city: 'Banglore',
        state: 'Karnataka'
    }
}
console.log(student.name);
console.log(student.age);
console.log(student.hobbies);
console.log(student.address.city);
student.greet();

// }
// for(const prop in student){
//     var stud=student[prop];
// if(stud instanceof Array){
//     for(const i in stud)
//         console.log('hobby'+stud[i]);

// }else if(typeof stud=='object'){
//     for(const key)
// }