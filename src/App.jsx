import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(null)
  const [postId, setPostId] = useState(null)


  const Url = "https://jsonplaceholder.typicode.com"

  useEffect(() => {
    fetch(`${Url}/users`).then(res => res.json()).then(data => {
      setUsers(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${Url}/posts?userId=${userId}`).then(res => res.json()).then(data => {
      setPosts(data)
    })
  }, [userId])
  useEffect(() => {
    fetch(`${Url}/comments?postId=${postId}`).then(res => res.json()).then(data => {
      setComments(data)
    })
  }, [postId])


  return (
    <div className='m-10 flex justify-between text-white'>
      <div className='h-[90vh] overflow-y-auto border-[2px] border-black rounded-md w-[32%]'>
        <h2 className='text-center mt-3 mx-5 rounded-md sticky top-0 bg-blue-600 font-bold text-[20px]'>Users</h2>
        <ul className='space-y-3 p-5'>
          {users.map(item => (
            <li key={item.id} className='bg-blue-600 border-[1px] border-black mt-2 p-5 rounded-md'>
              <strong><strong>ID</strong>: {item.id}</strong>
              <h2><strong>Name</strong>: {item.name}</h2>
              <p><strong>Email</strong>: {item.email}</p>
              <p><strong>Phone</strong>: {item.phone}</p>
              <button onClick={() => {
                setUserId(item.id)
                setComments([])
              }} className='bg-blue-700 border-[1px] rounded-lg hover:border-0 p-1 w-full font-bold   border-black hover:bg-transparent'>Show Posts</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-[90vh] overflow-y-auto border-[2px] border-black rounded-md w-[32%]'>
        <h2 className='text-center mt-3 mx-5 rounded-md sticky top-0 bg-blue-600 font-bold text-[20px]'>Posts</h2>
        <ul className='p-5 space-y-3'>
          {posts.map(item => (
            <li key={item.id} className='bg-blue-600 border-[1px] border-black mt-2 p-5 rounded-md'>
              <strong><strong>ID</strong>: {item.id}</strong>
              <div><strong>User ID</strong>: {item.userId}</div>
              <h2><strong>Title</strong>: {item.title}</h2>
              <p><strong>Body</strong>: {item.body}</p>
              <button onClick={() => setPostId(item.id)} className='bg-blue-700 border-[1px] rounded-lg hover:border-0 p-1 w-full font-bold   border-black hover:bg-transparent'>Show Comments</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-[90vh] overflow-y-auto border-[2px] border-black rounded-md w-[32%]'>
        <h2 className='text-center mt-3 mx-5 rounded-md sticky top-0 bg-blue-600 font-bold text-[20px]'>Comments</h2>
        <ul className='p-5 space-y-3'>
          {comments.map(item => (
            <li key={item.id} className='bg-blue-600 border-[1px] border-black mt-2 p-5 rounded-md'>
              <strong><strong>ID</strong>: {item.id}</strong>
              <div><strong>Post ID</strong>: {item.postId}</div>
              <h2><strong>Name</strong>: {item.name}</h2>
              <p><strong>Email</strong>: {item.email}</p>
              <p><strong>Body</strong>: {item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
