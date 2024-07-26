import React from "react";
import RealismButton from "./realism-button";
import { ConnectBtn } from "./realism-connectbtn";

const JatCoinOverview: React.FC = () => {
    return (
        <section className="bg-neutral-950 pt-12 sm:pt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mx-auto mb-4 max-w-4xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-300 via-red-800  to-blue-700 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">

                        JatCoin: Decentralized Stablecoin
                    </p>
                    <h1 className="font-inter mx-auto max-w-2xl px-6 text-lg text-gray-300">
                        JatCoin is a decentralized, over-collateralized stablecoin native to the Jatique protocol.
                        Governed by the Jatique DAO, it offers transparency, reliability, and community-driven management
                        within the DeFi ecosystem.
                    </h1>
                    <div className="mt-9 px-8 sm:flex sm:items-start sm:justify-center sm:space-x-5 sm:px-0">
                        <ConnectBtn />
                    </div>
                </div>
            </div>
            <div className="bg-neutral-950">
                <div className="relative mx-auto mt-4 md:mt-8">
                    <div className="lg:mx-auto lg:max-w-4xl">
                        <img
                            className="px-4 md:px-8"
                            src=""
                            alt="JatCoin Stablecoin"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JatCoinOverview;
