const students = [

    {
        first_name: 'Grace',
        last_name:  'Mina',
        age:        20,
        grade:      95,
    },
    
    {
        first_name: 'John',
        last_name: 'Ephraim',
        age:        17,
        grade:      70,
    },

    {
        first_name: 'Ruth',
        last_name:  'Solomon',
        age:        15,
        grade:      50,
    },


    {
        first_name: 'Kindness',
        last_name:  'Wisdom',
        age:        15,
        grade:      65,
    },

    {
        first_name: 'Owanate',
        last_name:  'Amachree',
        age:        16,
        grade:      100,
    },

];

students.sort(function(a,b){
    if (a.grade > b.grade){
        return -1;
    } else{
        return 1;
    }
});
console.log(students);