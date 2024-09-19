"use client";
import Image from "next/image";
import React, { useState } from "react";
import advancedDashboardImg from "../../../public/dashboard.png";
import advancedDashboardImgOne from "../../../public/payment.jpg";
import advancedDashboardImgTwo from "../../../public/multi.jpg";
import advancedDashboardImgThree from "../../../public/affiliate.jpg";
import advancedDashboardImgFour from "../../../public/export.jpg";
import advancedDashboardImgFive from "../../../public/platform.jpg";
import advancedDashboardImgSix from "../../../public/dashboard.png";
import advancedDashboardImgSeven from "../../../public/payment.jpg";
import advancedDashboardImgEight from "../../../public/multi.jpg";
import advancedDashboardImgNine from "../../../public/affiliate.jpg";
import advancedDashboardImgTen from "../../../public/export.jpg";
import advancedDashboardImgEleven from "../../../public/platform.jpg";
import MarketButton from "../marketButton";
import AiButton from "../aiButton";

export default function SecctionSeven() {
  const [activeTab, setActiveTab] = useState("locker");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="  max-w-7xl mx-auto flex flex-col    ">
      <div className="mx-auto text-center ">
        <AiButton title="Unleash the Power of AI" />
        <h2 className="text-4xl text-center font-bold mt-5 mb-5">
          Versx Tools. 
        </h2>
        <p className="text-vbgbtnBrow text-md text-center mx-auto">
          Glide gives you the powers of a developer and a code — for designer to
          create remarkable tools that solve your most challenging business
          problems.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col   items-center py-10">
        {/* Left - Image */}
        <div className="grid grid-cols-1  md:grid-cols-2 mx-auto ">
          <div className="   mx-auto inline-flex">
            {activeTab === "locker" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImg}
                alt="locker"
              />
            )}
            {activeTab === "bridge" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgOne}
                alt="bridge"
              />
            )}
            {activeTab === "solana" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgTwo}
                alt="solana"
              />
            )}
            {activeTab === "voting" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgThree}
                alt="voting"
              />
            )}
            {activeTab === "nft" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgFour}
                alt="nft"
              />
            )}
            {activeTab === "exchange" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgFive}
                alt="exchange"
              />
            )}
            {activeTab === "wallet" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgSix}
                alt="wallet"
              />
            )}
            {activeTab === "swap" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgSeven}
                alt="swap"
              />
            )}
            {activeTab === "launchpad" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgEight}
                alt="launchpad"
              />
            )}
            {activeTab === "staking" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgNine}
                alt="staking"
              />
            )}
            {activeTab === "daily" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgTen}
                alt="daily"
              />
            )}
            {activeTab === "lottery" && (
              <Image
                className="rounded-3xl transition-transform transform hover:scale-105"
                src={advancedDashboardImgEleven}
                alt="lottery"
              />
            )}
          </div>

          {/* Right - Text Content */}
          <div className="px-4 md:px-10 text-gray-100 flex justify-center items-center  mt-5 md:mt-0 ">
            {activeTab === "locker" && (
              <div>
                <h3 className="text-2xl font-semibold">Locker</h3>
                <p className="mt-4 text-vtabcolor">
                  Track a wide range of data points, including user traffic and
                  sales.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "bridge" && (
              <div>
                <h3 className="text-2xl font-semibold">CrossChain Bridge</h3>
                <p className="mt-4 text-vtabcolor">
                  Integrate multiple payment gateways for seamless transactions.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "solana" && (
              <div>
                <h3 className="text-2xl font-semibold">Solana Swap</h3>
                <p className="mt-4 text-vtabcolor">
                  Reach a global audience with multilingual support for your
                  product.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "voting" && (
              <div>
                <h3 className="text-2xl font-semibold">Voting</h3>
                <p className="mt-4 text-vtabcolor">
                  Leverage affiliate systems to increase your reach and sales.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "nft" && (
              <div>
                <h3 className="text-2xl font-semibold">Nfts</h3>
                <p className="mt-4 text-vtabcolor">
                  Leverage affiliate systems to increase your reach and sales.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "exchange" && (
              <div>
                <h2 className="text-2xl font-semibold">Exchange</h2>
                <p className="mt-4 text-vtabcolor">
                  Leverage affiliate systems to increase your reach and sales.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "wallet" && (
              <div>
                <h3 className="text-2xl font-semibold">
                  Multi Currency Wallet
                </h3>
                <p className="mt-4 text-vtabcolor">
                  Track a wide range of data points, including user traffic and
                  sales.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "swap" && (
              <div>
                <h3 className="text-2xl font-semibold">MultiChain Swap</h3>
                <p className="mt-4 text-vtabcolor">
                  Integrate multiple payment gateways for seamless transactions.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "launchpad" && (
              <div>
                <h3 className="text-2xl font-semibold">MultiChain Launchpad</h3>
                <p className="mt-4 text-vtabcolor">
                  Reach a global audience with multilingual support for your
                  product.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "staking" && (
              <div>
                <h3 className="text-2xl font-semibold">MultiChain Staking</h3>
                <p className="mt-4 text-vtabcolor">
                  Leverage affiliate systems to increase your reach and sales.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "daily" && (
              <div>
                <h3 className="text-2xl font-semibold">Daily Staking</h3>
                <p className="mt-4 text-vtabcolor">
                  Leverage affiliate systems to increase your reach and sales.
                </p>
                <MarketButton />
              </div>
            )}
            {activeTab === "lottery" && (
              <div>
                <h3 className="text-2xl font-semibold">Lottery</h3>
                <p className="mt-4 text-vtabcolor">
                  Leverage affiliate systems to increase your reach and sales.
                </p>
                <MarketButton />
              </div>
            )}
          </div>
        </div>
        {/* Tabs - Navigation */}
        <div className="md:flex md:flex-row lg:flex lg:flex-col gap-3 mt-5 mb-5">
          <div className="  mb-5 flex flex-col md:flex md:flex-col lg:flex lg:flex-row md:gap-6 lg:gap-9 border border-1 border-vbgbtnBrown p-5 md:p-10 lg:p-3 rounded-lg md:rounded-lg lg:rounded-full">
            <button
              onClick={() => handleTabClick("locker")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "locker"
                    ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Locker
            </button>
            <button
              onClick={() => handleTabClick("bridge")}
              className={` px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "bridge"
                ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Bridge
            </button>
            <button
              onClick={() => handleTabClick("solana")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "solana"
                    ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Solana
            </button>
            <button
              onClick={() => handleTabClick("voting")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "voting"
                    ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Voting
            </button>
            <button
              onClick={() => handleTabClick("nft")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "nft"
                    ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Nfts
            </button>
            <button
              onClick={() => handleTabClick("exchange")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "exchange"
                   ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Exchange
            </button>
          </div>
          <div className="  mb-5 flex flex-col md:flex md:flex-col lg:flex lg:flex-row md:gap-6 lg:gap-9 border border-1 border-vbgbtnBrown p-5 md:p-10 lg:p-3 rounded-lg md:rounded-lg lg:rounded-full">
            <button
              onClick={() => handleTabClick("wallet")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "wallet"
                    ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Wallet
            </button>
            <button
              onClick={() => handleTabClick("swap")}
              className={` px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "swap"
                     ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Swap
            </button>
            <button
              onClick={() => handleTabClick("launchpad")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "launchpad"
                   ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Launchpad
            </button>
            <button
              onClick={() => handleTabClick("staking")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "staking"
                 ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Staking
            </button>
            <button
              onClick={() => handleTabClick("daily")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "daily"
                   ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Daily Staking
            </button>
            <button
              onClick={() => handleTabClick("lottery")}
              className={`  px-10 py-3 text-center transition-transform transform hover:scale-105 ${
                activeTab === "lottery"
                     ? "tab-btn "
                : "tab-hover "
              } transition`}
            >
              Lottery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
