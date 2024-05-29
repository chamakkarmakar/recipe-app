import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthProvider/AuthProvider'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className='mt-20'>
      <h1 className='text-center text-2xl font-semibold'>User Profile</h1>
      <form className="p-12">
        <div className="space-y-5">
          <label htmlFor="name" className="block">User Name</label>
          <div className="relative">
            <input id="name" type="name" placeholder="User Name" value={user?.displayName} className="p-3 block w-full pl-10 drop-shadow-lg outline-none" />
          </div>

          <label htmlFor="email" className="block">Email</label>
          <div className="relative">
            <input id="email" type="email" placeholder="example@gmail.com" value={user?.email} className="p-3 block w-full pl-10 drop-shadow-lg outline-none" />
          </div>

          <label htmlFor="account" className="block">Created Account</label>
          <div className="relative">
            <input id="account" type="text" placeholder="Created Account" value={user?.metadata?.creationTime} className="p-3 block w-full pl-10 drop-shadow-lg outline-none" />
          </div>

          <label htmlFor="loggedIn" className="block">Last Logged In</label>
          <div className="relative">
            <input id="loggedIn" type="text" placeholder="Last Logged In" value={user?.metadata?.lastSignInTime
            } className="p-3 block w-full pl-10 drop-shadow-lg outline-none" />
          </div>

        </div>
      </form>
    </div>
  )
}

export default Dashboard
