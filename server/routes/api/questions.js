const express = require('express');
const router = express.Router();
const { Question, Category } = require('../../models');

router.get('/', function (req, res) {
  Question.findAll({ include: Category })
    .then((questions) => {
      res.json(questions);
    })
    .catch(console.error.bind(console));
});

router.get('/buildBoard', function (req, res) {

  const sendBoard = async () => {
    try {
      //grab all categories
      let board = [];
      const categories = await Category.findAll()


      categories.forEach(async category => {
        const questions = await Question.findAll({
          where: {
            categoryId: category.id
          },
          order: [
            ['initialDifficulty', 'ASC']
          ]
        })

        const questionArr = questions.map( question => ({
          id: question.id,
          pointVal: question.pointValue,
          question: question.question,
          asked: false,
        }));
        board.push({
          name: category.name,
          id: category.id,
          questions: questionArr
        })

      })
      return board;
    } catch (err) {
      console.log(err)
    }

  }

  console.log(sendBoard())
  // res.json(sendBoard());

})


module.exports = router;