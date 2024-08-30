"use client";

import { nunito, pt_sans } from "@/app/fonts";
import { FaRegGem } from "react-icons/fa"; // Star icon
import aboutImg from "@/public/about.png";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main class="main-wrapper">
      <img
        src="../cdn.multiversx.com/webflow/Hero%20section%20background.webp"
        loading="eager"
        class="section_img-overflow"
      />
      <section class="inner-wrapper bg_dark">
        <div class="hero_bg-gradient"></div>
        <div>
          <div class="container_bg z-0">
            <img
              src="../cdn.multiversx.com/webflow/Hero%20section%20background.webp"
              loading="eager"
              class="hero_bg-image"
            />
            <img
              src="../cdn.multiversx.com/webflow/Home-Hero-Bg-03.webp"
              loading="eager"
              class="hero_bg-image is-2"
            />
            <img
              src="../cdn.multiversx.com/webflow/Glass%20shield%25404-1080x1080%201.webp"
              loading="eager"
              class="hero_bg-image is-3"
            />
          </div>
          <div class="container z-2">
            <div class="f_vertical-center_t-center">
              <div class="spacer_200 mobile_300"></div>
              <a
                data-w-id="122a7b7b-7a76-5b49-a473-0c09ae6c842a"
                href="/sovereign-chains"
                class="btn outline-green w-inline-block"
              >
                <div
                  color-mode="light"
                  data-w-id="122a7b7b-7a76-5b49-a473-0c09ae6c842b"
                  class="btn_bg bg_outline"
                ></div>
                <div color-mode="light" class="btn_outline-wrap">
                  <div class="btn_new">New</div>
                  <div class="p_14 text_inline text_gradient_new-shine">
                    Introducing Sovereign Chains
                  </div>
                </div>
              </a>
              <div class="spacer_16"></div>
              <h1 class="h_64">The Internet-Scale Blockchain</h1>
              <div class="spacer_24"></div>
              <div class="text_maxch-90">
                <div balance="" class="p_21 text_neutral-500">
                  MultiversX, the EGLD&nbsp;network, is a distributed blockchain
                  network for next-gen applications. Decentralized via 3,000+
                  nodes, scalable through sharding, fast, secure &amp; green.
                </div>
              </div>
              <div class="spacer_40"></div>
              <div class="btn_wrap">
                <a href="/ecosystem" class="btn neutral w-inline-block">
                  <div color-mode="light" class="btn_bg"></div>
                  <div class="p_16">Explore the Ecosystem</div>
                  <div class="icon_20 w-embed">
                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 25.3594L11 22.7812V4.6875L20 7.26562V25.3594ZM21.5 25.2656V7.17188L27.4531 4.78125C28.1562 4.5 29 5.01562 29 5.8125V21.5156C29 21.9844 28.7188 22.4062 28.25 22.5469L21.5 25.2656ZM2.70312 7.5L9.5 4.78125V22.875L3.5 25.2656C2.79688 25.5469 2 25.0312 2 24.2344V8.53125C2 8.0625 2.28125 7.64062 2.70312 7.5Z"
                        fill="#F5F5F5"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="/builders-hub" class="btn teal w-inline-block">
                  <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                  <div class="p_16">Start&nbsp;building</div>
                  <div class="icon_20 w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.3594 14.1562C20.0469 14.3906 18.6406 13.9688 17.6094 12.9844L15.8281 11.1562C15.125 10.4531 14.75 9.51562 14.75 8.53125V7.96875L11 5.90625C10.7656 5.8125 10.5781 5.53125 10.625 5.25C10.625 4.96875 10.7656 4.6875 11.0469 4.59375L13.25 3.60938C14.1406 3.23438 15.0781 3 16.0156 3H16.8594C18.5938 3 20.2344 3.65625 21.5 4.875L23.5625 6.84375C24.6875 7.875 25.1094 9.42188 24.8281 10.875L25.5781 11.5781L25.9531 11.2031C26.375 10.7812 27.0781 10.7812 27.5 11.2031L28.625 12.3281C29.0938 12.7969 29.0938 13.5 28.625 13.9219L24.5 18.0469C24.0781 18.5156 23.375 18.5156 22.9531 18.0469L21.8281 16.9219C21.3594 16.5 21.3594 15.7969 21.8281 15.3281L22.2031 14.9531L21.3594 14.1562ZM3.26562 20.7188L14.1875 11.5781C14.375 11.8125 14.5625 12.0469 14.75 12.2344L16.5312 14.0156C16.8125 14.2969 17.1406 14.5312 17.4688 14.7656L8.28125 25.7344C7.625 26.5312 6.59375 27 5.5625 27C3.59375 27 2 25.4062 2 23.4375C2 22.4062 2.46875 21.375 3.26562 20.7188Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div class="spacer_100"></div>
            </div>
            <div class="nav-transition"></div>
          </div>
        </div>
        <div class="container z-2">
          <div class="bento-grid_12">
            <div
              id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac317-0c8ce33a"
              class="grid_1 mobile_2"
            >
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac318-0c8ce33a"
                class="bento_item ofh"
              >
                <div class="bento-inner_horizontal-right-24">
                  <div class="text_maxch-15 mobile-100">
                    <h2 class="p_16 text_neutral-500">
                      Average Cost per Transaction
                    </h2>
                  </div>
                  <div class="text_align-right">
                    <div class="h_40 mobile_vw">
                      ~$0<span class="op_60">.00</span>
                      <span count="static" class="op_60">
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac322-0c8ce33a"
                class="bento_item"
              >
                <div class="bento-inner_vertical-24">
                  <h2 class="p_16 text_neutral-500">Total Transactions</h2>
                  <div class="text_align-right _100">
                    <div class="h_50 mobile_vw">
                      <span api-data="transaction-count">
                        434,785,336
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="bento_curtain"></div>
              </div>
            </div>
            <div
              id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac329-0c8ce33a"
              class="grid_1"
            >
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac32a-0c8ce33a"
                class="bento_empty"
              ></div>
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac32b-0c8ce33a"
                class="bento_item is--validator"
              >
                <div class="bento-inner_vertical-24">
                  <div class="spacer_50 hide_mobile-l"></div>
                  <h2 class="p_16 text_neutral-500">Validator Nodes</h2>
                  <div class="text_align-right _100">
                    <div api-data="nodes" class="h_56">
                      3,200
                    </div>
                  </div>
                </div>
                <img
                  src="../cdn.multiversx.com/webflow/validator-map.webp"
                  alt="validators world map"
                  loading="eager"
                  class="bento_img-validator"
                />
              </div>
            </div>
            <div
              id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac334-0c8ce33a"
              class="bento_item carbon-free"
            >
              <div class="f_vertical-left relative">
                <h2 class="p_16 text_neutral-500">
                  Efficient. Scalable. Global.
                </h2>
                <div class="spacer_80"></div>
                <div class="h_40">Carbon Neutral</div>
                <div class="spacer_16"></div>
                <a
                  href="https://environment.multiversx.com/"
                  target="_blank"
                  class="btn carbon-free w-inline-block"
                >
                  <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                  <div class="p_14">Sustainability</div>
                  <div class="icon_10 w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <img
                src="../cdn.multiversx.com/webflow/carbon-free_planet.avif"
                alt="validators world map"
                loading="eager"
                class="bento_carbon-free"
              />
              <div class="bento_curtain"></div>
            </div>
          </div>
        </div>
        <div class="container z-2">
          <div class="spacer_32"></div>
          <div class="f_vertical-center_t-center">
            <div class="p_16 op_40">
              Integrations and tools from leading companies around the globe
            </div>
            <div class="spacer_32"></div>
            <div class="w-layout-grid home_partner-wrap">
              <img
                src="../cdn.multiversx.com/webflow/google-cloud-logo.svg"
                alt="Google Cloud"
                loading="lazy"
                class="home-partner_logo"
              />
              <img
                src="../cdn.multiversx.com/webflow/Telekom.svg"
                alt="Telekom"
                loading="lazy"
                class="home-partner_logo"
              />
              <img
                src="../cdn.multiversx.com/webflow/tencent-cloud.svg"
                alt="Tencent Cloud"
                loading="lazy"
                class="home-partner_logo"
              />
              <img
                src="../cdn.multiversx.com/webflow/logo-aws.svg"
                alt="AWS"
                loading="lazy"
                class="home-partner_logo"
              />
              <img
                src="../cdn.multiversx.com/webflow/AXELAR.svg"
                alt="AXELAR"
                loading="lazy"
                class="home-partner_logo"
              />
              <img
                src="../cdn.multiversx.com/webflow/Ledger.svg"
                alt="Ledger"
                loading="lazy"
                class="home-partner_logo"
              />
              <img
                src="../cdn.multiversx.com/webflow/Opera.svg"
                alt="Opera"
                loading="lazy"
                class="home-partner_logo"
              />
            </div>
          </div>
        </div>
        <div class="spacer_60"></div>
      </section>
      <section class="section">
        <div class="container z-2">
          <div class="spacer_100"></div>
          <div class="f_vertical-center_t-center">
            <div class="btn outline-green">
              <div color-mode="light" class="btn_bg bg_outline"></div>
              <div color-mode="light" class="btn_outline-wrap is--label">
                <div class="p_16 op_60 text_gradient_new-shine">Builders</div>
              </div>
            </div>
            <div class="spacer_16"></div>
            <div class="text_maxch-85">
              <h2 class="h_84">Let's make this decision easy for you</h2>
            </div>
            <div class="spacer_16"></div>
            <div class="p_21 text_neutral-500 text_lh-1-5">
              MultiversX provides the infrastructure you need to tackle any use
              case.
            </div>
          </div>
          <div class="spacer_80"></div>
          <div class="bento-grid_12">
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5f95-0c8ce33a"
              data-w-id="840b4d3d-ed02-15c6-d08d-4e62095f5f95"
              class="bento_item is-clipped"
            >
              <div></div>
              <img
                src="../cdn.multiversx.com/webflow/esdt-visual.webp"
                class="bento-home_image-top"
              />
              <div class="f_vertical-center-100 relative">
                <div class="text_align-center">
                  <h3 class="p_24">Native</h3>
                  <h3 class="p_24">Assets</h3>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5f9e-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/glass-shield.webp"
                class="bento-home_image-bottom"
              />
              <div class="f_vertical-center-100 relative">
                <div class="text_align-center">
                  <h3 class="p_24">Safest User Experience</h3>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fa4-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/stacking-transition-visual.webp"
                loading="lazy"
                class="bento-home_image-royalties"
              />
              <div class="bento-inner_horizontal-space-b-24">
                <div class="text_maxch-20">
                  <h3 class="h_40">30% Developer Royalties</h3>
                </div>
                <div class="text_maxch-25">
                  <div class="p_16 text_lh-1-5 text_neutral-400">
                    Developers get 30% of the gas fee every time someone calls
                    their smart contract
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fad-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/state-double.webp"
                class="bento-home_image-double"
              />
              <div></div>
              <div class="f_vertical-left relative">
                <h3 class="p_24">Adaptive  State Sharding</h3>
                <div class="spacer_8"></div>
                <div class="p_16 text_lh-1-5 text_neutral-400">
                  The first to present a viable solution where all three aspects
                  of sharding are live
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fb6-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/state-double.webp"
                class="bento-home_image-double is-2"
              />
              <div></div>
              <div class="text_align-right">
                <div class="f_vertical-right relative">
                  <div class="text_maxch-15">
                    <h3 class="p_24">Secure Proof of Stake</h3>
                  </div>
                  <div class="spacer_8"></div>
                  <div class="p_16 text_lh-1-5 text_neutral-400">
                    Energy-efficient consensus mechanism with provable security
                    guarantees
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fc1-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/wasm.webp"
                loading="lazy"
                class="bento-home_image-wasm"
              />
              <div></div>
              <div class="f_vertical-center-100 relative">
                <div class="text_align-center">
                  <h3 class="p_24">WASM-Based Virtual Machine</h3>
                  <div class="spacer_8"></div>
                  <div class="p_16 text_lh-1-5 text_neutral-400">
                    Write smart contracts in familiar languages, compile, and
                    run them through the fastest VM in the space
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fcb-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/metal-block.webp"
                class="bento-home_image-bottom is-2"
              />
              <div class="f_vertical-left relative _100">
                <div class="text_maxch-15">
                  <h3 class="p_24">Resilient and Battle-Tested</h3>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fd1-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/fast-visual.webp"
                class="bento-home_image-fast"
              />
              <div class="f_vertical-center-100 relative">
                <div class="text_align-center">
                  <h3 class="p_24">Fast</h3>
                  <div class="spacer_8"></div>
                  <div class="p_16 text_lh-1-5 text_neutral-400">
                    263,000 transactions per second max recorded
                  </div>
                </div>
              </div>
            </div>
            <a
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fda-0c8ce33a"
              href="/sovereign-chains"
              class="bento_item is-clipped w-inline-block"
            >
              <img
                src="../cdn.multiversx.com/webflow/sidechains.webp"
                loading="lazy"
                class="bento-home_image-sidechains"
              />
              <div></div>
              <div class="r_vertical-center_center">
                <div class="link-flavor static">
                  <div class="powered-text_inner">
                    <div>Live</div>
                  </div>
                </div>
                <div class="spacer_8"></div>
                <h3 class="h_84">Sovereign Chains</h3>
              </div>
              <div></div>
            </a>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fe6-0c8ce33a"
              class="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/validators-2.webp"
                loading="lazy"
                class="bento_img-validator home"
              />
              <div></div>
              <div class="f_vertical-center-100 relative">
                <div class="text_align-center">
                  <h3 class="p_24">Decentralised</h3>
                  <div class="spacer_8"></div>
                  <div class="p_16 text_lh-1-5 text_neutral-400">
                    3,200+ validator nodes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="spacer_80"></div>
        </div>
      </section>
      <section class="section">
        <div class="container z-2">
          <div class="spacer_80"></div>
          <div slider="project-category" class="slider-main_component">
            <div class="slider-main_top-wrapper">
              <h2 class="h_26">Featured Partners</h2>
              <div>
                <div class="slider-main_button-wrapper">
                  <a
                    aria-label="Slide previous card"
                    href="#"
                    class="slider-main_button swiper-prev w-inline-block"
                  >
                    <div class="icon_20 w-embed">
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
                  </a>
                  <a
                    aria-label="Slide next card"
                    href="#"
                    class="slider-main_button swiper-next w-inline-block"
                  >
                    <div class="icon_20 w-embed">
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
                  </a>
                  <a
                    href="/ecosystem/partners"
                    class="btn neutral-wide w-inline-block"
                  >
                    <div color-mode="light" class="btn_bg"></div>
                    <div class="p_14">View All</div>
                  </a>
                </div>
              </div>
            </div>
            <div class="spacer_32"></div>
            <div class="swiper is-slider-main w-dyn-list">
              <div
                role="list"
                class="swiper-wrapper is-slider-main w-dyn-items"
              >
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/moonpay"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="MoonPay"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b786bc1d8751ff2d6f6d5b_moonpay.svg"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">MoonPay</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        Your gateway to Web3
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/ngrave"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="NGRAVE"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/668d4359f68e0884a9382d5a_NGRAVE___Logo_Mark___White_BG.webp"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">NGRAVE</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        Provider of a user-friendly, end-to-end solution for
                        secure management of digital assets.
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/indacoin"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Indacoin"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b78768845fb7531595f83c_INDACOIN.22f2245a%201.svg"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Indacoin</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        Coinmerce is a European cryptocurrency trading platform
                        focused on simplicity.
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/crypto-com"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Crypto.com"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b786dd59c080e11eb455ce_cryptocom-logo.svg"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Crypto.com</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        Crypto.com is a prominent cryptocurrency exchange with
                        support for a range of crypto assets &amp; Europe’s
                        Premier Crypto Trading Platform
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/cryptocoin-pro"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Cryptocoin.pro"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b7870b309444e158a41048_cryptocoinpro.svg"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Cryptocoin.pro</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        specializes in selling and buying Bitcoins and other
                        cryptocurrencies
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/google-cloud-4d4e0"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Google Cloud"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c47db264a75de457b5_logo_googleCloud.png"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Google Cloud</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        Build with the cloud platform designed for developers
                        and AI
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/bitfinex"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Bitfinex"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cb5525915bb0cbfd8e_Bitfinex.webp"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Bitfinex</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        Bitfinex is the longest-running and most liquid major
                        cryptocurrency exchange.
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/demiourgos-holdings"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Demiourgos Holdings"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c43061e1aff334cbe8_1_Demiourgos_Holdings_logo_transparent_white.webp"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Demiourgos Holdings</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        We are a Web 3.0 Entertainment Company with the main
                        goal of funding, financing, and helping Artists and
                        Creators
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/razor-network"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Razor Network"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652cf8518a835a658cbf2_logo3.f27263e.svg"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Razor Network</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        Decentralized oracle provider
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-partner w-dyn-item"
                >
                  <a
                    href="/ecosystem/partner/ledger"
                    class="partner_link w-inline-block"
                  >
                    <div class="partner_logo-wrap">
                      <img
                        loading="lazy"
                        alt="Ledger"
                        src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/668d30df032e43e830a30b72_Ledger-logo-long%20white.svg"
                        class="partner_logo"
                      />
                    </div>
                    <div class="partner_content">
                      <h3 class="p_16">Ledger</h3>
                      <div line-clamp="1" class="p_14 text_neutral-500">
                        The smartest way to secure your crypto.
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="spacer_40"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container z-2">
          <div class="container_bg z-minus-1">
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section07.webp"
              loading="lazy"
              class="crystal-get is-7"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section06.webp"
              loading="lazy"
              class="crystal-get is-6"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section01.webp"
              loading="lazy"
              class="crystal-get"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section02.webp"
              loading="lazy"
              class="crystal-get is-2"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section03.webp"
              loading="lazy"
              class="crystal-get is-3"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section04.webp"
              loading="lazy"
              class="crystal-get is-4"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section05.webp"
              loading="lazy"
              class="crystal-get is-5"
            />
          </div>
          <div class="spacer_100"></div>
          <div class="spacer_100"></div>
          <div class="f_vertical-center_t-center">
            <div class="btn outline-green">
              <div color-mode="light" class="btn_bg bg_outline"></div>
              <div color-mode="light" class="btn_outline-wrap is--label">
                <div class="p_16 op_60 text_gradient_new-shine">
                  The EGLD&nbsp;Token
                </div>
              </div>
            </div>
            <div class="spacer_24"></div>
            <div class="text_maxch-90">
              <h2 class="h_84">Secured by EGLD</h2>
            </div>
            <div class="spacer_16"></div>
            <div class="text_maxch-50">
              <div class="p_21 text_neutral-500 text_lh-1-5">
                The native eGold token enables access and usage, provides
                security, reinforces growth, and ensures economic alignment for
                all stakeholders.
              </div>
            </div>
            <div class="spacer_32"></div>
            <div class="btn_wrap">
              <a href="/staking" class="btn teal w-inline-block">
                <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                <div class="p_16">Stake EGLD</div>
                <div class="icon_20 w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 1.5C24 6.84375 20.0156 11.25 14.8594 11.9062C14.5312 9.42188 13.4531 7.17188 11.8125 5.39062C13.5938 2.20312 17.0625 0 21 0H22.5C23.2969 0 24 0.703125 24 1.5ZM0 4.5C0 3.70312 0.65625 3 1.5 3H3C8.76562 3 13.5 7.73438 13.5 13.5V15V22.5C13.5 23.3438 12.7969 24 12 24C11.1562 24 10.5 23.3438 10.5 22.5V15C4.6875 15 0 10.3125 0 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="/egld" class="btn neutral w-inline-block">
                <div color-mode="light" class="btn_bg"></div>
                <div class="p_16">What is EGLD?</div>
                <div class="icon_20 w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 25 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.6719 8.79688L17.2969 15.1719C16.8281 15.6406 16.125 15.6406 15.7031 15.1719C15.2344 14.75 15.2344 14.0469 15.7031 13.5781L20.1562 9.125H1.125C0.46875 9.125 0 8.65625 0 8C0 7.39062 0.46875 6.875 1.125 6.875H20.1562L15.7031 2.42188C15.2344 2 15.2344 1.29688 15.7031 0.828125C16.125 0.40625 16.8281 0.40625 17.2969 0.828125L23.6719 7.25C24.0938 7.67188 24.0938 8.375 23.6719 8.79688Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div class="spacer_100"></div>
          <div class="spacer_100"></div>
        </div>
      </section>
      <div class="plus-75">
        <section class="section minus-75">
          <div bg-step="dark" class="container is--step">
            <div class="container_bg">
              <div class="planet_wrap">
                <div
                  data-w-id="b274ae0e-9ff9-63fc-618e-7d98e18b516a"
                  class="planet"
                >
                  <div class="planet_orbit">
                    <img
                      src="../cdn.multiversx.com/webflow/Inner-Orbit.svg"
                      loading="lazy"
                      class="img_square"
                    />
                  </div>
                  <div class="planet_orbit is--anim">
                    <img
                      src="../cdn.multiversx.com/webflow/Outline-Orbit.svg"
                      loading="lazy"
                      class="img_square"
                    />
                  </div>
                  <img
                    src="../cdn.multiversx.com/webflow/Planet.webp"
                    alt="Planet"
                    loading="lazy"
                    class="planet_img"
                  />
                  <img
                    src="../cdn.multiversx.com/webflow/Planet.webp"
                    alt="Planet"
                    loading="lazy"
                    class="planet_img abs"
                  />
                  <div class="planet_gradient-1"></div>
                  <div class="planet_gradient-2"></div>
                </div>
              </div>
            </div>
            <div class="spacer_200"></div>
            <div class="f_vertical-center_t-center">
              <div class="text_maxch-60">
                <h2 class="h_84">Future-Proof in Every Way</h2>
              </div>
              <div class="spacer_24"></div>
              <div class="text_maxch-60">
                <div class="p_21 text_lh-1-5">
                  MultiversX is leading the way towards a more responsible and
                  sustainable infrastructure for all digital things.
                </div>
              </div>
              <div class="spacer_24"></div>
              <a
                href="https://environment.multiversx.com/"
                target="_blank"
                class="btn carbon-free-wide w-inline-block"
              >
                <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                <div class="p_18">Learn about Sustainability</div>
                <div class="icon_24 w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8516 6.62891L8.47656 11.0039C8.14844 11.3594 7.57422 11.3594 7.24609 11.0039C6.89062 10.6758 6.89062 10.1016 7.24609 9.77344L10.1172 6.875H1.75C1.25781 6.875 0.875 6.49219 0.875 6C0.875 5.53516 1.25781 5.125 1.75 5.125H10.1172L7.24609 2.25391C6.89062 1.92578 6.89062 1.35156 7.24609 1.02344C7.57422 0.667969 8.14844 0.667969 8.47656 1.02344L12.8516 5.39844C13.207 5.72656 13.207 6.30078 12.8516 6.62891Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div class="spacer_200"></div>
          </div>
        </section>
      </div>
      <section class="section">
        <div class="container z-2">
          <div class="spacer_200 tablet_half"></div>
          <div class="featured_grid is-text-pushed">
            <div
              id="w-node-ce434816-9f92-4ef3-4287-6160b6e1f45a-0c8ce33a"
              class="featured_img-wrap"
            >
              <img
                src="../cdn.multiversx.com/webflow/ecosystem-visual.webp"
                alt="Logos of Ecosystem projects"
                loading="lazy"
                class="featured_img"
              />
              <div class="show_mobile-l">
                <div class="space_square"></div>
              </div>
            </div>
            <div
              id="w-node-ce434816-9f92-4ef3-4287-6160b6e1f45e-0c8ce33a"
              class="featured_text-wrap"
            >
              <h2 class="h_32">Explore the Ecosystem</h2>
              <div class="spacer_24"></div>
              <p class="p_21 text_neutral-500 text_lh-1-5">
                Decentralized worlds and tokenized economies at internet scale.
              </p>
              <div class="spacer_48"></div>
              <div class="btn_wrap">
                <a href="/ecosystem" class="btn teal w-inline-block">
                  <div color-mode="light" class="btn_bg"></div>
                  <div class="p_16">Explore the Ecosystem</div>
                  <div class="icon_14 w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.125 10.8438L12.875 18.7188C12.4062 19.1406 11.7031 19.1406 11.2812 18.6719C10.8594 18.2031 10.8594 17.5 11.3281 17.0781L17.5625 11.125H1.625C0.96875 11.125 0.5 10.6562 0.5 10C0.5 9.39062 0.96875 8.875 1.625 8.875H17.5625L11.3281 2.96875C10.8594 2.54688 10.8594 1.79688 11.2812 1.375C11.7031 0.90625 12.4531 0.90625 12.875 1.32812L21.125 9.20312C21.3594 9.4375 21.5 9.71875 21.5 10C21.5 10.3281 21.3594 10.6094 21.125 10.8438Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="spacer_200 tablet_half"></div>
          <div class="spacer_200 tablet_hide"></div>
        </div>
      </section>
      <section class="section">
        <div class="spacer_80"></div>
        <div class="container no-pad">
          <div class="marquee-community">
            <div move="left" class="marquee_content">
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-5.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-08.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-07.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-06.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <div class="community_stat">
                <h3 class="p_160 text_lh-1">2,6k</h3>
                <div class="p_32">xDay 2023 attendees</div>
              </div>
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-05.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-04.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-03.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-02.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-4.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
            </div>
            <div move="left" class="marquee_content">
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-5.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-08.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-07.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-06.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <div class="community_stat">
                <h3 class="p_160 text_lh-1">2,6k</h3>
                <div class="p_32">xDay 2023 attendees</div>
              </div>
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-05.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-04.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-03.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-02.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-4.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
            </div>
          </div>
          <div class="marquee-community">
            <div move="right" class="marquee_content">
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-06.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-2.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-3.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-4.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <div class="community_stat is--teal">
                <h3 class="p_160 text_lh-1">39k</h3>
                <div class="text_maxch-20">
                  <h3 class="p_32">On Discord and Telegram</h3>
                </div>
              </div>
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-5.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <div class="community_stat is--yellow">
                <h3 class="p_160 text_lh-1">1k+</h3>
                <div>
                  <h3 class="p_32">participants in the xDay 2023 hackathon</h3>
                </div>
              </div>
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-6.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-7.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
            </div>
            <div move="right" class="marquee_content">
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-upper-06.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-2.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-3.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-4.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <div class="community_stat is--teal">
                <h3 class="p_160 text_lh-1">39k</h3>
                <div class="text_maxch-20">
                  <h3 class="p_32">On Discord and Telegram</h3>
                </div>
              </div>
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-5.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <div class="community_stat is--yellow">
                <h3 class="p_160 text_lh-1">1k+</h3>
                <div>
                  <h3 class="p_32">participants in the xDay 2023 hackathon</h3>
                </div>
              </div>
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-6.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
              <img
                src="../cdn.multiversx.com/webflow/xCommunity-lower-01-7.webp"
                alt="Photo of the crowed at xDays 2023"
                loading="lazy"
                class="community_img"
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="spacer_32"></div>
          <div class="f_vertical-left">
            <h2 class="h_64 is--quote">
              Alone, we can do so little,
              <br />
              together, we can move mountains.
            </h2>
          </div>
          <div class="spacer_100 mobile_half"></div>
        </div>
      </section>
      <section class="section">
        <div class="container z-2">
          <div class="spacer_80"></div>
          <div slider="blog" class="slider-main_component">
            <div class="slider-main_top-wrapper">
              <h2 class="h_26">Latest News</h2>
              <div>
                <div class="slider-main_button-wrapper">
                  <a
                    aria-label="Slide previous card"
                    href="#"
                    class="slider-main_button swiper-prev w-inline-block"
                  >
                    <div class="icon_20 w-embed">
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
                  </a>
                  <a
                    aria-label="Slide next card"
                    href="#"
                    class="slider-main_button swiper-next w-inline-block"
                  >
                    <div class="icon_20 w-embed">
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
                  </a>
                  <a href="/blog" class="btn neutral-wide w-inline-block">
                    <div color-mode="light" class="btn_bg"></div>
                    <div class="p_14">View All</div>
                  </a>
                </div>
              </div>
            </div>
            <div class="spacer_32"></div>
            <div class="swiper is-slider-main w-dyn-list">
              <div
                role="list"
                class="swiper-wrapper is-slider-main w-dyn-items"
              >
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/sovereign-chains-xion-chain-abstraction"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66c7442011248cc68031bb27_image_69_1_50.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66c7442011248cc68031bb27_image_69_1_50-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66c7442011248cc68031bb27_image_69_1_50-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66c7442011248cc68031bb27_image_69_1_50-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66c7442011248cc68031bb27_image_69_1_50-p-1600.webp 1600w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66c7442011248cc68031bb27_image_69_1_50-p-2000.webp 2000w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66c7442011248cc68031bb27_image_69_1_50.webp        2400w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div className="blog_category-detail_wrap">
                        <div
                          style={{ color: "#97e0ff" }}
                          className="blog_category-detail count"
                        >
                          Ecosystem
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Aug 22, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        Sovereign Chains Infrastructure Partners: Chain
                        Abstraction via XION
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/what-are-onchain-passkeys"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bdd3c7b2539585c17ddbe8_on-chain-passkeys-explained%20%281%29.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bdd3c7b2539585c17ddbe8_on-chain-passkeys-explained%20%281%29-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bdd3c7b2539585c17ddbe8_on-chain-passkeys-explained%20%281%29-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bdd3c7b2539585c17ddbe8_on-chain-passkeys-explained%20%281%29-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bdd3c7b2539585c17ddbe8_on-chain-passkeys-explained%20%281%29.webp        1200w
                    "
                      class="card_img-12r"
                    />
                    <div className="blog-card_text-wrap is--more">
                      <div className="blog_category-detail_wrap">
                        <div
                          style={{ color: "#e4fea3" }}
                          className="blog_category-detail count"
                        >
                          Technical
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Aug 15, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        Spica Upgrade: Simplifying On-Chain Access With Passkeys
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/multiversx-snap-metamask-wallet"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0b940868db0269bb4951_MultiversX%20-%20Metamask.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0b940868db0269bb4951_MultiversX%20-%20Metamask-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0b940868db0269bb4951_MultiversX%20-%20Metamask-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0b940868db0269bb4951_MultiversX%20-%20Metamask-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0b940868db0269bb4951_MultiversX%20-%20Metamask.webp        1260w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div class="blog_category-detail_wrap">
                        <div
                          style={{ color: "#97e0ff" }}
                          className="blog_category-detail count"
                        >
                          Ecosystem
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Aug 8, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        MultiversX Directly Available Through MetaMask: Fastest
                        Lane to the Ecosystem
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/egld-listed-on-bitstamp"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c155f216e032081fd86_mvx-blog-Bitstamp.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c155f216e032081fd86_mvx-blog-Bitstamp-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c155f216e032081fd86_mvx-blog-Bitstamp-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c155f216e032081fd86_mvx-blog-Bitstamp-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c155f216e032081fd86_mvx-blog-Bitstamp.webp        1200w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div class="blog_category-detail_wrap">
                        <div
                          style={{ color: "#97e0ff" }}
                          class="blog_category-detail count"
                        >
                          Ecosystem
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Jul 11, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        5M+ Users Gain Access to EGLD on Bitstamp
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/egld-safepal-integration"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6687b39e773a461b2de50682_Safepal.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6687b39e773a461b2de50682_Safepal-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6687b39e773a461b2de50682_Safepal-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6687b39e773a461b2de50682_Safepal-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6687b39e773a461b2de50682_Safepal-p-1600.webp 1600w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6687b39e773a461b2de50682_Safepal-p-2000.webp 2000w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6687b39e773a461b2de50682_Safepal.webp        2008w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div class="blog_category-detail_wrap">
                        <div
                          style={{ color: "#97e0ff" }}
                          class="blog_category-detail count"
                        >
                          Ecosystem
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Jul 5, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">EGLD Available to 13M+ SafePal Users</h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/multiversx-technical-roadmap"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/667c0fb51f2fb371d33d41ce_image%20%2845%29.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/667c0fb51f2fb371d33d41ce_image%20%2845%29-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/667c0fb51f2fb371d33d41ce_image%20%2845%29-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/667c0fb51f2fb371d33d41ce_image%20%2845%29-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/667c0fb51f2fb371d33d41ce_image%20%2845%29-p-1600.webp 1600w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/667c0fb51f2fb371d33d41ce_image%20%2845%29-p-2000.webp 2000w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/667c0fb51f2fb371d33d41ce_image%20%2845%29.webp        2400w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div className="blog_category-detail_wrap">
                        <div
                          style={{ color: "#e4fea3" }}
                          className="blog_category-detail count"
                        >
                          Technical
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Jun 26, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        MultiversX Technical Roadmap - Explore, Track and
                        Contribute
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/egld-bit2me-exchange"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c872c089f646c8179f1_egld-bit2me-exchange.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c872c089f646c8179f1_egld-bit2me-exchange-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c872c089f646c8179f1_egld-bit2me-exchange-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c872c089f646c8179f1_egld-bit2me-exchange-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0c872c089f646c8179f1_egld-bit2me-exchange.webp        1200w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div class="blog_category-detail_wrap">
                        <div
                          style={{ color: "#97e0ff" }}
                          class="blog_category-detail count"
                        >
                          Ecosystem
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Jun 25, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        The Largest Exchange in Latin America, Bit2Me Lists EGLD
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/multiversx-projects-launchpad-cvpad"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0e3f94c4fbbbc9bcbdb9_multiversx-projects-launchpad-cvpad.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0e3f94c4fbbbc9bcbdb9_multiversx-projects-launchpad-cvpad-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0e3f94c4fbbbc9bcbdb9_multiversx-projects-launchpad-cvpad-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0e3f94c4fbbbc9bcbdb9_multiversx-projects-launchpad-cvpad-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0e3f94c4fbbbc9bcbdb9_multiversx-projects-launchpad-cvpad.webp        1200w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div class="blog_category-detail_wrap">
                        <div
                          style={{ color: "#97e0ff" }}
                          class="blog_category-detail count"
                        >
                          Ecosystem
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Jun 14, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        Accelerating Innovation: CV Pad And MultiversX Partner
                        Up To Boost Web3 Startups
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/ecornell-blockchain-essentials-course"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0f11cc0b0f0c1a645420_blog-ecornell.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0f11cc0b0f0c1a645420_blog-ecornell-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0f11cc0b0f0c1a645420_blog-ecornell-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0f11cc0b0f0c1a645420_blog-ecornell-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/66bb0f11cc0b0f0c1a645420_blog-ecornell.webp        1400w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div class="blog_category-detail_wrap">
                        <div
                          style={{ color: "#f3b39c" }}
                          class="blog_category-detail count"
                        >
                          Community
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">Jun 11, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        MultiversX Blockchain Education Initiative With Ivy
                        League eCornell
                      </h3>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="swiper-slide is-slider-blog w-dyn-item"
                >
                  <a
                    href="/blog/xalliance-community-accelerator"
                    class="blog-card_link is--more w-inline-block"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6644a5cdeafb4f8949986ea8_Link%20preview%20thumbnail%20%282400x1260%29.webp"
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      srcset="
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6644a5cdeafb4f8949986ea8_Link%20preview%20thumbnail%20%282400x1260%29-p-500.webp   500w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6644a5cdeafb4f8949986ea8_Link%20preview%20thumbnail%20%282400x1260%29-p-800.webp   800w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6644a5cdeafb4f8949986ea8_Link%20preview%20thumbnail%20%282400x1260%29-p-1080.webp 1080w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6644a5cdeafb4f8949986ea8_Link%20preview%20thumbnail%20%282400x1260%29-p-1600.webp 1600w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6644a5cdeafb4f8949986ea8_Link%20preview%20thumbnail%20%282400x1260%29-p-2000.webp 2000w,
                      ../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/6644a5cdeafb4f8949986ea8_Link%20preview%20thumbnail%20%282400x1260%29.webp        2400w
                    "
                      class="card_img-12r"
                    />
                    <div class="blog-card_text-wrap is--more">
                      <div class="blog_category-detail_wrap">
                        <div
                          style={{ color: "#f3b39c" }}
                          class="blog_category-detail count"
                        >
                          Community
                        </div>
                        <div class="blog_category-dot"></div>
                        <div>
                          <div class="blog_read">May 15, 2024</div>
                        </div>
                      </div>
                      <div class="spacer_16"></div>
                      <h3 class="h_20">
                        MultiversX Foundation Supports the Launch of the
                        xAlliance Community DAO Accelerator
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="spacer_80"></div>
          </div>
        </div>
      </section>
      <div id="newsletter" class="inner-wrapper bg_dark">
        <div class="section z-1">
          <div class="container_bg">
            <img
              src="../cdn.multiversx.com/webflow/Home-Hero-Bg-02.webp"
              loading="lazy"
              class="newsletter_image"
            />
            <img
              src="../cdn.multiversx.com/webflow/Home-Hero-Bg-02.webp"
              loading="lazy"
              class="newsletter_image is--2"
            />
          </div>
          <div class="container z-2">
            <div class="spacer_100"></div>
            <div class="spacer_100 show_mobile-l"></div>
            <div class="newsletter_form-block w-form">
              <div class="text_maxch-65">
                <h2 words-slide-from-right="" text-split="" class="h_24">
                  Stay in-the-know and never miss an update
                </h2>
              </div>
              <div class="spacer_24"></div>
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                action="https://maiar.us20.list-manage.com/subscribe/post?u=67e841fc441e7b5962cb3ccb7&amp;id=eb049cd5bf&amp;f_id=00d38ce0f0"
                method="post"
                class="newsletter_form"
                data-wf-page-id="6597cc7be68d63ec0c8ce33a"
                data-wf-element-id="9217067c-0eea-57e3-4358-235e3665d5ee"
              >
                <div class="newsletter_input-wrap">
                  <input
                    class="form_input w-input"
                    maxlength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Enter a valid email address"
                    type="email"
                    id="Email"
                    required=""
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    class="btn green w-button"
                    value="Sign up"
                  />
                </div>
              </form>
              <div class="success w-form-done">
                <div class="h2">
                  <span class="text_tiel">Thank you!</span> Your submission has
                  been received!
                </div>
              </div>
              <div class="error w-form-fail">
                <div class="p_xs text_grey">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
              <div class="text_maxch-48">
                <div class="spacer_24"></div>
                <p
                  text-split=""
                  words-slide-from-right=""
                  class="p_14 text_neutral-500"
                >
                  We're committed to your privacy. MultiversX uses the
                  information you provide to us to contact you about MultiversX
                  content and events. You may unsubscribe from these
                  communications at any time. For more information, check out
                  our Privacy Policy.
                </p>
              </div>
            </div>
            <div class="spacer_100"></div>
          </div>
        </div>
        <footer class="section">
          <div class="container">
            <div class="container_bg z-minus-1">
              <img
                src="../cdn.multiversx.com/webflow/bg-visual.webp"
                loading="lazy"
                class="img_footer"
              />
            </div>
            <div class="spacer_100 mobile_half"></div>
            <div class="footer_grid-2">
              <div class="f_vertical-left">
                <a
                  aria-label="Home"
                  href="#"
                  class="nav_logo-link w-inline-block"
                >
                  <img
                    src="../cdn.multiversx.com/webflow/MultiversX-Logo_1.svg"
                    loading="lazy"
                    class="mvx_logo"
                  />
                </a>
                <div class="spacer_50"></div>
                <div class="social_wrap">
                  <a
                    aria-label="Twitter / X Profile"
                    href="https://twitter.com/MultiversX"
                    target="_blank"
                    class="st-custom-button w-inline-block"
                  >
                    <div class="social-icon w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.2344 5.25H24.5156L17.2969 13.5469L25.8281 24.75H19.1719L13.9219 17.9531L7.96875 24.75H4.64062L12.375 15.9375L4.21875 5.25H11.0625L15.75 11.4844L21.2344 5.25ZM20.0625 22.7812H21.8906L10.0781 7.125H8.10938L20.0625 22.7812Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    aria-label="Telegram Channel"
                    href="https://t.me/MultiversX"
                    target="_blank"
                    class="st-custom-button w-inline-block"
                  >
                    <div class="social-icon w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 3.375C21.375 3.375 26.625 8.625 26.625 15C26.625 21.4219 21.375 26.625 15 26.625C8.57812 26.625 3.375 21.4219 3.375 15C3.375 8.625 8.57812 3.375 15 3.375ZM20.3438 11.2969C20.3906 11.1562 20.3906 11.0156 20.3438 10.8281C20.3438 10.7344 20.25 10.5938 20.2031 10.5469C20.0625 10.4062 19.8281 10.4062 19.7344 10.4062C19.3125 10.4062 18.6094 10.6406 15.375 12C14.25 12.4688 12 13.4062 8.625 14.9062C8.0625 15.1406 7.78125 15.3281 7.73438 15.5625C7.6875 15.9375 8.29688 16.0781 9 16.3125C9.60938 16.5 10.4062 16.7344 10.8281 16.7344C11.2031 16.7344 11.625 16.5938 12.0938 16.2656C15.2344 14.1094 16.875 13.0312 16.9688 13.0312C17.0625 13.0312 17.1562 12.9844 17.2031 13.0312C17.2969 13.125 17.2969 13.2188 17.25 13.2656C17.2031 13.5 14.25 16.2188 14.0625 16.4062C13.4062 17.0625 12.6562 17.4844 13.8281 18.2344C14.8125 18.8906 15.375 19.3125 16.4062 19.9688C17.0625 20.3906 17.5781 20.9062 18.2344 20.8594C18.5625 20.8125 18.8906 20.5312 19.0312 19.6406C19.4531 17.625 20.2031 13.125 20.3438 11.2969Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    aria-label="Discord Channel"
                    href="https://discord.com/invite/multiversxbuilders"
                    target="_blank"
                    class="st-custom-button w-inline-block"
                  >
                    <div class="social-icon w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.5625 2.28125C27.6562 6.875 29.2031 12.0312 28.6406 17.9844C28.6406 17.9844 28.6406 18.0312 28.5938 18.0312C26.5312 19.5781 24.1875 20.75 21.7031 21.5C21.6562 21.5469 21.6562 21.5 21.6094 21.5C21.0938 20.75 20.625 20 20.2031 19.2031C20.2031 19.1562 20.2031 19.1562 20.2031 19.1094L20.25 19.0625C21 18.7812 21.7031 18.4531 22.4062 18.0312C22.4062 18.0312 22.4531 18.0312 22.4531 17.9844C22.4531 17.9375 22.4531 17.9375 22.4062 17.8906C22.2656 17.7969 22.125 17.7031 21.9844 17.5625C21.9375 17.5625 21.9375 17.5625 21.8906 17.5625C17.4375 19.625 12.5625 19.625 8.0625 17.5625C8.01562 17.5625 7.96875 17.5625 7.96875 17.5625C7.82812 17.7031 7.6875 17.7969 7.54688 17.8906C7.5 17.9375 7.5 17.9375 7.5 17.9844C7.5 18.0312 7.5 18.0312 7.54688 18.0312C8.20312 18.4531 8.95312 18.7812 9.70312 19.0625C9.70312 19.0625 9.70312 19.1094 9.75 19.1094C9.75 19.1562 9.75 19.1562 9.75 19.2031C9.32812 20 8.85938 20.75 8.34375 21.5C8.29688 21.5 8.25 21.5469 8.25 21.5C5.76562 20.75 3.42188 19.5781 1.35938 18.0312C1.3125 18.0312 1.3125 17.9844 1.3125 17.9844C0.84375 12.8281 1.82812 7.625 5.39062 2.28125C5.39062 2.28125 5.39062 2.28125 5.4375 2.28125C7.21875 1.4375 9.09375 0.875 11.0156 0.546875C11.0625 0.5 11.1094 0.546875 11.1094 0.546875C11.3906 1.01562 11.625 1.53125 11.8125 2C13.9219 1.67188 16.0312 1.67188 18.1406 2C18.3281 1.53125 18.5625 1.01562 18.8438 0.546875C18.8438 0.546875 18.8906 0.5 18.9375 0.546875C20.8594 0.875 22.7344 1.4375 24.5156 2.28125C24.5625 2.28125 24.5625 2.28125 24.5625 2.28125ZM10.4062 14.8438C11.7656 14.8438 12.8906 13.5781 12.8906 12.0781C12.8906 10.5312 11.8125 9.3125 10.4062 9.3125C9.04688 9.3125 7.92188 10.5312 7.92188 12.0781C7.92188 13.5781 9.04688 14.8438 10.4062 14.8438ZM19.5469 14.8438C20.9531 14.8438 22.0312 13.5781 22.0312 12.0781C22.0781 10.5312 20.9531 9.3125 19.5469 9.3125C18.1875 9.3125 17.1094 10.5312 17.1094 12.0781C17.1094 13.5781 18.1875 14.8438 19.5469 14.8438Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    aria-label="Facebook Profile"
                    href="https://www.facebook.com/MultiversX/"
                    target="_blank"
                    class="st-custom-button w-inline-block"
                  >
                    <div class="social-icon w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.625 15C26.625 20.8125 22.3594 25.6406 16.7812 26.4844V18.375H19.5L20.0156 15H16.7812V12.8438C16.7812 11.9062 17.25 11.0156 18.7031 11.0156H20.1562V8.15625C20.1562 8.15625 18.8438 7.92188 17.5312 7.92188C14.9062 7.92188 13.1719 9.5625 13.1719 12.4688V15H10.2188V18.375H13.1719V26.4844C7.59375 25.6406 3.375 20.8125 3.375 15C3.375 8.57812 8.57812 3.375 15 3.375C21.4219 3.375 26.625 8.57812 26.625 15Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    aria-label="Linkedin Profile"
                    href="https://www.linkedin.com/company/multiversx"
                    target="_blank"
                    class="st-custom-button w-inline-block"
                  >
                    <div class="social-icon w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div class="footer-links_minus">
                  <div class="spacer_16"></div>
                  <a
                    href="https://linktr.ee/multiversx"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Official Channels</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                id="w-node-_6121deff-1e28-450d-3597-60a1622e40f0-2bf1fd79"
                class="footer_links-wrap"
              >
                <div class="f_vertical-left">
                  <div class="footer-link_header">
                    <div class="p_14 text_neutral-200">Individuals</div>
                  </div>
                  <a
                    href="/individuals/get-started"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Get Started</div>
                  </a>
                  <a href="/egld" class="footer-link w-inline-block">
                    <div class="p_14">The EGLD Token</div>
                  </a>
                  <a href="/on-chain-2fa" class="footer-link w-inline-block">
                    <div class="p_14">On-chain 2FA</div>
                  </a>
                  <a href="/staking" class="footer-link w-inline-block">
                    <div class="p_14">Staking</div>
                  </a>
                  <a
                    href="https://environment.multiversx.com/"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Sustainability</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div class="f_vertical-left">
                  <div class="footer-link_header">
                    <div class="p_14 text_neutral-200">Builders</div>
                  </div>
                  <a href="/builders-hub" class="footer-link w-inline-block">
                    <div class="p_14">Builders Hub</div>
                  </a>
                  <a
                    href="/builders/build-your-first-multiversx-dapp-in-30-minutes"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Tutorials</div>
                  </a>
                  <a
                    href="/builders/builder-tools-resources"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Tools &amp; Resources</div>
                  </a>
                  <a
                    href="/events/hackathons"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Hackathons</div>
                  </a>
                  <a href="/releases" class="footer-link w-inline-block">
                    <div class="p_14">Releases</div>
                  </a>
                  <a href="/roadmap" class="footer-link w-inline-block">
                    <div class="p_14">Tech Roadmap</div>
                    <div class="link-flavor new">
                      <div class="powered-text_inner">
                        <div class="text_semibold text_gradient-green-cyan">
                          NEW
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://docs.multiversx.com/"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Documentation</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://docs.multiversx.com/validators/overview"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Become a Validator</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div class="f_vertical-left">
                  <div class="footer-link_header">
                    <div class="p_14 text_neutral-200">Ecosystem</div>
                  </div>
                  <a href="/ecosystem" class="footer-link w-inline-block">
                    <div class="p_14">Discover</div>
                  </a>
                  <a
                    href="/ecosystem/projects"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Projects</div>
                  </a>
                  <a
                    href="/ecosystem/partners"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Partners</div>
                  </a>
                  <a
                    href="/ecosystem/validators"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Validators</div>
                  </a>
                  <a
                    href="/ecosystem/service-providers"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Service Providers</div>
                  </a>
                </div>
                <div class="f_vertical-left">
                  <div class="footer-link_header">
                    <div class="p_14 text_neutral-200">Community</div>
                  </div>
                  <a href="/events" class="footer-link w-inline-block">
                    <div class="p_14">Events Calendar</div>
                  </a>
                  <a
                    href="https://governance.multiversx.com/"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Governance</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" class="footer-link w-inline-block">
                    <div class="p_14">Ambassadors Program</div>
                    <div class="link-flavor">
                      <div class="powered-text_inner">
                        <div data-twothree-count="" class="text-block">
                          SOON
                        </div>
                      </div>
                    </div>
                    <div class="footer-link_disabled"></div>
                  </a>
                  <a href="/faq" class="footer-link w-inline-block">
                    <div class="p_14">FAQ</div>
                  </a>
                  <a href="/blog" class="footer-link w-inline-block">
                    <div class="p_14">Blog</div>
                  </a>
                </div>
                <div class="f_vertical-left">
                  <div class="footer-link_header">
                    <div class="p_14 text_neutral-200">Resources</div>
                  </div>
                  <a
                    href="https://cdn.multiversx.com/webflow/multiversx-whitepaper.pdf"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Whitepaper</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1.875C1.78906 1.875 1.625 2.0625 1.625 2.25V11.25C1.625 11.4609 1.78906 11.625 2 11.625H8C8.1875 11.625 8.375 11.4609 8.375 11.25V2.25C8.375 2.0625 8.1875 1.875 8 1.875H2ZM0.5 2.25C0.5 1.42969 1.15625 0.75 2 0.75H8C8.82031 0.75 9.5 1.42969 9.5 2.25V11.25C9.5 12.0938 8.82031 12.75 8 12.75H2C1.15625 12.75 0.5 12.0938 0.5 11.25V2.25ZM3.3125 3.75H6.6875C6.99219 3.75 7.25 4.00781 7.25 4.3125C7.25 4.64062 6.99219 4.875 6.6875 4.875H3.3125C2.98438 4.875 2.75 4.64062 2.75 4.3125C2.75 4.00781 2.98438 3.75 3.3125 3.75ZM3.3125 6H6.6875C6.99219 6 7.25 6.25781 7.25 6.5625C7.25 6.89062 6.99219 7.125 6.6875 7.125H3.3125C2.98438 7.125 2.75 6.89062 2.75 6.5625C2.75 6.25781 2.98438 6 3.3125 6ZM3.3125 8.25H4.4375C4.74219 8.25 5 8.50781 5 8.8125C5 9.14062 4.74219 9.375 4.4375 9.375H3.3125C2.98438 9.375 2.75 9.14062 2.75 8.8125C2.75 8.50781 2.98438 8.25 3.3125 8.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://cdn.multiversx.com/webflow/multiversx-economics-paper.pdf"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Economics Paper</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1.875C1.78906 1.875 1.625 2.0625 1.625 2.25V11.25C1.625 11.4609 1.78906 11.625 2 11.625H8C8.1875 11.625 8.375 11.4609 8.375 11.25V2.25C8.375 2.0625 8.1875 1.875 8 1.875H2ZM0.5 2.25C0.5 1.42969 1.15625 0.75 2 0.75H8C8.82031 0.75 9.5 1.42969 9.5 2.25V11.25C9.5 12.0938 8.82031 12.75 8 12.75H2C1.15625 12.75 0.5 12.0938 0.5 11.25V2.25ZM3.3125 3.75H6.6875C6.99219 3.75 7.25 4.00781 7.25 4.3125C7.25 4.64062 6.99219 4.875 6.6875 4.875H3.3125C2.98438 4.875 2.75 4.64062 2.75 4.3125C2.75 4.00781 2.98438 3.75 3.3125 3.75ZM3.3125 6H6.6875C6.99219 6 7.25 6.25781 7.25 6.5625C7.25 6.89062 6.99219 7.125 6.6875 7.125H3.3125C2.98438 7.125 2.75 6.89062 2.75 6.5625C2.75 6.25781 2.98438 6 3.3125 6ZM3.3125 8.25H4.4375C4.74219 8.25 5 8.50781 5 8.8125C5 9.14062 4.74219 9.375 4.4375 9.375H3.3125C2.98438 9.375 2.75 9.14062 2.75 8.8125C2.75 8.50781 2.98438 8.25 3.3125 8.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://cdn.multiversx.com/webflow/multiversx-token-metrics.pdf"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Token Metrics</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1.875C1.78906 1.875 1.625 2.0625 1.625 2.25V11.25C1.625 11.4609 1.78906 11.625 2 11.625H8C8.1875 11.625 8.375 11.4609 8.375 11.25V2.25C8.375 2.0625 8.1875 1.875 8 1.875H2ZM0.5 2.25C0.5 1.42969 1.15625 0.75 2 0.75H8C8.82031 0.75 9.5 1.42969 9.5 2.25V11.25C9.5 12.0938 8.82031 12.75 8 12.75H2C1.15625 12.75 0.5 12.0938 0.5 11.25V2.25ZM3.3125 3.75H6.6875C6.99219 3.75 7.25 4.00781 7.25 4.3125C7.25 4.64062 6.99219 4.875 6.6875 4.875H3.3125C2.98438 4.875 2.75 4.64062 2.75 4.3125C2.75 4.00781 2.98438 3.75 3.3125 3.75ZM3.3125 6H6.6875C6.99219 6 7.25 6.25781 7.25 6.5625C7.25 6.89062 6.99219 7.125 6.6875 7.125H3.3125C2.98438 7.125 2.75 6.89062 2.75 6.5625C2.75 6.25781 2.98438 6 3.3125 6ZM3.3125 8.25H4.4375C4.74219 8.25 5 8.50781 5 8.8125C5 9.14062 4.74219 9.375 4.4375 9.375H3.3125C2.98438 9.375 2.75 9.14062 2.75 8.8125C2.75 8.50781 2.98438 8.25 3.3125 8.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div class="f_vertical-left">
                  <div class="footer-link_header">
                    <div class="p_14 text_neutral-200">About</div>
                  </div>
                  <a href="/transformation" class="footer-link w-inline-block">
                    <div class="p_14">From Elrond to MultiversX</div>
                  </a>
                  <a
                    href="https://files.multiversx.com/MultiversX-Media-Kit.zip"
                    target="_blank"
                    class="footer-link w-inline-block"
                  >
                    <div class="p_14">Media Kit</div>
                    <div class="icon_10 w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="/careers" class="footer-link w-inline-block">
                    <div class="p_14">Careers</div>
                  </a>
                </div>
              </div>
              <div
                id="w-node-_994a5e38-df4f-7dd3-d30f-169e66f4f53f-2bf1fd79"
                class="footer_empty"
              ></div>
              <div
                id="w-node-_1d6f5599-f99e-66ac-6ef4-0a5eb0f7e88f-2bf1fd79"
                class="f_horizontal_top_left"
              >
                <div class="footer-link_header">
                  <div class="p_14 text_neutral-200">Legal</div>
                </div>
                <a href="/legal/disclaimer" class="footer-link w-inline-block">
                  <div class="p_14">Disclaimer</div>
                </a>
                <a
                  href="/legal/responsible-disclosure-policy"
                  class="footer-link w-inline-block"
                >
                  <div class="p_14">Responsible Disclosure Policy</div>
                </a>
                <a
                  href="/legal/privacy-policy"
                  class="footer-link w-inline-block"
                >
                  <div class="p_14">Privacy Policy</div>
                </a>
                <a
                  href="/legal/terms-of-use"
                  class="footer-link w-inline-block"
                >
                  <div class="p_14">Terms of Use</div>
                </a>
              </div>
            </div>
            <div class="spacer_100"></div>
            <div class="f_vertical-center_t-center">
              <div class="p_14 text_neutral-500">
                © <span class="year-change">2023</span> MultiversX. All rights
                reserved
              </div>
            </div>
            <div class="spacer_300"></div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default About;
