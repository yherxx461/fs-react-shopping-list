// const express = require('express')
const router = require('express').Router();
const pool = require('../modules/pool');

// GET ROUTE - GABRIEL
router.get('/', (req, res) => {
    console.log('In GET request')
    let queryText = 'SELECT * FROM "shopping_list";';
    
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

// POST ROUTE - Jessica
router.post('/', (req, res) => {
    console.log(req.body);
    let itemToAdd=req.body
    let queryText = `
    INSERT INTO "shopping_list" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);
    `;

    pool.query(queryText, 
        [itemToAdd.name, itemToAdd.quantity, itemToAdd.unit])
        .then((result) => {
            // Query was successful!
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("Error in POST: ", error);
            res.sendStatus(500);
        });
});

// PUT ROUTE - ERIK
router.put('/:id', (req, res) => {
    console.log(req.params, req.body);
    const modifiedShoppingList = parseInt(req.params.id);
    console.log(modifiedShoppingList);
    let queryText = `UPDATE "shopping_list" SET "purchased" = NOT "purchased" WHERE "id" = $1;`;

    // const queryArgs = [modifiedShoppingList, updateShoppingId];

    pool
//                           $1                $2
    .query(queryText, [modifiedShoppingList])  //req.body.description
    .then((result) => {
        res.send(result.rows);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
    });

// DELETE ROUTE - YING
router.delete('/:id', (req, res) => {
    const deleteShoppingItem = parseInt(req.params.id);
    console.log(deleteShoppingItem);
    const queryText = `DELETE FROM "shopping_list" WHERE "id" = $1;`;

    pool
    .query(queryText, [deleteShoppingItem])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Unable to delete item', error)
        res.sendStatus(500);
    })
});

module.exports = router;