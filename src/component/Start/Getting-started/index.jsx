const GettingStarted = () => {
  return (
    <div className="flex">
      <div className="mx-8 p-6  flex-1">
        <div className="text-[54px] font-bold mb-6">
          Getting started with Criptiva
        </div>
        <div>
          <div id="what-is-criptiva" className="mb-10 scroll-mt-24">
            <div className="text-2xl font-semibold mb-2">What is Criptiva?</div>
            <div className="text-lg font-bold  mb-2">
              Public blockchains like Ethereum are the next evolution of
              Internet databases, and Criptiva is the next evolution of the
              browser.
            </div>
            <div className="text-base text-gray-700">
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
            <div className="text-base text-gray-700">
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
      </div>
      <div className="lg:block hidden">
        <div className="w-42 h-42 border-l-8 border-purple-400 p-4 sticky top-0">
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
