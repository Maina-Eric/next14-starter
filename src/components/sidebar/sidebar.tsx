import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

const Sidebar = () => {
  return (
    <div>
      <div className="text-base">FinPerformance</div>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Sidebar
