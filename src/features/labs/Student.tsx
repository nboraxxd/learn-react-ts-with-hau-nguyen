import * as React from 'react'
import { Student, LoginPayLoad } from '../../models'

export interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  const { name, age, isHero = true } = student

  return (
    <div>
      Student: {name} {age} {isHero ? 'hero' : 'no-hero'}
    </div>
  )
}
