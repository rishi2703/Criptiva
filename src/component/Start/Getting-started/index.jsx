import { FaArrowLeft, FaArrowRight, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GettingStarted = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="mx-10 p-12">
        <div className="text-4xl font-Semibold mb-6">
          Getting started with Criptiva
        </div>
        <div className="flex justify-center items-center">
          <img src="/Images/criptiva coin.png" alt="" />
        </div>
        <div>
          <div id="what-is-criptiva" className="mb-10 scroll-mt-24">
            <div className="text-4xl font-semibold mb-4">What is Criptiva?</div>
            <div className="text-lg font-bold  mb-4">
              Public blockchains like Ethereum are the next evolution of
              Internet databases, and Criptiva is the next evolution of the
              browser.
            </div>
            <div className="text-lg  text-gray-700">
              Criptiva is a web browser extension and mobile app that allows you
              to manage your Ethereum and Solana private keys. By doing so, it
              serves as a wallet client for Ether and other tokens, and allows
              you to interact with decentralized applications, or dapps. Unlike
              some wallet clients,Criptiva keeps no information on you: not your
              email address, not your password, and not your Secret Recovery
              Phrase or other private keys. You retain all power over your
              crypto-identity.
            </div>
          </div>
          <div id="fund-wallet" className="mb-10 scroll-mt-24">
            <div className="text-2xl font-semibold mb-2"> Fund your wallet</div>
            <div className="text-lg text-gray-700">
              Adding some tokens to your wallet allows you to fully engage in
              web3. After creating your wallet, you'll see a prompt in the
              Criptiva extension to fund your wallet.
              <br />
              <br />
              From there, you can buy crypto with a debit or credit card,
              receive crypto from another account, or transfer crypto from a
              CEX. Select the option you'd like to start with; you can always
              use a different method later.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="flex justify-center items-center">
            <div
              className="border-1 rounded-full  w-6 h-6 p-1 flex items-center"
              onClick={() => navigate("/")}
            >
              <FaArrowLeft size={12} />
            </div>
            <div className="ml-2">
              <div>Previous</div>
              <div>start</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="mr-2">
              <div>Next</div>
              <div>Create Wallet</div>
            </div>
            <div className="border-1 rounded-full w-6 h-6 p-1 flex items-center">
              <FaArrowRight size={12} />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl">Was This HelpFull</div>
            <div className=" flex"><div className="bg-pink-200 rounded-full p-2"><FaRegThumbsUp size={42} /></div><div className="bg-orange-300 rounded-full p-2"> <FaRegThumbsDown size={42}/> </div></div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="w-72 h-42 border-l-8 border-purple-400 p-4 sticky top-0">
          <div className="font-bold text-lg mb-4">Getting Started</div>
          <ul className="space-y-2">
            <li>
              <a
                href="#what-is-criptiva"
                className="text-gray-800 hover:underline"
              >
                What is Criptiva?
              </a>
            </li>
            <li>
              <a href="#fund-wallet" className="text-gray-800 hover:underline">
                Fund your wallet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
