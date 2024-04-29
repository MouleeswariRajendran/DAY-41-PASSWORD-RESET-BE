const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pwd_task')//, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex:true
// })

.then(()=>console.log('db is working'))
.catch(err => console.log(err));