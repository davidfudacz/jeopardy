'use strict'
const Sequelize = require('sequelize');
const { db, User, Cohort } = require('./models');


module.exports = () => {

  const students = User.bulkCreate([{
    firstName: 'David',
    lastName: 'Fudacz',
  },{
    firstName: 'Josh',
    lastName: 'Remaley',
  },{
    firstName: 'Victor',
    lastName: 'Barrancos',
  },{
    firstName: 'John',
    lastName: 'Walsh',
  },{
    firstName: 'Mary',
    lastName: 'Warrick',
  },{
    firstName: 'Joey',
    lastName: 'Deeds',
  },{
    firstName: 'Chris',
    lastName: 'Miller',
  },{
    firstName: 'Richard',
    lastName: 'Liang',
  },{
    firstName: 'Chris',
    lastName: 'Jones',
  },{
    firstName: 'Cody',
    lastName: 'Fayolle',
  },{
    firstName: 'Jamie',
    lastName: 'Syvino',
  },{
    firstName: 'Samuel',
    lastName: 'Kogan',
  },{
    firstName: 'Vi',
    lastName: 'Tran',
  },{
    firstName: 'Jasmine',
    lastName: 'Munoz',
  },{
    firstName: 'Nick',
    lastName: 'Angelos',
  },{
    firstName: 'Samson',
    lastName: 'Fanuel',
  },{
    firstName: 'Shaheed',
    lastName: 'Shamsi',
  },{
    firstName: 'Daniel',
    lastName: 'Simandl',
  },{
    firstName: 'Rashaun',
    lastName: 'Warner',
  },{
    firstName: 'Daniel',
    lastName: 'Feeney',
  },{
    firstName: 'David',
    lastName: 'Lu',
  },{
    firstName: 'Andrew',
    lastName: 'Wenman',
  },{
    firstName: 'Caitlin',
    lastName: 'Trussell',
  },{
    firstName: 'Matthew',
    lastName: 'Chan',
  },{
    firstName: 'Olivia',
    lastName: 'Lam',
  },{
    firstName: 'Ricky',
    lastName: 'Li',
  },{
    firstName: 'Roman',
    lastName: 'Zalov',
  }],{returning:true})

  const fellows = User.bulkCreate([{
    firstName: 'Ben',
    lastName: 'Odisho',
  },{
    firstName: 'Ellen',
    lastName: 'Ormerod',
  },{
    firstName: 'Erika',
    lastName: 'Weil',
  },{
    firstName: 'Kevin',
    lastName: "O'Malley",
  },{
    firstName: 'Naharika',
    lastName: 'Narain',
  },{
    firstName: 'Patrick',
    lastName: 'Gund',
  }],{returning:true})

  const instructors = User.bulkCreate([{
    firstName: 'Ben',
    lastName: 'Wilhelm',
  },{
    firstName: 'Collin',
    lastName: 'Miller',
  },{
    firstName: 'Finn',
    lastName: 'Terdal',
  }],{returning:true})

  const cohort = Cohort.create({
    name: '1802-FSA-CH'
  },{returning:true})

  Promise.all([students,fellows,instructors,cohort])
    .then(([students, fellows, instructors, cohort]) => {
      // User.findById(1).then((result) => {console.log(result)})
      // students[0].addCohort(cohort, { type: "Student" });
      students.addCohorts(cohort, { userType: 'Student' });
      // fellows.forEach(fellow => fellow.addCohort(cohort, { userType: 'Fellow' }))
      // instructors.forEach(instructor => instructor.addCohort(cohort, { userType: 'Instructor' }))

      console.log('Inital Users created successfully!')
    })
    .catch(console.error.bind(console));
}