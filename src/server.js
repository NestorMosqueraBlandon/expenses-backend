import app from './app.js'
import { json } from 'express';

const port = 6001


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log('Server Ready')
})
