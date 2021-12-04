import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "Lib/firebase"
import PostPreviewSkeleton from "Components/Skeletons/PostPreviewSkeleton"

const Posts = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      let postsArray = []
      const querySnapshot = await getDocs(collection(db, "posts"))
      querySnapshot.forEach((post) => {
        postsArray.push({
          id: post.id,
          data: post.data(),
        })
      })

      setPosts(postsArray)
      setLoading(false)
    }

    getPosts()
  }, [])

  if (loading)
    return (
      <section className="section posts">
        <div className="container">
          <h1 className="title is-1 skeleton"></h1>
          <div className="posts-list">
            <PostPreviewSkeleton num={3} />
          </div>
        </div>
      </section>
    )

  if (!posts) return <div className="no-posts">No posts to show</div>

  const renderPosts = posts.map(({ id, data }) => {
    return (
      <article className="post-preview" key={id}>
        <header className="post-header">
          <h2 className="title is-3">{data.content.title}</h2>
          <div className="tags">
            {data.tags.map((tag, index) => (
              <Link
                className="tag is-dark"
                to={`/tag/${tag}`}
                key={`${id}-${index}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>
        <p className="post-excerpt">{data.content.excerpt}</p>
        <footer className="post-footer">
          Posted by <Link to={`/user/${data.author}`}>{data.author}</Link> |{" "}
          <Link to={`/posts/${data.author}/${data.slug}`}>View Post</Link>
        </footer>
      </article>
    )
  })

  return <div className="posts-list">{renderPosts}</div>
}

export default Posts
