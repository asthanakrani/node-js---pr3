
let TodoStorage = [];
let count = 1;
const defaultController = (req, res) => {

    res.render('index', { todos: TodoStorage });
}

const addTodoController = (req, res) => {

    console.log(req.body.TODO);

    const todoObj = {
        id: count++,
        fname: req.body.fname,
        email: req.body.email,
        number: req.body.number,
        skill: req.body.skill,
    }
    if (req.body.gridCheck) {

        todoObj.gridCheck = true;

    } else {

        todoObj.gridCheck = false;
    } TodoStorage = [...TodoStorage, todoObj];

    res.redirect('/');
}
const readTodoController = (req, res) => {

    res.render('read', { todos: TodoStorage })

}
const editTodoController = (req, res) => {

    const id = req.params.id;

    const SingleRec = TodoStorage.find((TODO) => TODO.id == id);

    console.log('SingleRec', SingleRec);

    res.render('edit', { SingleRec });

}
const updateTodoController = (req, res) => {

    console.log("updatedRec", req.body.fname);

    let updatedTodo = TodoStorage.map((TODO) => {

        if (TODO.id == req.params.id) {

            return {
                ...TODO,
                fname: req.body.fname,
                email: req.body.email,
                number: req.body.number,
                skill: req.body.skill,
            };

        } else {

            return TODO;
        }
    }); TodoStorage = updatedTodo;

    res.redirect('/');
}
const deleteTodoController = (req, res) => {

    console.log("delete controller");

    const id = req.params.id;

    TodoStorage = TodoStorage.filter((TODO) => TODO.id != id);

    res.redirect('/');
}
module.exports = {

    defaultController,
    addTodoController,
    editTodoController,
    updateTodoController,
    deleteTodoController,
    readTodoController

};