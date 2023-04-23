import { Fragment, useState } from 'react'
// import './App.css'
import { Footer, Header } from './components/common'
import { Widget } from './components/common/Widget'
import { MainLayout } from './components/Layout'
import { MyText } from './features/labs/MyText'
import { StudentCard } from './features/labs/Student'
import { Student, LoginPayLoad } from './models'

function App() {
  const boraStudent: Student = {
    name: 'bora',
    age: 27,
    hobbyList: ['eat', 'code', 'sleep'],
  }

  function handleStudentClick(student: Student) {
    console.log('student click', student)
  }

  const studentList = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'frontend' },
  ]

  return (
    <div>
      <ul>
        {studentList.map((student) => (
          <Fragment key={student.id}>
            <li>1{student.name}</li>
            <li>2{student.name}</li>
          </Fragment>
        ))}
      </ul>
      {/* <MainLayout>
        <StudentCard student={boraStudent} onClick={handleStudentClick} />
      </MainLayout>

      <Header></Header>
      <StudentCard student={boraStudent} onClick={handleStudentClick} />
      <Footer></Footer>

      <MyText></MyText>
      <MyText>easy frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>
      <MyText>
        <span>bora</span>
      </MyText>
      <MyText>
        <span>bora</span> ne
      </MyText>
      <MyText>
        <span>ai</span>
        <span>day</span>
      </MyText>

      <div>
        <div>
          <Widget title="Earning Overview">Chart 1</Widget>
        </div>
        <div>
          <Widget title="Revenue Sources">Chart 2</Widget>
        </div>
        <div>
          <Widget title="Projects">Chart 3</Widget>
        </div>
        <div>
          <Widget title="Illustrations">Chart 4</Widget>
        </div>
      </div> */}
    </div>
  )
}

export default App
