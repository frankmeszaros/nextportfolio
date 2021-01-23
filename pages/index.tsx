import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Layout from "../components/Layout";

const IndexPage = () => {
  const router = useRouter();

  return (
    <Layout title="Frank Meszaros">
      <div className="flex flex-col h-full justify-center text-center font-bold ">
        <p className="w-3/5 mx-auto text-7xl">
          Hello, I&lsquo;m <span className="text-primary">Frank Meszaros.</span>
          <br />
          <br />
        </p>
        <p className="mx-auto w-1/2 text-4xl">
          I&lsquo;m a full-stack software engineer currently working at&nbsp;
          <a href="https://vectrix.io" className="hover:underline text-primary">
            vectrix.io
          </a>
        </p>
        <div className="w-32 flex justify-around my-10 mx-auto text-xl">
          <Button
            round
            content={<FaGithubAlt />}
            primary
            backgroundColor="bg-black"
            onClick={() => router.push("https://github.com/frankmeszaros")}
          />

          <Button
            round
            content={<FaLinkedinIn />}
            primary
            backgroundColor="bg-blue-800"
            onClick={() =>
              router.push("https://linkedin.com/in/frankwmeszaros")
            }
          />
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;
