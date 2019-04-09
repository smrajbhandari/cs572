const express = require('express');
const app = express();
const secretRoutes = require('./routes/secret.js');



app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.enable('trust proxy');


app.use('/secret', secretRoutes);


app.listen(3000, () => console.log(`Listening on 3000 port.`));
