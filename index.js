const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const path = require('path'); 

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use('/public', express.static(path.join(__dirname, '/src/css')));

app.use(express.urlencoded({extended: true}));
app.use('/', require('./src/routes/agendaRoutes'));

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});
