import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components/common'
import { StudentCard } from './features/labs/Student'
import { Student, LoginPayLoad } from './models'

function App() {
  const boraStudent: Student = {
    name: 'bora',
    age: 27,
    hobbyList: ['eat', 'code', 'sleep'],
  }

  return (
    <div>
      <Header></Header>
      <StudentCard student={boraStudent} />
      <Footer></Footer>
    </div>
  )
}

export default App
