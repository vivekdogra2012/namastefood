import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    let err = useRouteError();
    console.log(err)
  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
        <h1>{err.status +" "+err.statusText}</h1>
    </div>
  )
}

export default Error