import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'

import SubmitGolfCourse from '../components/SubmitGolfCourse'

const Home: NextPage = () => {
  const {data, isLoading } = trpc.useQuery(["hello", {text: "John"}])
  
  if (isLoading) return <div>Loading</div>

  return (
    <div className="h-screen w-screen flex">
      <div>{data?.greeting}</div>
      <SubmitGolfCourse />
    </div>
  )
}

export default Home
