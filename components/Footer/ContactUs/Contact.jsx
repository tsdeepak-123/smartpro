import React from 'react'
import OfficeAddress from './OfficeAddress'
import GetApp from './GetApp'
import Support from './Support'

const Contact = () => {
  return (
    <section className='flex justify-between'>
      <OfficeAddress/>
      <GetApp/>
      <Support/>
    </section>
  )
}

export default Contact