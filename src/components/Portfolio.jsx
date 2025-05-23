import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((item) => (
                    <PortfolioItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                        stack={item.stack}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;