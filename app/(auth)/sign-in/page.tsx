"use client"

import AuthForm from '@/components/AuthForm'
import { signInWithCredentials } from '@/lib/actions/auth'
import { signInScheam } from '@/lib/validations'
import React from 'react'

const page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInScheam}
    defaultValues={
      {
        email: "",
        password: ""
      }
    }
    onSubmit={signInWithCredentials}
  />
)
export default page