import useAuth from "Hooks/useAuth"
import Posts from "Components/Posts"

const Dashboard = () => {
  const { displayName } = useAuth()

  return (
    <section className="section posts">
      <div className="container">
        <h1 className="title is-1">Welcome back {displayName}</h1>
        <Posts />
      </div>
    </section>
  )
}

export default Dashboard
