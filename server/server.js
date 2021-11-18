const express = require('express');
const { v4: uuid4 } = require('uuid');
const app = express();

//Middleware for data on pót request
app.use(express.json({ extended: false }));

const todos = [
	{
		message: 'wash car...',
		id: 1,
	},
	{
		message: 'Watch Dog ..',
		id: 2,
	},
	{
		message: 'Watch TV ..',
		id: 3,
	},
];

app.get('/test', (req, res) => {
	res.status(200).json(todos);
});

app.post('/test2', (req, res) => {
	const newTodo = {
		message: req.body.message,
		id: uuid4(),
	};

	todos.push(newTodo);

	res.status(201).json(todos);
});

const PORT = 5001;

app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
});
