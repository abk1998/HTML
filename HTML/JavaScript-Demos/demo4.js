var Employee = function() {}
Employee.prototype.name = 'Raju';
Employee.prototype.printName = function() {
    console.log('welcome' + this.name);
};
emp = new Employee('Ram');
emp.printName();

// var Product=function(){}
// Product.prototype={
//     name:'Laptop',
//     showDesc:function(){
//         console.log('15 inch 12 GB'+this.name);

//     },
//     printStock:function(stock){
//         console.log('stock available '+stock);

//     }
// }