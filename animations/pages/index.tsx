import type { NextPage } from 'next'
import {Header, Home} from '../components/index'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default HomePage