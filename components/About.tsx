"use client";

import { nunito, pt_sans } from "@/app/fonts";
import { FaRegGem } from "react-icons/fa"; // Star icon
import aboutImg from "@/public/about.png";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeCommunity from "./MarqueeCommunity";
import Partners from "./Partners";

const About = () => {
  return (
    <main className="main-wrapper">
      <img
        src="../cdn.multiversx.com/webflow/Hero%20section%20background.webp"
        loading="eager"
        className="section_img-overflow"
      />
      <section className="inner-wrapper bg_dark">
        <div className="hero_bg-gradient"></div>
        <div>
          <div className="container_bg z-0">
            <img
              src="../cdn.multiversx.com/webflow/Hero%20section%20background.webp"
              loading="eager"
              className="hero_bg-image"
            />
            <img
              src="../cdn.multiversx.com/webflow/Home-Hero-Bg-03.webp"
              loading="eager"
              className="hero_bg-image is-2"
            />
            <img
              src="../cdn.multiversx.com/webflow/Glass%20shield%25404-1080x1080%201.webp"
              loading="eager"
              className="hero_bg-image is-3"
            />
          </div>
          <div className="container z-2">
            <div className="f_vertical-center_t-center">
              <div className="spacer_200 mobile_300"></div>
              <a
                data-w-id="122a7b7b-7a76-5b49-a473-0c09ae6c842a"
                href="/sovereign-chains"
                className="btn outline-green w-inline-block"
              >
                <div
                  color-mode="light"
                  data-w-id="122a7b7b-7a76-5b49-a473-0c09ae6c842b"
                  className="btn_bg bg_outline"
                ></div>
                <div color-mode="light" className="btn_outline-wrap">
                  <div className="btn_new">New</div>
                  <div className="p_14 text_inline text_gradient_new-shine">
                    Introducing Sovereign Chains
                  </div>
                </div>
              </a>
              <div className="spacer_16"></div>
              <h1 className="h_64">The Internet-Scale Blockchain</h1>
              <div className="spacer_24"></div>
              <div className="text_maxch-90">
                <div balance="" className="p_21 text_neutral-500">
                  MultiversX, the EGLD&nbsp;network, is a distributed blockchain
                  network for next-gen applications. Decentralized via 3,000+
                  nodes, scalable through sharding, fast, secure &amp; green.
                </div>
              </div>
              <div className="spacer_40"></div>
              <div className="btn_wrap">
                <a href="/ecosystem" className="btn neutral w-inline-block">
                  <div color-mode="light" className="btn_bg"></div>
                  <div className="p_16">Explore the Ecosystem</div>
                  <div className="icon_20 w-embed">
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
                <a href="/builders-hub" className="btn teal w-inline-block">
                  <div color-mode="light" className="btn_bg bg_dark-teal"></div>
                  <div className="p_16">Start&nbsp;building</div>
                  <div className="icon_20 w-embed">
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
              <div className="spacer_100"></div>
            </div>
            <div className="nav-transition"></div>
          </div>
        </div>
        <div className="container z-2">
          <div className="bento-grid_12">
            <div
              id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac317-0c8ce33a"
              className="grid_1 mobile_2"
            >
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac318-0c8ce33a"
                className="bento_item ofh"
              >
                <div className="bento-inner_horizontal-right-24">
                  <div className="text_maxch-15 mobile-100">
                    <h2 className="p_16 text_neutral-500">
                      Average Cost per Transaction
                    </h2>
                  </div>
                  <div className="text_align-right">
                    <div className="h_40 mobile_vw">
                      ~$0<span className="op_60">.00</span>
                      <span count="static" className="op_60">
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac322-0c8ce33a"
                className="bento_item"
              >
                <div className="bento-inner_vertical-24">
                  <h2 className="p_16 text_neutral-500">Total Transactions</h2>
                  <div className="text_align-right _100">
                    <div className="h_50 mobile_vw">
                      <span api-data="transaction-count">
                        434,785,336
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bento_curtain"></div>
              </div>
            </div>
            <div
              id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac329-0c8ce33a"
              className="grid_1"
            >
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac32a-0c8ce33a"
                className="bento_empty"
              ></div>
              <div
                id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac32b-0c8ce33a"
                className="bento_item is--validator"
              >
                <div className="bento-inner_vertical-24">
                  <div className="spacer_50 hide_mobile-l"></div>
                  <h2 className="p_16 text_neutral-500">Validator Nodes</h2>
                  <div className="text_align-right _100">
                    <div api-data="nodes" className="h_56">
                      3,200
                    </div>
                  </div>
                </div>
                <img
                  src="../cdn.multiversx.com/webflow/validator-map.webp"
                  alt="validators world map"
                  loading="eager"
                  className="bento_img-validator"
                />
              </div>
            </div>
            <div
              id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac334-0c8ce33a"
              className="bento_item carbon-free"
            >
              <div className="f_vertical-left relative">
                <h2 className="p_16 text_neutral-500">
                  Efficient. Scalable. Global.
                </h2>
                <div className="spacer_80"></div>
                <div className="h_40">Carbon Neutral</div>
                <div className="spacer_16"></div>
                <a
                  href="https://environment.multiversx.com/"
                  target="_blank"
                  className="btn carbon-free w-inline-block"
                >
                  <div color-mode="light" className="btn_bg bg_dark-teal"></div>
                  <div className="p_14">Sustainability</div>
                  <div className="icon_10 w-embed">
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
                className="bento_carbon-free"
              />
              <div className="bento_curtain"></div>
            </div>
          </div>
        </div>
        <div className="container z-2">
          <div className="spacer_32"></div>
        </div>
        <div className="spacer_60"></div>
      </section>
      <section className="section">
        <div className="container z-2">
          <div className="spacer_100"></div>
          <div className="f_vertical-center_t-center">
            <div className="btn outline-green">
              <div color-mode="light" className="btn_bg bg_outline"></div>
              <div color-mode="light" className="btn_outline-wrap is--label">
                <div className="p_16 op_60 text_gradient_new-shine">
                  Builders
                </div>
              </div>
            </div>
            <div className="spacer_16"></div>
            <div className="text_maxch-85">
              <h2 className="h_84">Let's make this decision easy for you</h2>
            </div>
            <div className="spacer_16"></div>
            <div className="p_21 text_neutral-500 text_lh-1-5">
              MultiversX provides the infrastructure you need to tackle any use
              case.
            </div>
          </div>
          <div className="spacer_80"></div>
          <div className="bento-grid_12">
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5f95-0c8ce33a"
              data-w-id="840b4d3d-ed02-15c6-d08d-4e62095f5f95"
              className="bento_item is-clipped"
            >
              <div></div>
              <img
                src="../cdn.multiversx.com/webflow/esdt-visual.webp"
                className="bento-home_image-top"
              />
              <div className="f_vertical-center-100 relative">
                <div className="text_align-center">
                  <h3 className="p_24">Native</h3>
                  <h3 className="p_24">Assets</h3>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5f9e-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/glass-shield.webp"
                className="bento-home_image-bottom"
              />
              <div className="f_vertical-center-100 relative">
                <div className="text_align-center">
                  <h3 className="p_24">Safest User Experience</h3>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fa4-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/stacking-transition-visual.webp"
                loading="lazy"
                className="bento-home_image-royalties"
              />
              <div className="bento-inner_horizontal-space-b-24">
                <div className="text_maxch-20">
                  <h3 className="h_40">30% Developer Royalties</h3>
                </div>
                <div className="text_maxch-25">
                  <div className="p_16 text_lh-1-5 text_neutral-400">
                    Developers get 30% of the gas fee every time someone calls
                    their smart contract
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fad-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/state-double.webp"
                className="bento-home_image-double"
              />
              <div></div>
              <div className="f_vertical-left relative">
                <h3 className="p_24">Adaptive State Sharding</h3>
                <div className="spacer_8"></div>
                <div className="p_16 text_lh-1-5 text_neutral-400">
                  The first to present a viable solution where all three aspects
                  of sharding are live
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fb6-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/state-double.webp"
                className="bento-home_image-double is-2"
              />
              <div></div>
              <div className="text_align-right">
                <div className="f_vertical-right relative">
                  <div className="text_maxch-15">
                    <h3 className="p_24">Secure Proof of Stake</h3>
                  </div>
                  <div className="spacer_8"></div>
                  <div className="p_16 text_lh-1-5 text_neutral-400">
                    Energy-efficient consensus mechanism with provable security
                    guarantees
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fc1-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/wasm.webp"
                loading="lazy"
                className="bento-home_image-wasm"
              />
              <div></div>
              <div className="f_vertical-center-100 relative">
                <div className="text_align-center">
                  <h3 className="p_24">WASM-Based Virtual Machine</h3>
                  <div className="spacer_8"></div>
                  <div className="p_16 text_lh-1-5 text_neutral-400">
                    Write smart contracts in familiar languages, compile, and
                    run them through the fastest VM in the space
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fcb-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/metal-block.webp"
                className="bento-home_image-bottom is-2"
              />
              <div className="f_vertical-left relative _100">
                <div className="text_maxch-15">
                  <h3 className="p_24">Resilient and Battle-Tested</h3>
                </div>
              </div>
            </div>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fd1-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/fast-visual.webp"
                className="bento-home_image-fast"
              />
              <div className="f_vertical-center-100 relative">
                <div className="text_align-center">
                  <h3 className="p_24">Fast</h3>
                  <div className="spacer_8"></div>
                  <div className="p_16 text_lh-1-5 text_neutral-400">
                    263,000 transactions per second max recorded
                  </div>
                </div>
              </div>
            </div>
            <a
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fda-0c8ce33a"
              href="/sovereign-chains"
              className="bento_item is-clipped w-inline-block"
            >
              <img
                src="../cdn.multiversx.com/webflow/sidechains.webp"
                loading="lazy"
                className="bento-home_image-sidechains"
              />
              <div></div>
              <div className="r_vertical-center_center">
                <div className="link-flavor static">
                  <div className="powered-text_inner">
                    <div>Live</div>
                  </div>
                </div>
                <div className="spacer_8"></div>
                <h3 className="h_84">Sovereign Chains</h3>
              </div>
              <div></div>
            </a>
            <div
              id="w-node-_840b4d3d-ed02-15c6-d08d-4e62095f5fe6-0c8ce33a"
              className="bento_item is-clipped"
            >
              <img
                src="../cdn.multiversx.com/webflow/validators-2.webp"
                loading="lazy"
                className="bento_img-validator home"
              />
              <div></div>
              <div className="f_vertical-center-100 relative">
                <div className="text_align-center">
                  <h3 className="p_24">Decentralised</h3>
                  <div className="spacer_8"></div>
                  <div className="p_16 text_lh-1-5 text_neutral-400">
                    3,200+ validator nodes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer_80"></div>
        </div>
      </section>
      <section className="section">
        <div className="container z-2">
          <div className="spacer_80"></div>
          {<Partners />}
        </div>
      </section>
      <section className="section">
        <div className="container z-2">
          <div className="container_bg z-minus-1">
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section07.webp"
              loading="lazy"
              className="crystal-get is-7"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section06.webp"
              loading="lazy"
              className="crystal-get is-6"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section01.webp"
              loading="lazy"
              className="crystal-get"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section02.webp"
              loading="lazy"
              className="crystal-get is-2"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section03.webp"
              loading="lazy"
              className="crystal-get is-3"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section04.webp"
              loading="lazy"
              className="crystal-get is-4"
            />
            <img
              src="../cdn.multiversx.com/webflow/EGLD-Get-Section05.webp"
              loading="lazy"
              className="crystal-get is-5"
            />
          </div>
          <div className="spacer_100"></div>
          <div className="spacer_100"></div>
          <div className="f_vertical-center_t-center">
            <div className="btn outline-green">
              <div color-mode="light" className="btn_bg bg_outline"></div>
              <div color-mode="light" className="btn_outline-wrap is--label">
                <div className="p_16 op_60 text_gradient_new-shine">
                  The EGLD&nbsp;Token
                </div>
              </div>
            </div>
            <div className="spacer_24"></div>
            <div className="text_maxch-90">
              <h2 className="h_84">Secured by EGLD</h2>
            </div>
            <div className="spacer_16"></div>
            <div className="text_maxch-50">
              <div className="p_21 text_neutral-500 text_lh-1-5">
                The native eGold token enables access and usage, provides
                security, reinforces growth, and ensures economic alignment for
                all stakeholders.
              </div>
            </div>
            <div className="spacer_32"></div>
            <div className="btn_wrap">
              <a href="/staking" className="btn teal w-inline-block">
                <div color-mode="light" className="btn_bg bg_dark-teal"></div>
                <div className="p_16">Stake EGLD</div>
                <div className="icon_20 w-embed">
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
              <a href="/egld" className="btn neutral w-inline-block">
                <div color-mode="light" className="btn_bg"></div>
                <div className="p_16">What is EGLD?</div>
                <div className="icon_20 w-embed">
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
          <div className="spacer_100"></div>
          <div className="spacer_100"></div>
        </div>
      </section>
      <div className="plus-75">
        <section className="section minus-75">
          <div bg-step="dark" className="container is--step">
            <div className="container_bg">
              <div className="planet_wrap">
                <div
                  data-w-id="b274ae0e-9ff9-63fc-618e-7d98e18b516a"
                  className="planet"
                >
                  <div className="planet_orbit">
                    <img
                      src="../cdn.multiversx.com/webflow/Inner-Orbit.svg"
                      loading="lazy"
                      className="img_square"
                    />
                  </div>
                  <div
                    className="planet_orbit is--anim"
                    style={{
                      animation: "orbitAnimation 100s linear infinite",
                    }}
                  >
                    <img
                      src="../cdn.multiversx.com/webflow/Outline-Orbit.svg"
                      loading="lazy"
                      className="img_square"
                    />
                  </div>
                  <img
                    src="../cdn.multiversx.com/webflow/Planet.webp"
                    alt="Planet"
                    loading="lazy"
                    className="planet_img"
                    style={{
                      animation: "rotateAnimation 30s linear infinite",
                    }}
                  />
                  <img
                    src="../cdn.multiversx.com/webflow/Planet.webp"
                    alt="Planet"
                    loading="lazy"
                    className="planet_img abs"
                    style={{
                      animation: "rotateAnimation 30s linear infinite",
                    }}
                  />
                  <div className="planet_gradient-1"></div>
                  <div className="planet_gradient-2"></div>
                </div>
              </div>
            </div>
            <div className="spacer_200"></div>
            <div className="f_vertical-center_t-center">
              <div className="text_maxch-60">
                <h2 className="h_84">Future-Proof in Every Way</h2>
              </div>
              <div className="spacer_24"></div>
              <div className="text_maxch-60">
                <div className="p_21 text_lh-1-5">
                  MultiversX is leading the way towards a more responsible and
                  sustainable infrastructure for all digital things.
                </div>
              </div>
              <div className="spacer_24"></div>
              <a
                href="https://environment.multiversx.com/"
                target="_blank"
                className="btn carbon-free-wide w-inline-block"
              >
                <div color-mode="light" className="btn_bg bg_dark-teal"></div>
                <div className="p_18">Learn about Sustainability</div>
                <div className="icon_24 w-embed">
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
            <div className="spacer_200"></div>
          </div>
        </section>
      </div>
      <section className="section">
        <div className="container z-2">
          <div className="spacer_200 tablet_half"></div>
          <div className="featured_grid is-text-pushed">
            <div
              id="w-node-ce434816-9f92-4ef3-4287-6160b6e1f45a-0c8ce33a"
              className="featured_img-wrap"
            >
              <div className="show_mobile-l">
                <div className="space_square"></div>
              </div>
            </div>
            <div
              id="w-node-ce434816-9f92-4ef3-4287-6160b6e1f45e-0c8ce33a"
              className="featured_text-wrap"
            >
              <div className="spacer_48"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        {<MarqueeCommunity />}

        <div className="container">
          <div className="spacer_32"></div>
          <div className="f_vertical-left">
            <h2 className="h_64 is--quote">
              Alone, we can do so little,
              <br />
              together, we can move mountains.
            </h2>
          </div>
          <div className="spacer_100 mobile_half"></div>
        </div>
      </section>

      <div id="newsletter" className="inner-wrapper bg_dark">
        <div className="section z-1">
          <div className="container_bg">
            <img
              src="../cdn.multiversx.com/webflow/Home-Hero-Bg-02.webp"
              loading="lazy"
              className="newsletter_image"
            />
            <img
              src="../cdn.multiversx.com/webflow/Home-Hero-Bg-02.webp"
              loading="lazy"
              className="newsletter_image is--2"
            />
          </div>
          <div className="container z-2">
            <div className="spacer_100"></div>
            <div className="spacer_100 show_mobile-l"></div>
            <div className="newsletter_form-block w-form">
              <div className="text_maxch-65">
                <h2 words-slide-from-right="" text-split="" className="h_24">
                  Stay in-the-know and never miss an update
                </h2>
              </div>
              <div className="spacer_24"></div>
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                action="https://maiar.us20.list-manage.com/subscribe/post?u=67e841fc441e7b5962cb3ccb7&amp;id=eb049cd5bf&amp;f_id=00d38ce0f0"
                method="post"
                className="newsletter_form"
                data-wf-page-id="6597cc7be68d63ec0c8ce33a"
                data-wf-element-id="9217067c-0eea-57e3-4358-235e3665d5ee"
              >
                <div className="newsletter_input-wrap">
                  <input
                    className="form_input w-input"
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
                    className="btn green w-button"
                    value="Sign up"
                  />
                </div>
              </form>
              <div className="success w-form-done">
                <div className="h2">
                  <span className="text_tiel">Thank you!</span> Your submission
                  has been received!
                </div>
              </div>
              <div className="error w-form-fail">
                <div className="p_xs text_grey">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
              <div className="text_maxch-48">
                <div className="spacer_24"></div>
                <p
                  text-split=""
                  words-slide-from-right=""
                  className="p_14 text_neutral-500"
                >
                  We're committed to your privacy. MultiversX uses the
                  information you provide to us to contact you about MultiversX
                  content and events. You may unsubscribe from these
                  communications at any time. For more information, check out
                  our Privacy Policy.
                </p>
              </div>
            </div>
            <div className="spacer_100"></div>
          </div>
        </div>
        <footer className="section">
          <div className="container">
            <div className="container_bg z-minus-1">
              <img
                src="../cdn.multiversx.com/webflow/bg-visual.webp"
                loading="lazy"
                className="img_footer"
              />
            </div>
            <div className="spacer_100 mobile_half"></div>
            <div className="footer_grid-2">
              <div className="f_vertical-left">
                <a
                  aria-label="Home"
                  href="#"
                  className="nav_logo-link w-inline-block"
                >
                  <img
                    src="../cdn.multiversx.com/webflow/MultiversX-Logo_1.svg"
                    loading="lazy"
                    className="mvx_logo"
                  />
                </a>
                <div className="spacer_50"></div>
                <div className="social_wrap">
                  <a
                    aria-label="Twitter / X Profile"
                    href="https://twitter.com/MultiversX"
                    target="_blank"
                    className="st-custom-button w-inline-block"
                  >
                    <div className="social-icon w-embed">
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
                    className="st-custom-button w-inline-block"
                  >
                    <div className="social-icon w-embed">
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
                    className="st-custom-button w-inline-block"
                  >
                    <div className="social-icon w-embed">
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
                    className="st-custom-button w-inline-block"
                  >
                    <div className="social-icon w-embed">
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
                    className="st-custom-button w-inline-block"
                  >
                    <div className="social-icon w-embed">
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
                <div className="footer-links_minus">
                  <div className="spacer_16"></div>
                  <a
                    href="https://linktr.ee/multiversx"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Official Channels</div>
                    <div className="icon_10 w-embed">
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
                className="footer_links-wrap"
              >
                <div className="f_vertical-left">
                  <div className="footer-link_header">
                    <div className="p_14 text_neutral-200">Individuals</div>
                  </div>
                  <a
                    href="/individuals/get-started"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Get Started</div>
                  </a>
                  <a href="/egld" className="footer-link w-inline-block">
                    <div className="p_14">The EGLD Token</div>
                  </a>
                  <a
                    href="/on-chain-2fa"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">On-chain 2FA</div>
                  </a>
                  <a href="/staking" className="footer-link w-inline-block">
                    <div className="p_14">Staking</div>
                  </a>
                  <a
                    href="https://environment.multiversx.com/"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Sustainability</div>
                    <div className="icon_10 w-embed">
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
                <div className="f_vertical-left">
                  <div className="footer-link_header">
                    <div className="p_14 text_neutral-200">Builders</div>
                  </div>
                  <a
                    href="/builders-hub"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Builders Hub</div>
                  </a>
                  <a
                    href="/builders/build-your-first-multiversx-dapp-in-30-minutes"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Tutorials</div>
                  </a>
                  <a
                    href="/builders/builder-tools-resources"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Tools &amp; Resources</div>
                  </a>
                  <a
                    href="/events/hackathons"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Hackathons</div>
                  </a>
                  <a href="/releases" className="footer-link w-inline-block">
                    <div className="p_14">Releases</div>
                  </a>
                  <a href="/roadmap" className="footer-link w-inline-block">
                    <div className="p_14">Tech Roadmap</div>
                    <div className="link-flavor new">
                      <div className="powered-text_inner">
                        <div className="text_semibold text_gradient-green-cyan">
                          NEW
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://docs.multiversx.com/"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Documentation</div>
                    <div className="icon_10 w-embed">
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
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Become a Validator</div>
                    <div className="icon_10 w-embed">
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
                <div className="f_vertical-left">
                  <div className="footer-link_header">
                    <div className="p_14 text_neutral-200">Ecosystem</div>
                  </div>
                  <a href="/ecosystem" className="footer-link w-inline-block">
                    <div className="p_14">Discover</div>
                  </a>
                  <a
                    href="/ecosystem/projects"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Projects</div>
                  </a>
                  <a
                    href="/ecosystem/partners"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Partners</div>
                  </a>
                  <a
                    href="/ecosystem/validators"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Validators</div>
                  </a>
                  <a
                    href="/ecosystem/service-providers"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Service Providers</div>
                  </a>
                </div>
                <div className="f_vertical-left">
                  <div className="footer-link_header">
                    <div className="p_14 text_neutral-200">Community</div>
                  </div>
                  <a href="/events" className="footer-link w-inline-block">
                    <div className="p_14">Events Calendar</div>
                  </a>
                  <a
                    href="https://governance.multiversx.com/"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Governance</div>
                    <div className="icon_10 w-embed">
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
                  <a href="#" className="footer-link w-inline-block">
                    <div className="p_14">Ambassadors Program</div>
                    <div className="link-flavor">
                      <div className="powered-text_inner">
                        <div data-twothree-count="" className="text-block">
                          SOON
                        </div>
                      </div>
                    </div>
                    <div className="footer-link_disabled"></div>
                  </a>
                  <a href="/faq" className="footer-link w-inline-block">
                    <div className="p_14">FAQ</div>
                  </a>
                  <a href="/blog" className="footer-link w-inline-block">
                    <div className="p_14">Blog</div>
                  </a>
                </div>
                <div className="f_vertical-left">
                  <div className="footer-link_header">
                    <div className="p_14 text_neutral-200">Resources</div>
                  </div>
                  <a
                    href="https://cdn.multiversx.com/webflow/multiversx-whitepaper.pdf"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Whitepaper</div>
                    <div className="icon_10 w-embed">
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
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Economics Paper</div>
                    <div className="icon_10 w-embed">
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
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Token Metrics</div>
                    <div className="icon_10 w-embed">
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
                <div className="f_vertical-left">
                  <div className="footer-link_header">
                    <div className="p_14 text_neutral-200">About</div>
                  </div>
                  <a
                    href="/transformation"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">From Elrond to MultiversX</div>
                  </a>
                  <a
                    href="https://files.multiversx.com/MultiversX-Media-Kit.zip"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="p_14">Media Kit</div>
                    <div className="icon_10 w-embed">
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
                  <a href="/careers" className="footer-link w-inline-block">
                    <div className="p_14">Careers</div>
                  </a>
                </div>
              </div>
              <div
                id="w-node-_994a5e38-df4f-7dd3-d30f-169e66f4f53f-2bf1fd79"
                className="footer_empty"
              ></div>
              <div
                id="w-node-_1d6f5599-f99e-66ac-6ef4-0a5eb0f7e88f-2bf1fd79"
                className="f_horizontal_top_left"
              >
                <div className="footer-link_header">
                  <div className="p_14 text_neutral-200">Legal</div>
                </div>
                <a
                  href="/legal/disclaimer"
                  className="footer-link w-inline-block"
                >
                  <div className="p_14">Disclaimer</div>
                </a>
                <a
                  href="/legal/responsible-disclosure-policy"
                  className="footer-link w-inline-block"
                >
                  <div className="p_14">Responsible Disclosure Policy</div>
                </a>
                <a
                  href="/legal/privacy-policy"
                  className="footer-link w-inline-block"
                >
                  <div className="p_14">Privacy Policy</div>
                </a>
                <a
                  href="/legal/terms-of-use"
                  className="footer-link w-inline-block"
                >
                  <div className="p_14">Terms of Use</div>
                </a>
              </div>
            </div>
            <div className="spacer_100"></div>
            <div className="f_vertical-center_t-center">
              <div className="p_14 text_neutral-500">
                © <span className="year-change">2023</span> MultiversX. All
                rights reserved
              </div>
            </div>
            <div className="spacer_300"></div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default About;
