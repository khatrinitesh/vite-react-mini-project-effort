import React from 'react'

export default function CustomApp() {

    const user = {name:'nitesh',avatar:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}

  return (
    <>
       <Profile
            user={user}
            avatar={<AvatarRound user={user} />}
            biography={<BiographyFat user={user} />}
        />
    </>
  )
}

const Profile = ({user,avatar,biography}) => {
    return(
        <>
         <div>{avatar}</div>
         <div>
            <p>{user.name}</p>
            {biography}
         </div>
        </>
    )
}


const AvatarRound = ({user}) => {
    return(
        <>
        <img className='round' alt="avatar" src={user.avatarUrl}/>
        </>
    )
}

const BiographyFat = ({ user }) => (
    <p className="fat">{user.biography}</p>
  );