import Link from "next/link";
import { wrapper } from "../components/redux/store";
import { txtAction } from "../components/redux/outputSlice";
import Counter from "../components/counter/Counter";
import Outputs from "../components/output/Outputs";

import { GetServerSideProps } from "next";

interface IdType {
  id: string;
}

interface QueryType extends GetServerSideProps {
  query: { id: string };
}

const Fake = ({ id }: IdType) => {
  return (
    <div>
      <h2>The id is: {id}</h2>
      <Counter />
      <Outputs />

      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default Fake;

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any => ({ query }: QueryType) => {
    const { id } = query;

    store.dispatch(txtAction("Fake page"));

    return {
      props: {
        id,
      },
    };
  }
);
