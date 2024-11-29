import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'data.json')

const users = [
    {id: 1, name: 'Alan'}, {id: 2, name: 'Bea'},{id: 3, name: 'Clotild'},
]
const axtra = users.fill([{ name: 'Abel' }, { name: 'Bob' }, { name: 'Cedric' }])
try{
    fs.writeFileSync(filePath, JSON.stringify(users))
}catch(error){
    console.log(error)
}

let content 
try{
    content = fs.readFileSync(filePath, 'utf-8')
}catch(error){
    console.log(error)
}

console.log(content)
const userdata = JSON.parse(content)
console.log(userdata)