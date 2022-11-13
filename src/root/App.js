import React, {useState} from 'react';
import Navi from "../features/navigation/Navi";
import {Container} from "reactstrap";
import AddTodoForm from "../features/todos/AddTodoForm";
import TodoList from "../features/todos/TododList";
import ContextApi from "../Context";
const App = () => {
    const [selectedData,setSelectedData]=useState(null);
    return (
       <ContextApi.Provider value={{selectedData,setSelectedData}}>
           <div className={"App"}>
               <Container>
                 <AddTodoForm/>
                   <TodoList/>
               </Container>
           </div>
       </ContextApi.Provider>
    );
};

export default App;