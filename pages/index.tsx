import type { NextPage } from 'next'
import Counter from '../components/counter/Counter'
import Outputs from '../components/output/Outputs'
import Script from '../components/script/Script'

const Home: NextPage = () => {
  return (
    <section>
        <Script />
        <Counter />
        <Outputs />
    </section>
  )
}

export default Home
