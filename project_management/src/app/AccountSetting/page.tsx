import React from 'react'
import Password from './Password';
import ActiveSession from './ActiveSession';
import Header2 from '@/components/Header2';

const AccountSetting = () => {
  return (
    <div>
      <Header2/>
        <Password/>
        <ActiveSession/>
    </div>
  )
}

export default AccountSetting;