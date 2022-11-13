import React, {useContext, useEffect, useState} from 'react';
import {Badge, Button, Form, FormGroup, Input, Label} from "reactstrap";
import {nanoid} from "@reduxjs/toolkit";
import {useAddTodoMutation, useUpdateTodoMutation} from "./todosSlice";
import ContextApi from "../../Context";


const AddTodoForm = () => {

    const [title, setTitle] = useState("");
    const {selectedData, setSelectedData} = useContext(ContextApi)
    const [content, setContent] = useState("");

    const isAddDisable = [title.trim(), content.trim()].every(Boolean) && selectedData === null;
    const isUpdateDisable = [title.trim(), content.trim()].every(Boolean) && selectedData;
    const [addTodoMutation] = useAddTodoMutation();
    const [updateTodoMutation] = useUpdateTodoMutation();

    useEffect(() => {

        if (selectedData) {
            setTitle(selectedData.title)
            setContent(selectedData.content)
        } else {
            setTitle("")
            setContent("")
        }
    
    }, [selectedData])

    const submitHandle = (e) => {
            addTodoMutation({
                id: nanoid(),
                title: title,
                content: content
            })

        setTitle("")
        setContent("")

        e.preventDefault();
    }
    const updateTodo=()=>{
        updateTodoMutation({
            id:selectedData.id
            ,title,content
        })
        setSelectedData(null);
    }



    return (
        <div>
            <Badge color={" w-100 mt-2 mb-2"} >
                <h3 className={"header"}>Todo List</h3>
            </Badge>
            <Form onSubmit={submitHandle}>
                <FormGroup>
                    <Label htmlFor={"title"} className={'label'}>Title</Label>
                    <Input
                        className={"addTodo-input"}
                        type={"text"}
                        id={"title"}
                        name={"title"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor={"content"} className={"label"}>Content</Label>
                    <Input
                        className={"addTodo-input"}
                        type={"text"}
                        id={"content"}
                        name={"content"}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </FormGroup>

                <div className={"d-flex align-items-center justify-content-center"}>
                    <Button disabled={!isAddDisable} color={"primary w-100 mr-2"}>Add</Button>
                    <Button onClick={updateTodo} disabled={!isUpdateDisable}
                            color={"success w-100 ml-2"}>Update</Button>
                </div>
            </Form>
        </div>
    );
};


export default AddTodoForm;