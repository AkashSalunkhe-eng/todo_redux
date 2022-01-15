import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess } from "../Store/action"


export const Todos = () => {
    const [text,setText] = useState("")
    const {loading,todos,error} = useSelector((state)=>({loading:state.loading,todos:state.todos,error:state.error}));
    const dispatch = useDispatch()

    useEffect(()=>{
        getTodo()
    },[])
    const getTodo = () =>{
        
        async function req(){
        try{
            dispatch(getTodoLoading());
            const data = await fetch('http://localhost:3001/todos').then((d)=>d.json())
            dispatch(getTodoSuccess(data))
        }catch(e){
            dispatch(getTodoError(e))
        }
    }
    req()

    }
    const addtodo = () =>{
        dispatch(addTodoLoading())
                fetch('http://localhost:3001/todos',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({status:false,title:text}),
                })
                .then((d)=>d.json())
                .then((res)=>{
                  dispatch(addTodoSuccess(res))
                  getTodo()
                })
                .catch((err)=>{
                    dispatch(addTodoError(err))
                })
               
    }
    return loading?<div>Loading...</div>:error?<div>Error...</div>:(
        <div>
            <input type="text" value={text} placeholder="Enter Your Daily Plan" onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>{
                addtodo()
            }}>AddTodo</button>
            {todos.map((e) => (
                <div>{e.title}-{e.status?"Done":"Not Done"}</div>
            ))}
        </div>
        
    )
}