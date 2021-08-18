import {connect} from '../database.js'

export const getExpenses = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM expenses');
    res.json(rows);
}

export const getExpense = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM expenses WHERE id = ?', [req.params.id]);
    res.json(rows[0])
}

export const getExpensesCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM expenses');
    res.json(rows[0]["COUNT(*)"])
}
export const createExpense = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query('INSERT INTO expenses(amount, title, description) VALUES (?,?,?)', [req.body.amount ,req.body.title,req.body.description]);
    res.json({
        id: result.insertId,
        ...req.body})
}
export const deleteExpense = async (req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM expenses WHERE id = ?', [req.params.id]);
    res.sendStatus(204);
}
export const updateExpense = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query('UPDATE expenses SET ?', [req.body, req.params.id]);
    res.sendStatus(204);
}