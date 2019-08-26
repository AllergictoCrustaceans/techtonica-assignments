const Pool = require('pg').Pool;
const dbPool = new pg.Pool({connectionString: dbConnString})
dbPool.on('error', (err, client) => {
    console.error('Unexpected error on client', err)
    process.exit(-1);
})

const getToDo = (request, response) => {
    pool.query('SELECT * FROM todo_items', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getToDoById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM todo_list WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const createToDo = (request, reponse) => {
    const {todo, dueDate} = request.body

    pool.query('INSERT INTO todo_list (todo, dueDate) VALUES ($1, $2)', [todo, dueDate], (error, results) => {
        if(error) {
            throw error
        }
        reponse.status(201).send(`TODO added with ID: ${results.insertId}`);
    })
}

const updateToDo = (request, response) => {
    const id = parseInt(request.params.id)
    const {todo, dueDate} = request.body;

    pool.query (
        'UPDATE todo_list SET todo = $1, dueDate = $2 WHERE id = $3',
        [todo, dueDate, id],
        (error, results) => {
            if(error) {
                throw error;
            }
            response.status(200).send(`TODO modified with ID: ${id}`);
        }
    )
}

const deleteToDo = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM todo_list WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error;
        }
        reponse.status(200).send(`TODO deleted with ID: ${id}`);
    })
}


module.exports = {
    getToDo,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}