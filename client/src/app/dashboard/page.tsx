"use client"

import CardExpenseSummary from "./CardExpenseSummary"
import CardPopularProducts from "./CardPopularProducts"
import CardPurchaseSummary from "./CardPurchaseSummary"
import CardSalesSummary from "./CardSalesSummary"

function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
            <CardPopularProducts />
            <CardSalesSummary />
            <CardPurchaseSummary />
            <CardExpenseSummary />
            <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
            <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
            <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
        </div>
    )
}

export default Dashboard