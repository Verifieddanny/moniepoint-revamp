"use client";

import React from "react";
import { CoinLeft, MoneyLeft } from "../illustrations/coin-left";
import { CoinRight, MoneyRight } from "../illustrations/coin-right";

export default function CoinMoney() {
    return (
        <section
            className="
        w-full relative mx-auto md:py-[5rem] py-[2.5rem] overflow-x-clip overflow-y-visible isolate contain-layout"
            aria-hidden="true"
        >
            <CoinLeft />
            <MoneyLeft />
            <CoinRight />
            <MoneyRight />
        </section>
    );
}
