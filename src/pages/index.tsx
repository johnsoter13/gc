import type { NextPage } from 'next'
import GolfCourseForm from '../components/GolfCourseForm'

const Home: NextPage = () => {
  // const {data, isLoading } = trpc.useQuery(["hello", {text: "John"}])
  
  // if (isLoading) return <div>Loading</div>

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* <div>{data?.greeting}</div> */}
      <GolfCourseForm />
    </div>
  )
}

export default Home
