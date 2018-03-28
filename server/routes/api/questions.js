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

router.get('/buildBoard/:categoryCount', async function (req, res) {

  const categoryCount = req.params.categoryCount;
  const board = [];

  const buildCategory = async (categoryId) => {
    const category = await Category.findById(categoryId);

    const questions = await Question.findAll({
      where: {
        categoryId: category.id
      }
    })
    const questionsArr = questions.map(question => {
      return {
        id: question.id,
        pointVal: question.pointValue,
        question: question.question,
        asked: false,
      }
    })
    return {
      name: category.name,
      id: category.id,
      questions: questionsArr
    }
  }


  const builtCategory = await buildCategory(1);

  for (let i = 0; i < categoryCount; i++) {
    let builtCategory = await buildCategory(i+1);
    board.push(builtCategory);
  }
  
  res.json(board)
  



  // const sendBoard = async () => {
  //   try {
  //     //grab all categories
  //     const board = [];
  //     const categories = await Category.findAll()


  //     categories.forEach(async category => {
  //       const questions = await Question.findAll({
  //         where: {
  //           categoryId: category.id
  //         },
  //         order: [
  //           ['initialDifficulty', 'ASC']
  //         ]
  //       })

  //       const questionArr = questions.map( question => ({
  //         id: question.id,
  //         pointVal: question.pointValue,
  //         question: question.question,
  //         asked: false,
  //       }));
  //       board.push({
  //         name: category.name,
  //         id: category.id,
  //         questions: questionArr
  //       })

  //     })
  //     return board;
  //   } catch (err) {
  //     console.log(err)
  //   }

  // }

  // console.log(sendBoard())
  // // res.json(sendBoard());

})


module.exports = router;