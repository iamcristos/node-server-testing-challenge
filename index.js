const server = require('./server');

const PORT = process.env.PORT || 8000;

server.get('/', (req, res)=>{
    res.status(200).send({message:'welcome to hobbits'})
})
server.all('*', (req,res)=>{
    res.status(404).send("How did you get here")
})
server.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`)
});

module.exports = server;