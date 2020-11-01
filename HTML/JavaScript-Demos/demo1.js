var studentList = [{

        name: 'Raju',
        city: 'Bangalore',
        hobbies: ['music', 'sports'],
        mobile: 934342422
    },
    {
        name: 'Rohan',
        city: 'Bangalore',
        hobbies: ['music', 'sports'],
        mobile: 983409234
    },
    {
        name: 'Aku',
        city: 'Bangalore',
        hobbies: ['music', 'sports'],
        mobile: 34293823
    }
]

studentList.forEach(student => {
    for (const prop in student) {
        var stud = student[prop];
        if (stud instanceof Array) {
            for (const i in stud)
                console.log('hobby:' + stud[i]);
        } else
            console.log(stud);
    }
});



// console.log(student.name);
// console.log(student.age);
// console.log(student.hobbies);
// console.log(student.address.city);
// student.greet();

// // }
// // for(const prop in student){
//     var stud=student[prop];
// if(stud instanceof Array){
//     for(const i in stud)
//         console.log('hobby'+stud[i]);

// }else if(typeof stud=='object'){
//     for(const key)
// }