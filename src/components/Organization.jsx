import React from "react";
import { Link } from "react-router-dom";
const Organization = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold text-gray-800">
          RecyGlo, Myanmar's first circular economy waste management system,
          targets regional growth
        </h1>
        <div className="mx-auto p-4">
          <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            Myanmar's first trash collection and recycling service Recyclo is
            expanding across Southeast Asia with an innovative circular economy
            solution. In the space of just over a year, the Yangon-based startup
            has introduced a marketplace for unwanted items and a showroom for
            furniture made from recycled waste materials. It’s also launching
            blockchain-enabled traceability and predictive waste management
            next.
            <br />
            <br />
            Founded in 2017, RecyGlo arrives at a critical time in Myanmar's
            development. Closed for decades to the rest of the world until the
            country’s reopening in 2011, Myanmar’s economy has boomed in recent
            years. But its new prosperity has also given rise to environmental
            concerns that, while usually muted, are increasingly worrying the
            younger generation.
            <br />
            <br />
            Shwe Yamin Oo, RecyGlo CEO and co-founder, is one of them. Garbage
            piled on the streets and the hygiene and health issues they cause
            were foremost on her mind when she co-founded RecyGlo with data
            analyst Okka Phyo Maung and engineer Soe Moe Aung. In Yangon, about
            half the trash is regularly collected. As one of Asia's poorest
            nations, Myanmar, with a population of 54 million, also didn’t have
            a recycling service.
            <br />
            <br />
            “Good health is not guaranteed in our country because people tend to
            heap their garbage at the top of the street or road,” Shwe Yamin Oo
            told media. “Foul-smelling gases and fluids come out of such garbage
            dumps. The fluids run into the ditches and we eat the fish from
            these polluted ditches and streams." <br />
            <br />
            No one was solving the waste problem “with the necessary scale and
            impact,” she said. RecyGlo works to tackle urban contamination and
            pollution of waterways at the source, via a zero-waste management
            system serving corporates and, increasingly, households.
            <br />
            <br />
            Current corporate clients include Toshiba, foreign embassies, and
            major hotels like The Savoy. Besides Yangon, RecyGlo also manages
            operations in the capital city of Nay Pyi Taw, Myanmar’s second
            biggest city Mandalay, and popular tourist destination Bagan. The
            startup estimates that Myanmar has a waste management market worth
            $1.3 billion annually and has also expanded to Malaysia and
            Singapore.
          </p>
          <div className="text-2xl  btn btn-outline justify-end m-2 w-full">
            <Link
              to={
                "https://www.compasslist.com/insights/recyglo-myanmars-first-circular-economy-waste-management-system-targets-regional-growth"
              }
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
