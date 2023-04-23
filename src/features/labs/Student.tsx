import * as React from 'react'
import { Student } from '@/models'
// import { Student, LoginPayLoad } from '../../models'

export interface StudentCardProps {
  student: Student
  onClick?: (student: Student) => void
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  let { name, age, isHero = true } = student

  function handleClick() {
    onClick?.(student)
  }

  return (
    <div onClick={handleClick}>
      Student: {name} {age} {isHero ? 'hero' : 'no-hero'}
    </div>
  )
}
