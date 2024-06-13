import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowAllTask from './Components/ShowAllTask'
import Login from './Components/Login'
import AddTask from './Components/AddTask'
import UpdateTask from './Components/UpdateTask'
import TaskNotFound from './Components/TaskNotFound'
import NavBar from './Components/NavBar'
import ViewTask from './Components/ViewTask'


function App() {

  return (
    <>
      <h1 className='text-red font-Bebas Neue text-6xl text-center'>TO DO LIST </h1>
      <NavBar/>
      <Routes>
        {<Route path='/tasks' element={<ShowAllTask/>}/>}
          <Route path='/add' element={<AddTask/>} />
          <Route path='/update/:id' element={<UpdateTask />} />
          <Route path='*' element={<TaskNotFound/>}/>
          <Route path= '/' element={<Login />}/>
          <Route path= '/view' element={<ViewTask />}/>
          
      </Routes>
    </>
  )
}

export default App
