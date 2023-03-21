import express from "express" // Para que no salga este error instalo tipos npm i @types/express -D
import diaries from "./routes/diaries"

const server = express ()
server.use(express.json()) //midelware que transforma la req body a json

const PORT = 3001

// para que no me salte error por no utilizar req, entonces lo pongo con guion bajo _req 
server.get('/ping', (_req, res)=>{
    console.log("holi")
    res.send("pong")
})

server.use("/api/diaries", diaries)

server.listen(PORT, ()=>{
    console.log("servidor esta en el puerto 3001")
})