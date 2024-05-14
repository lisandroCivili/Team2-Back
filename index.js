import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import './src/database/database.js'
import routerProductos from './src/routes/productos.routes.js'
import routerUsuarios from './src/routes/usuarios.routes.js'
import routerPedidos from './src/routes/pedidos.routes.js'

const app = express()
app.set('port', process.env.PORT || 4009)
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)

app.use(express.static(path.join(__dirname, '/public')))

app.use('/api', routerProductos)
app.use('/api/usuario', routerUsuarios)
app.use('/api/pedidos', routerPedidos)