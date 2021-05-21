import { FaLinkedinIn, FaGithubAlt, FaMediumM } from "react-icons/fa";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Layout from "../components/Layout";

const IndexPage = () => {
  const router = useRouter();

  return (
    <Layout title="Frank Meszaros">
      <div className="flex flex-col h-full justify-center text-center font-bold overflow-auto space-y-4">
        <p className="w-3/5 mx-auto text-4xl md:text-5xl lg:text-6xl">
          Hello, I&lsquo;m <span className="text-primary">Frank Meszaros.</span>
        </p>

        <p className="mx-auto w-1/2 text-2xl md:text-3xl lg:text-4xl">
          I&lsquo;m a full-stack software engineer currently working at&nbsp;
          <a href="https://vectrix.io" className="hover:underline text-primary">
            vectrix.io
          </a>
        </p>
        <p>
          Sometimes I{" "}
          <a
            href="https://frankmeszaros.medium.com"
            className="hover:underline text-primary"
          >
            write stuff too
          </a>
        </p>
        <div className="flex justify-around mx-auto text-xl space-x-4">
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

          <Button
            round
            content={<FaMediumM />}
            primary
            backgroundColor="bg-black"
            onClick={() => router.push("https://frankmeszaros.medium.com")}
          />
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;
