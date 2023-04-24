import { useAuth } from "@/context/AuthContext"
import React, { useEffect, useState } from "react"

export default function UserDashboard() {
    const { userInfo } = useAuth()
    const [ addToDo, setAddTodo ] = useState(false)
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState(null)
    
    useEffect(() => {
        if (!userInfo || Object.keys(user.info).length === 0) {
            setAddTodo(true)
        }
    }, [userInfo])

    return (
        <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
            {addToDo && <div className="flex items-stretch">

                <input type='text' placeholder="Enter todo" value={todo} onChange={(e) => setTodo(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-slate-900 flex-1" />
                <button className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40">ADD</button>
            </div>}
            {userInfo && (
                <>
                </>
            )}
            {!addToDo && <button onClick={() => setAddTodo(true)} className="text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text text-lg duration-300 hover:opacity-30">ADD TODO</button>}
        </div>
    )
}

