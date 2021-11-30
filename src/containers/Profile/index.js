// pull in url params since we always put just the username at the end of the URL
// check firestore that a collection exists with said username
// get matched user's data
// show default avatar image if avatar data is === ""
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "Lib/firebase"
import { collection, getDocs } from "firebase/firestore"
import avatar from "../../assets/images/avatar_placeholder.png"

const Profile = () => {
  const { user } = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({ username: null, data: null })

  useEffect(() => {
    const getUser = async () => {
      const querySnapshot = await getDocs(collection(db, "users"))
      querySnapshot.forEach((doc) => {
        doc.id === user && setData({ username: doc.id, data: doc.data() })
      })

      setLoading(false)
    }

    getUser()
  }, [])

  console.log(data)

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!data.data) {
    return <h1 className="title is-1">No user exists</h1>
  }

  return (
    <section className="section profile-header">
      <div className="container">
        <div className="profile-image">
          <img
            src={data.data.avatar || avatar}
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

export default Profile
