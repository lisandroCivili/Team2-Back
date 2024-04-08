import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import './src/database/database.js'

const app = express()
app.set('port', process.env.PORT || 4009)
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))