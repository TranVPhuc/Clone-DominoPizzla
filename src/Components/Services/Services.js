import React from 'react'
import Subnav from './Subnav';
const Services = () => {
  return (
    <div>
      <Subnav />
      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem] ">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">RAZER SERVICES</h1>
          <p className="text-lg text-[#777]">
            Join over millions of users who enjoy using Razer Services to enrich their gaming experience
          </p>
          <p className="text-lg text-[#777]">
            Razer Gold and Silver offers users the competitive advantage in any battlefield. Use Gold PINs to purchase
            from our ever-expanding list of games in the Gold Webshop. Protect your gear with RazerCare and use Razer ID
            to access all the best services Razer has to offer.
          </p>
          <p className="text-lg text-[#777]">Unlock your ultimate gaming potential with Razer Services now..</p>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/services-main-img/bannerimg1.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] ">
          <h1 className="text-white font-light">RAZER GOLD</h1>
          <p className="text-[#777] text-lg text-center w-[60%]">
            Razer Gold is the unified virtual credits for gamers worldwide, available in over 42,000 games and
            entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for your
            buck—including getting rewarded with Razer Silver and exclusive game deals.
          </p>
          <p className="text-[#777] text-lg">
            Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the
            world.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/services-main-img/bannerimg2.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] ">
          <h1 className="text-white font-light">RAZER SILVER</h1>
          <p className="text-[#777] text-lg text-center w-[60%]">
            Razer Silver is the only loyalty rewards program for gamers.
          </p>
          <p className="text-[#777] text-lg text-center w-[60%]">
            Earn Razer Silver simply by using Razer Gold to make your game purchases or participating in our software
            and services. Utilize your Razer Silver in exclusive events or use them to redeem exciting rewards—from
            Razer hardware to digital rewards and discounts.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/services-main-img/bannerimg3.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[17%]">
          <h1 className="text-white font-light">GOLD PINS</h1>
          <p className="text-[#777] text-lg text-center w-[60%]">
            Gold PINs are a digital code used to reload Razer Gold wallets or top up participating game credits.
          </p>
          <p className="text-[#777] text-lg text-center w-[75%]">
            Gold PINs can be purchased at over 5.6 million touchpoints globally, including convenience stores, consumer
            electronics chains, and department stores.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/services-main-img/bannerimg4.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[13%]">
          <h1 className="text-white font-light">GOLD WEBSHOP</h1>
          <p className="text-[#777] text-lg text-center w-[60%]">
            Browse over 42,000 games and entertainment titles in the Gold Webshop.
          </p>
          <p className="text-[#777] text-lg text-center w-[75%]">
            Recharge on the hottest titles such as PUBG Mobile, Mobile Legends: Bang Bang, Genshin Impact, and many
            more! Check out our Gold Webshop for the full list of titles.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/services-main-img/bannerimg5.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] ">
          <h1 className="text-white font-light">RAZER GIFT CARD - GIVE THE GIFT OF GAMING</h1>
          <p className="text-[#777] text-lg text-center w-[60%]">
            The Razer Gift Card unlocks the ultimate gifts for any gamer. From gaming peripherals to laptops to apparel,
            redeem from the largest catalog of Razer gear in the world, including rare and exclusive products only found
            on Razer.com. Recipients also enjoy 14-day risk free returns, and comprehensive customer support.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/services-main-img/bannerimg6.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[18%]">
          <h1 className="text-white font-light">RAZERCARE</h1>
          <p className="text-[#777] text-lg text-center w-[60%] ">
            Protect your Razer gear with RazerCare—includes extended warranty that covers both mechanical and electrical
            issues due to normal product usage.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/services-main-img/bannerimg7.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] ">
          <h1 className="text-white font-light">RAZER ID</h1>
          <p className="text-[#777] text-lg text-center w-[60%]">
            Gain a competitive advantage and leverage on our support, expertise and community with your Razer ID.
            Integrated with Razer's services and software, you can gain access to tons of tools with your Razer
            ID—including buying the best gamer gear on our site, redeeming Razer Silver, saving your personalized
            configs in Synapse, and more.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services