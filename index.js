const server = require('./server');


const PORT = process.env.PORT || 5003;

server.listen(PORT, () => 
console.log(`Server is running on port ${PORT}`));

