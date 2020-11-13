//      IMPORTS 
import './styles.css';
import { TodoList } from './classes'
import { crearHTML } from './js/componentes';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

//      CODE 
export const todoList = new TodoList();

// todoList.todos.forEach( todo=>crearHTML( todo ) );
todoList.todos.forEach( crearHTML );



