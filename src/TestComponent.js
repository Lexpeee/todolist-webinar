import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const TestComponent = () =>{
  const { pollId } = useParams()
  
  useEffect(()=>{
    console.log(pollId)
  }, [pollId])


  return(
    <div>
      <Link to="/home">
        Link to home
      </Link><br/>
      test with poll id<br/>
      {pollId}
    </div>
  )
}

export default TestComponent