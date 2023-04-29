let nextTodoId = 2;

export function addToDo(text)
{
   return {
    type: "ADD_TODO",
    id: ++nextTodoId,
    text,
   }
}

export function deleteTodo(id)
{
   return {
    type: "DELETE_TODO",
    id,
   }
}