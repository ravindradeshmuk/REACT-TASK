import React from 'react';


const Card = (userName,profilePic,profileUrl) => {
  return (
    <div>
      <div className='box'>
        <img src={profilePic}alt='profileimage'></img>
        <h1>{userName}</h1>
    <h3>{userName}</h3>
    <a href= {profileUrl} target="blank" className='profilebtn'>visit profile</a>
    </div>
    </div>
  )
}

export default Card;