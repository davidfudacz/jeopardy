'use strict'
const Sequelize = require('sequelize');
const { db, User, Cohort, Question, Category } = require('./models');

const boundConsole = console.error.bind(console);

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
  }],{returning: true})

  const cohort = Cohort.create({
    name: '1802-FSA-CH'
  },{returning: true})

  Promise.all([students, fellows, instructors, cohort])
    .then(([students, fellows, instructors, cohort]) => {
      students.forEach(student => {student.addCohort(cohort, {through: { userType: 'Student' }})});
      fellows.forEach(fellow => {fellow.addCohort(cohort, {through: { userType: 'Fellow' }})});
      instructors.forEach(instructor => {instructor.addCohort(cohort, {through: { userType: 'Instructor' }})});

      console.log('Inital Users created successfully!')
    })
    .catch(boundConsole);



  const makeQuestions = () => {
    let questionArr = [];
    for (let i = 0; i < 6; i++) {
      let iStr = i.toString();
      for (let j = 0; j < 5; j++) {
        let jStr = j.toString();
        questionArr.push({
          question: `this is question #${iStr}${jStr}`,
          answer: `this is the answer to question #${iStr}${jStr}`,
          initialDifficulty: j,
        })
      }
    }
    return questionArr;
  }

  const makeCategories = () => {
    let categoryArr = [];
    for (let i = 0; i < 6; i++) {
      let iStr = i.toString();
      categoryArr.push({
        name: `Category ${iStr}`,
      })
    }
    return categoryArr;
  }
  const questionPromise = Question.bulkCreate(makeQuestions(), {returning: true})
  const categoryPromise = Category.bulkCreate(makeCategories(), {returning: true})

  Promise.all([questionPromise, categoryPromise])
  .then(([questions, categories]) => {
    let count = 0;
    for (let i = 0; i < questions.length; i++) {
      if (i>0 && !(i % 5)) count++
      let currentCategory = categories[count];
      let currentQuestion = questions[i];
      currentQuestion.setCategory(currentCategory);
    }
  })
  .catch(boundConsole);

}
