import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="VISION"
          desc="To educate young people on their civic/voters and political rights and responsibilities as well as help in institutionalizing a strong democratic culture in Nigeria. "
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="MISSION"
          desc="To ensure that the vote of young people count in any election, and to create a platform where young people freely and actively participate in political activities for credible leadership. "
        />
        
        
      </div>
    </section>
  );
};

export default Features;
