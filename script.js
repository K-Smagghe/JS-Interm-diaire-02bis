const instructors = [
    {
        name: 'John',
        availability: 'all',
        specialities: ['Javascript', 'Python', 'C++']
    },
    {
        name: 'Mary',
        availability: 'weekend',
        specialities: ['Javascript', 'Ruby', 'C++']
    },
    {
        name: 'Chris',
        availability: 'evenings',
        specialities: ['Javascript']
    },
    {
        name: 'Anthony',
        availability: 'all',
        specialities: ['Python', 'Ruby']
    },
    {
        name: 'Pauline',
        availability: 'only Mondays',
        specialities: ['Javascript', 'Html', 'CSS']
    },
    {
        name: 'Mark',
        availability: 'all',
        specialities: ['C#', 'C++', 'Javascript']
    },
    {
        name: 'Helen',
        availability: 'evenings',
        specialities: ['Python', 'C++']
    },
    {
        name: 'Charles',
        availability: 'none',
        specialities: ['Python']
    }
];

/* partie 1 */
const availabilyweekend = instructors.filter(instructor =>
    (instructor.availability === 'weekend' || instructor.availability === 'all') &&
    instructor.specialities.includes('Javascript')
);

console.log(availabilyweekend)

/* partie 2 */
const messages = availabilyweekend.map(instructor => {
    return `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`;
});

console.log(messages)


/* partie 3 */

const pythonInstructors = instructors.filter(instructor =>
    (instructor.availability === 'weekend' || instructor.availability === 'all') &&
    instructor.specialities.includes('Python')
);

const pythonMessages = pythonInstructors.map(instructor => {
    return `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class. You need to prepare a Python workshop.`;
});

console.log(pythonMessages)












