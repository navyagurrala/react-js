import { useReducer, useState } from "react"

const reducerfunction=(state,action)=>{

    console.log(state)
    console.log(action)
    switch(action.type){
        case "INCREMENT_ACTION":
            return {...state,age:state.age+1}
        case "DECREMENT_ACTION":
            return {...state,age:state.age-1}
        case "ADD_TODO":
            return {...state,Todo:[...state.Todo,action.next]}

             default :
        return state

    }}
const initialstate={
    name:"navya",
    age:20,
    Todo:[]
}



const UserReducerex1=()=>{

    const [currentstate,dispatchfunction]=useReducer(reducerfunction,initialstate)
    const [value,setvalues]=useState("")
    const increamentfun=()=>{
        dispatchfunction(
            {
                type:"INCREMENT_ACTION"
            }
        )
    }
    const addtodo=()=>{
        dispatchfunction(
            {
                type:"ADD_TODO",
                naxt:value
            }
        )
    }

    const decreamentfun=()=>{
        dispatchfunction(
            {
                type:"DECREMENT_ACTION"
            }
        )
    }
    const onchangefun=(event)=>{
        setvalues(event.target.value)
    }
    return(
        <>
        {/* <h1>usereducer example1</h1> */}
        {/* <h2>{currentstate.name}</h2> */}
        <h2>{currentstate.age}</h2>
        <button onClick={increamentfun}>click to increase age</button>
        <button onClick={decreamentfun}>click to decrease age</button>
        <input value={value}  onChange={onchangefun}/>
        <button onClick={addtodo}>add todo</button>{
            currentstate.Todo.map((values,index)=><h4 key={index}>{value}</h4>)
        }
        </>
    )
}
export default UserReducerex1