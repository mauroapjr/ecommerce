import { styles } from '../styles';

import { useState } from 'react';

import EmailForm from './EmailForm';

import ChatEngine from './ChatEngine';

const SupportWindow = props => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);


  return (
    <div
        style={{
          ...styles.supportWindow,
          ...{ opacity: props.visible ? '1' : '0'}
        }}
    >
      <EmailForm 
        setChat={chat => setChat(chat)}
        setUser={user => setUser(user)}
        visible={user === null || chat === null}
      />

      <ChatEngine
        visible={user !== null || chat !== null}
        chat={chat}
        user={user}
      />

    </div>
  )
}

export default SupportWindow;

