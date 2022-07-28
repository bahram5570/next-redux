import type { NextPage } from "next";
import Counter from "../components/counter/Counter";
import Outputs from "../components/output/Outputs";
import Script from "../components/script/Script";
import { wrapper } from "../components/redux/store";
import { txtAction } from "../components/redux/outputSlice";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Script />
      <Counter />
      <Outputs />
      
      <Link href="/fake?id=12345">
        <a>Link</a>
      </Link>
    </>
  );
};

export default Home;

export const getStaticProps = wrapper.getStaticProps(
  (store): any => async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await request.json();

    store.dispatch(txtAction(data[1].name));
  }
);
