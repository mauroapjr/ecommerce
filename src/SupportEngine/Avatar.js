import React, {useState} from "react";

import { styles } from './styles'

const Avatar = props => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={props.style}>
      <div
        style={{
          ...styles.avatarHello,
          ...{opacity: hovered ? '1':'0'}
        }}
      >
        Hello There!
      </div>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={
          {
            ...styles.chatWithMeButton,
            ...{ border: hovered ? '1px solid #f9f0ff': '4px solid #7a39e0'}
          }
        }
      >
      </div>

    </div>
  )
}

export default Avatar;