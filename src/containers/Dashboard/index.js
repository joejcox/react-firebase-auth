import useAuth from "Hooks/useAuth"

const Dashboard = () => {
  const { displayName } = useAuth()

  return (
    <>
      <h1 className="title is-1">Welcome back {displayName}</h1>
    </>
  )
}

export default Dashboard
