import axios from 'axios'
const initialState = {
  todos: [],
  isLoading: false
};

const ADD_NEW_TODO = "ADD_NEW_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";
const NEW_TODOS = "NEW_TODOS";
const CHECK_LOADING = "CHECK_LOADING";

export const todosReducer = (state = initialState, {newTodos, loading, type ,newTodo, id}) => {
  switch (type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case EDIT_TODO:
      return {};
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    case NEW_TODOS:
      return {
        ...state,
        todos: newTodos
      }
    case CHECK_LOADING:
      return {
        ...state,
        isLoading: loading
      }
    default:
      return state;
  }
};

// export const addNewPostAction = (payload) => ({ type: ADD_NEW_POST, payload });
// export const editPostAction = (payload) => ({ type: EDIT_POST, payload });
// export const deletePostAction = (payload) => ({ type: DELETE_POST, payload });

export const addTodo = (newTodo) => ({ type: ADD_NEW_TODO, newTodo });
export const editTodo = () => ({ type: EDIT_TODO });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const checkLoading = (loading) => ({type: CHECK_LOADING, loading})
export const getTodoList = () => async (dispatch) => {
  try {
  const todos = await axios.get("https://jsonplaceholder.typicode.com/todos").then(res => res.data)
    dispatch(checkLoading(true))
    dispatch({
      type: NEW_TODOS,
      newTodos: todos
    })
  } finally { dispatch(checkLoading(false))
  }
}
