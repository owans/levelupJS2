const pupils = [

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
        age:        18,
        grade:      100,
    },

];

function legalAge (pupil){
        if (pupil.age > 16){
            return true;
        } else{
            return false;
        };
    }

const belowAge = pupils.filter(function(pupil){
    return legalAge(pupil);
});

console.log(belowAge);
