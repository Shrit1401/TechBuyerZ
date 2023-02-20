import { client } from "@/lib/client";
import HomePage from "./HomePage";

export default function Home({ faqs }) {
  return (
    <>
      <main>
        <HomePage faqs={faqs} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "faqs"]';
  const faqs = await client.fetch(query);

  return {
    props: { faqs },
  };
};
