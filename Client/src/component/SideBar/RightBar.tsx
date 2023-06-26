import React from 'react'
import './RightBar.css'

function RightBar() {
  return (
    <div className='rightbar flex'>
        <div>
            <div className='profile-pic'></div>
            <div className='editprofile-btn'>Edit Profile</div>
        </div>
        <div>
            <div className='primary-btn'>Settings</div>
            <div className='primary-btn logout-btn'>Log out</div>
        </div>
    </div>
  )
}

export default RightBar
