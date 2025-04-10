import React from 'react'

function Alert({message}) {
  return (

    <div
      className=" alert alert-light position-fixed top-50 start-50 botton-900 start-50 translate-middle p-3"
      style={{ zIndex: 9999 }}
    role="alert"
    >{message}
    </div>

  )
}

export default Alert