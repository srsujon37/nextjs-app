import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            {/* side nav */}
            <div className='col-span-3 bg-amber-100'>
                <ul>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='col-span-9 bg-blue-200'>
                     {children}
            </div>

        </div>
        {/* {children} */}
    </div>
  )
}
