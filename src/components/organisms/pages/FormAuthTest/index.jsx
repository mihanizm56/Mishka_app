import React from 'react'
import {AuthProvider} from '../../../../containers'
import {FormAuth} from '../FormAuth'

export const FormAuthTest = () => (console.log('test'),<AuthProvider component={FormAuth} />)