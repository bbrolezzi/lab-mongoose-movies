const express = require('express');
//router, considerar como uma rota, é o caminho pra pegar (GET) ou modificar uma info (POST)
const router = new express.Router();
//através do require, está buscando as informações do celebrity
const Celebrity = require('../models/celebrity');

router.get('/', (request, response, next) => {
  Celebrity.find({})
    .then(celebrities => {
      response.render('celebrities/index.hbs', { celebrities });
    })
    .catch(error => {
      next(error);
    });
});
router.get('/:id', (request, response, next) => {
  console.log('trying to get it');
  const id = request.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      response.render('celebrities/single-actor', { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
