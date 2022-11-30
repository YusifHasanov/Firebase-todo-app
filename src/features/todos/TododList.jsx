import React, {useContext, useEffect} from 'react';

import {Button, ListGroup, ListGroupItem} from "reactstrap";
import {useSelector} from "react-redux";
import {selectAllTodos, useDeleteTodoMutation} from "./todosSlice";
import ContextApi from "../../Context";
import {deleteDoc,doc} from "firebase/firestore";
import {db} from "../../Firebase.config";


const TodoList = () => {

    const allData = useSelector(selectAllTodos);
    const {setSelectedData, selectedData} = useContext(ContextApi);
    const [deleteTodo, {isLoading: isDeleting}] = useDeleteTodoMutation();

    const removeListController = (todo) => {
        // console.log(id)
        deleteTodo(todo);

        if (selectedData &&selectedData.id === todo.id) {
            setSelectedData(null);
        }
    }

    const editTodoHandle = (paramsTitle, paramsContent, paramsID) => {
        setSelectedData({
            title: paramsTitle,
            content: paramsContent,
            id: paramsID
        })
    }


    return (
        <div>
            {

                <ListGroup className={"mt-2"}>{
                    allData.map((todo, id) => (
                        <ListGroupItem key={id}
                                       className={"d-flex list-group-item justify-content-between align-items-center mt-3 "}
                                       style={{borderRadius: "5px"}}>
                     <span>
                         <p className={"mb-1 title"}>Title: <b>{todo.title}</b></p>
                         <p className={"mb-0 content"}>Content: <em>{todo.content}</em></p>
                     </span>
                            <span>
                       <span className={"pe-2"}>
                            <Button color={"success"} outline
                                    onClick={() => {
                                        editTodoHandle(todo.title, todo.content, todo.id)
                                    }}>Edit</Button>
                       </span>

                        <Button color={"danger"} outline
                                id={`${todo.id}`}
                                onClick={(e) => removeListController(todo)}>Remove
                        </Button>
                     </span>
                        </ListGroupItem>
                    ))
                }
                </ListGroup>

            }
        </div>
    );

};

export default TodoList;