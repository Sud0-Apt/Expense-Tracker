const express = require('express')

const router = express. Router()
const {
    createTransactions,
    getTransactions,
    getOneTransaction,
    deleteTransaction,
    updateTransaction
} = require('../controllers/txnController')

// GET all workouts
router.get('/', getTransactions)

//GET a single workout
router.get('/:id', getOneTransaction)

// POST a new workout
router.post('/', createTransactions)

// DELETE a workout
router.delete('/:id', deleteTransaction)

// UPDATE a workout
router.patch('/:id', updateTransaction)

module.exports = router