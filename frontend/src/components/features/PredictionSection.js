import React, { useCallback, useEffect, useState } from 'react';
import tw from 'twin.macro';
import axios from 'axios';
import styled from 'styled-components';
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import { ReactComponent as SvgDotPattern } from 'images/dot-pattern.svg';
import { WEATHER_API, API_KEY } from '../../constants';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-8 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

export default ({
  subheading = 'Our Track Record',
  heading = (
    <>
      We have been doing this <wbr /> since{' '}
      <span tw="text-primary-500">1999.</span>
    </>
  ),
  description,
  primaryButtonText = 'Learn More',
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  textOnLeft = false,
  onReset,
  data,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${WEATHER_API}/data/2.5/weather?lat=${data?.location?.long}&lon=${data?.location?.lat}&appid=${API_KEY}`
      );

      setWeatherData({
        humidity: response?.data?.main?.humidity,
        temp: `${response?.data?.main?.temp} F°`,
        weather: response?.data?.weather?.[0]?.main,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('Error', error);
    }
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? (
            <Image imageSrc={data?.images?.[0]} css={imageCss} />
          ) : (
            <img src={data?.images?.[0]} css={imageCss} alt="" />
          )}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Statistics>
              <Statistic>
                <Value>{data?.hotel}</Value>
                <Key>Suggested Hotel</Key>
              </Statistic>
              <Statistic>
                <Value>{weatherData?.weather}</Value>
                <Key>Weather</Key>
              </Statistic>
              <Statistic>
                <Value>{weatherData?.temp}</Value>
                <Key>Temperature</Key>
              </Statistic>
              <Statistic>
                <Value>{weatherData?.humidity}%</Value>
                <Key>Humidity</Key>
              </Statistic>
            </Statistics>
            <PrimaryButton onClick={onReset}>
              {isLoading ? (
                <div class="flex justify-center items-center">
                  <div
                    class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                primaryButtonText
              )}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
