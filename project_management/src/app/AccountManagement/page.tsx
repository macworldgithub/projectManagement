import Header2 from '@/components/Header2';
import React from 'react'
import Information from './Information';
import ConnectedAccount from './ConnectedAccount'
const AccountManagement = () => {
  return (
    <div>
        <Header2/>
        <Information/>
        <ConnectedAccount/>
    </div>
  )
}

export default AccountManagement;