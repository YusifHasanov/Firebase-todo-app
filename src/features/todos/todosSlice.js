import { createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {apiSlice} from "../../api/apiSlice";

const todoAdapter = createEntityAdapter({
    selectId: todo => todo.id,
    sortComparer: (a, b) => a.id.localeCompare(b.id)
});

const initialState = todoAdapter.getInitialState();

export const extendedTodoSlice = apiSlice.injectEndpoints({

    endpoints: builder => ({
        getTodos: builder.query({
            query: () => '/todos',
            transformResponse: response => {
                return todoAdapter.setAll(initialState, response)
            },
           providesTags: (result, error, arg) => [{type: 'Todo', id: 'LIST'}]
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            transformResponse: (response, todo) => {
                return todoAdapter.addOne(initialState, {...todo, id: response.id})
            },
            invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            transformResponse: (response, todo) => { 
                return todoAdapter.updateOne(initialState, {id: todo.id, changes: todo})
            },
            invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
        }),
        deleteTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'DELETE',
            }),
            transformResponse: (response, todo) => {
                return todoAdapter.removeOne(initialState, todo.id)
            },
            invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
        }),
    })
})

 export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation} = extendedTodoSlice;

export const selectTodosResult = extendedTodoSlice.endpoints.getTodos.select();

const selectTodosData = createSelector(
    selectTodosResult,
    result => result.data
)


export const {selectAll: selectAllTodos, selectById: selectTodoById} = todoAdapter.getSelectors(
    state => selectTodosData(state) ?? initialState
);


