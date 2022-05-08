import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import Shader from "../components/shader";

const R3F = () => {
  return (
    <>
      <Shader />
    </>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Irvan&apos;s Lair Portal</title>
      </Head>
      <main className="md:grid md:grid-rows-1 md:grid-cols-2 p-4 md:h-full topo">
        <Canvas className="bg-[#2e3440] hidden md:block rounded-2xl border border-[#3B4252]">
          <R3F />
        </Canvas>
        <div className="flex flex-col justify-center items-center text-[#E5E9F0] md:px-20 px-2 text-center">
          <p className="font-bold text-xl md:text-3xl m-0 mt-8 md:mt-0">
            Hi, I&apos;m{" "}
            <span className="text-[#88c0d0]">Irvan Malik Azantha</span>!
          </p>
          <p className="m-0 text-xs md:text-sm">
            (My Telegram&apos;s nickname is &quot;Lappland&quot; tho.)
          </p>
          <p className="w-full border text-sm md:text-base border-[#3B4252] bg-[#2e3440] rounded-md px-4 py-3 mt-4 text-left">
            Hello, my name&apos;s Irvan Malik Azantha. I&apos;m a 19 y&apos;o
            boy currently studying on Universitas Sriwijaya. I live in
            Palembang, Indonesia. I&apos;m a highly enthusiastic person with
            subtle interest in open source projects and keen on learning new
            things.
          </p>
          <p className="font-bold text-xl md:text-2xl m-0 mt-4">Useful Links</p>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 my-4">
            <a
              href="https://irvanma.me"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Blog
            </a>
            <a
              href="https://github.com/irvanmalik48"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/irvanmalik48"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://www.instagram.com/irvann48_"
              className="block w-full px-4 py-3 border bg-[#292e39] border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/irvanmalik48"
              className="block w-full px-4 py-3 border bg-[#292e39] border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Twitter
            </a>
            <a
              href="https://t.me/irvanmalik48"
              className="block w-full px-4 py-3 border bg-[#292e39] border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Telegram Portal
            </a>
            <a
              href="mailto:irvanma@gnuweeb.org"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Organization Email
            </a>
            <a
              href="mailto:me@irvanma.me"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#88c0d0] bg-transparent rounded-md text-xs md:text-base hover:bg-[#88c0d0] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Personal Email
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
