//      IMPORTS 
import './styles.css';
import { TodoList } from './classes'
import { crearHTML } from './js/componentes';

//      CODE 
export const todoList = new TodoList();

// todoList.todos.forEach( todo=>crearHTML( todo ) );
todoList.todos.forEach( crearHTML );



