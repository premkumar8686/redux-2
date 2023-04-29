import { combineReducers } from "redux";


const initialState = [
    { id: 1, text: "To Do - 1", completed: false },
    { id: 2, text: "To Do - 2", completed: true },
];

function todosReducer(state = initialState, action)
{
    console.log('Reduce calling');
    switch(action.type)
    {
        case 'ADD_TODO':
         return [
			...state,
			{
			  id: action.id,
			  text: action.text,
			},
		  ];
        case 'DELETE_TODO':
         return state.filter((obj)=> obj.id !== action.id);
        case 'TOGGLE_TODO':
         return null;
        default:
          return state
    }
}

function reducer2(state = [], action) {
    return state;
}

const rootReducer = combineReducers({
    todosReducer,
    reducer2
});

export default rootReducer;