import React from "react";
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import PredictionSection from "components/features/PredictionSection.js";
import InputSection from "components/features/InputSection.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Delicious & Affordable{" "}
            <HighlightedText>Meals Near You.</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://i.pinimg.com/originals/c4/75/d2/c475d2ed22342957d6651a246a14edf6.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Learn More"
        watchVideoButtonText="View Demo"
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Delicious Food",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Safe Travel",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />

      <InputSection
        subheading={<Subheading>Travel Recommender</Subheading>}
        heading={
          <>
            Need To <HighlightedText>Travel ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Suggested Hotel",
            value: "Lanchid 19",
          },
          {
            key: "Weather",
            value: "Cloudy",
          },
          {
            key: "Temperature",
            value: "24°C",
          },
          {
            key: "Humidity",
            value: "86%",
          },
        ]}
        primaryButtonText="Suggest A Location"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />

      <PredictionSection
        subheading={<Subheading>#1 Suggestion</Subheading>}
        heading={
          <>
            Try <HighlightedText>Budapest</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Suggested Hotel",
            value: "Lanchid 19",
          },
          {
            key: "Weather",
            value: "Cloudy",
          },
          {
            key: "Temperature",
            value: "24°C",
          },
          {
            key: "Humidity",
            value: "86%",
          },
        ]}
        primaryButtonText="Search Again"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT5tvZFcymBLkJDvxKLje3o88D0gkyLfN74ms1QAB0sANSZOVy9e31nBJD1hVsK1fSB"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />

      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Reviews.</HighlightedText>
          </>
        }
      />

      <Footer />
    </AnimationRevealPage>
  );
};
