import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../api/apiSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {extendedTodoSlice} from "../features/todos/todosSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        todos: extendedTodoSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch);
export default store;