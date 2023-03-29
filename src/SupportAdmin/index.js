import React from 'react';

import {ChatEngine} from 'react-chat-engine';

const SupportAdmin = () => {
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='Admin'
      userSecret='123456'
      height='calc(100hv - 20px)'
    />
  );
}

export default SupportAdmin;