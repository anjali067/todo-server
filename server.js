const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var todoList = {};
app.post('/add', function (req, res) {
	todoList.push(req.body.todo);
	res(req.body.todo);
});

app.post('/update', function(req,res){
	res(req.body.todoList);
});

app.delete('/delete', function(req, res){
	todo.splice(req.body.id, 1);
	res(req.body);
});

app.get('/display', function(req, res){
	res(req.todoList);
});

app.listen(5000, function(){
	console.log('application running')
});