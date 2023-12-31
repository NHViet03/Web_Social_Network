import React from 'react';
import Avatar from '../Avatar';
import { imageShow, videoShow } from '../../utils/mediaShow';

const MsgDisplay = ({ user, msg, theme }) => {
  return (
    <>
      {msg?.text && (
        <>
          <div className='chat_title'>
            <Avatar src={user.avatar} size="avatar-sm"></Avatar>
          </div>
          <div className='chat_text'>{msg.text}</div>
          {msg.media.map((item, index) => (
            <div key={index} className='display_img_video_chat'>
              {item.url.match(/video/i) ? (
                videoShow(item.url, theme)
              ) : (
                imageShow(item.url, theme)
              )}
            </div>
          ))}
          <div className='chat_time'>
            {
              msg.createdAt === undefined ?
              new Date().toLocaleString() : new Date(msg.createdAt).toLocaleString()
            }
          </div>
        </>
      )}
    </>
  );
};

export default MsgDisplay;
