"use client"
import React from 'react'
import Form from './components/Form'
import ListView from './components/ListView'

export default function Page() {
  return (
    <main className='p-5 flex gap-5'>
        <Form/>
        <ListView/>
    </main>
  )
}
