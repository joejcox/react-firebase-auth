import defaultAvatar from "Images/avatar_placeholder.png"

const ProfileHeader = ({ data, loading }) => {
  if (loading) return <p className="is-size-1">LOADING...</p>

  console.log(data)

  return (
    <section className="section profile-header">
      <div className="container">
        <div className="profile-image">
          <img
            src={data.data.avatar || defaultAvatar}
            alt={`${data.username} profile avatar`}
          />
        </div>
        <div className="profile-details">
          <h1 className="title is-3 has-backdrop">{data.username}</h1>
          {data.data.bio && (
            <>
              <br />
              <h2 className="subtitle is-6 has-backdrop">{data.data.bio}</h2>
            </>
          )}
        </div>
      </div>

      <div className="profile-background">
        {data.data.profileBg && (
          <img
            src={data.data.profileBg}
            alt={`${data.username}'s profile background image'`}
          />
        )}
      </div>
    </section>
  )
}

export default ProfileHeader
