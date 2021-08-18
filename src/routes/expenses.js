import { Router } from "express";
import { createExpense, deleteExpense, getExpense, getExpenses, getExpensesCount, updateExpense } from "../controllers/expenses.js";

const router = Router();

/**
 * @swagger  
 * tags:
 *  name: Expenses
 *  description: Expenses endpoint
 */


/**
 * @swagger  
 * /expenses:
 *  get:
 *    summary: Get all expenses
 *    tags: [Expenses]
 */
router.get('/expenses', getExpenses)

/**
 * @swagger
 * /expenses/count:
 *  get:
 *    summary: Get amount of expenses
 *    tags: [Expenses]
 */
router.get('/expenses/count', getExpensesCount)

/**
 * @swagger
 * /expenses/:id:
 *  get:
 *    summary: Get one expense
 *    tags: [Expenses]
 */
router.get('/expenses/:id', getExpense)

/**
 * @swagger
 * /expenses:
 *  post:
 *    summary: Create a expense
 *    tags: [Expenses]
 */
router.post('/expenses', createExpense)

/**
 * @swagger
 * /expenses/:id:
 *  delete:
 *    summary: delete one tasks
 *    tags: [Expenses]  
 */
router.delete('/expenses/:id', deleteExpense)

/**
 * @swagger
 * /expenses:
 *  put:
 *    summary: Update a tasks
 *    tags: [Expenses]
 */
router.put('/expenses', updateExpense)


export default router;