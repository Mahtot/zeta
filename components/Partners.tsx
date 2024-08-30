"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

const Partners: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const partners = [
    {
      href: "/ecosystem/partner/moonpay",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b786bc1d8751ff2d6f6d5b_moonpay.svg",
      name: "MoonPay",
      description: "Your gateway to Web3",
    },
    {
      href: "/ecosystem/partner/ngrave",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/668d4359f68e0884a9382d5a_NGRAVE___Logo_Mark___White_BG.webp",
      name: "NGRAVE",
      description:
        "Provider of a user-friendly, end-to-end solution for secure management of digital assets.",
    },
    {
      href: "/ecosystem/partner/indacoin",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b78768845fb7531595f83c_INDACOIN.22f2245a%201.svg",
      name: "Indacoin",
      description:
        "Coinmerce is a European cryptocurrency trading platform focused on simplicity.",
    },
    {
      href: "/ecosystem/partner/crypto-com",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b786dd59c080e11eb455ce_cryptocom-logo.svg",
      name: "Crypto.com",
      description:
        "Crypto.com is a prominent cryptocurrency exchange with support for a range of crypto assets & Europe’s Premier Crypto Trading Platform.",
    },
    {
      href: "/ecosystem/partner/cryptocoin-pro",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b7870b309444e158a41048_cryptocoinpro.svg",
      name: "Cryptocoin.pro",
      description:
        "Specializes in selling and buying Bitcoins and other cryptocurrencies.",
    },
    {
      href: "/ecosystem/partner/google-cloud-4d4e0",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c47db264a75de457b5_logo_googleCloud.png",
      name: "Google Cloud",
      description:
        "Build with the cloud platform designed for developers and AI.",
    },
    {
      href: "/ecosystem/partner/bitfinex",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cb5525915bb0cbfd8e_Bitfinex.webp",
      name: "Bitfinex",
      description:
        "Bitfinex is the longest-running and most liquid major cryptocurrency exchange.",
    },
    {
      href: "/ecosystem/partner/demiourgos-holdings",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c43061e1aff334cbe8_1_Demiourgos_Holdings_logo_transparent_white.webp",
      name: "Demiourgos Holdings",
      description:
        "We are a Web 3.0 Entertainment Company with the main goal of funding, financing, and helping Artists and Creators.",
    },
    {
      href: "/ecosystem/partner/razor-network",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cf8518a835a658cbf2_logo3.f27263e.svg",
      name: "Razor Network",
      description: "Decentralized oracle provider.",
    },
    {
      href: "/ecosystem/partner/ledger",
      logo: "../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/668d30df032e43e830a30b72_Ledger-logo-long%20white.svg",
      name: "Ledger",
      description: "The smartest way to secure your crypto.",
    },
  ];

  return (
    <div className="slider-main_component ">
      <div className="slider-main_top-wrapper ">
        <h2 className="h_26">Featured Partners</h2>
        <div>
          <div className="slider-main_button-wrapper ">
            <button
              aria-label="Slide previous card"
              className="slider-main_button swiper-prev w-inline-block"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <div className="icon_20 w-embed">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.28125 9.3125L11.2812 4.3125C11.6562 3.90625 12.3125 3.90625 12.6875 4.3125C13.0938 4.6875 13.0938 5.34375 12.6875 5.71875L8.40625 10L12.6875 14.3125C13.0938 14.6875 13.0938 15.3438 12.6875 15.7188C12.3125 16.125 11.6562 16.125 11.2812 15.7188L6.28125 10.7188C5.875 10.3438 5.875 9.6875 6.28125 9.3125Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
            <button
              aria-label="Slide next card"
              className="slider-main_button swiper-next w-inline-block"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <div className="icon_20 w-embed">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6875 9.3125C14.0938 9.6875 14.0938 10.3438 13.6875 10.7188L8.6875 15.7188C8.3125 16.125 7.65625 16.125 7.28125 15.7188C6.875 15.3438 6.875 14.6875 7.28125 14.3125L11.5625 10L7.28125 5.71875C6.875 5.34375 6.875 4.6875 7.28125 4.3125C7.65625 3.90625 8.3125 3.90625 8.6875 4.3125L13.6875 9.3125Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
            <a
              href="/ecosystem/partners"
              className="btn neutral-wide w-inline-block"
            >
              <div color-mode="light" className="btn_bg"></div>
              <div className="p_14">View All</div>
            </a>
          </div>
        </div>
      </div>
      <div className="spacer_32"></div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation
        className="swiper is-slider-main w-dyn-list   "
      >
        <div className="swiper is-slider-main w-dyn-list ">
          <div
            role="list"
            className="swiper-wrapper is-slider-main w-dyn-items "
          >
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                role="list"
                className="swiper-slide is-slider-partner w-dyn-item "
              >
                {/* <div
                  role="listitem"
                  className="swiper-slide is-slider-partner w-dyn-item"
                > */}
                <a href={partner.href} className="partner_link w-inline-block">
                  <div className="partner_logo-wrap">
                    <img
                      loading="lazy"
                      alt={partner.name}
                      src={partner.logo}
                      className="partner_logo"
                    />
                  </div>
                  <div className="partner_content">
                    <h3 className="p_16">{partner.name}</h3>
                    <div line-clamp="1" className=" p_14 text_neutral-500">
                      {partner.description}
                    </div>
                  </div>
                </a>
                {/* </div> */}
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
      <div className="spacer_40"></div>
    </div>
  );
};

export default Partners;
