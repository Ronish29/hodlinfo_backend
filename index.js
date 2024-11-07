const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/crypto');
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api',routes);

app.get('/',(req,res)=>{
    res.json({
        success : true,
        message: "Server is running perfectly"
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

