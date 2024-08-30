"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { nunito } from "@/app/fonts";
import logoImg from "@/public/logo.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event: MouseEvent) => {
        if (isMenuOpen && !(event.target as HTMLElement).closest(".menu")) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow =
        isMenuOpen && isSmallScreen ? "hidden" : "auto";
    }
  }, [isMenuOpen, isSmallScreen]);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  type MenuItem = {
    name: string;
    to: string;
  };

  const menuItems: MenuItem[] = [
    { name: "About Us", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Contact Us", to: "#contact" },
  ];

  return (
    <>
      <nav class="nav">
        <div click="off" class="nav-overlay"></div>
        <div class="nav-menu_backdrop">
          <a
            aria-label="Home"
            href="/"
            aria-current="page"
            class="nav_logo-link w-inline-block w--current"
          >
            <img
              src="../cdn.multiversx.com/webflow/MultiversX-Logo_1.svg"
              loading="lazy"
              class="mvx_logo"
            />
          </a>
          <div class="nav_link-wrap">
            <div class="nav_link-wrap_center">
              <div
                data-w-id="fe114a81-c737-8ebb-8aa2-fa66197d4c69"
                class="nav-link_drop-wrap"
              >
                <div class="drop_trigger">
                  <div class="nav-llnk">
                    <div>Individuals</div>
                    <div class="show_tablet">
                      <div class="icon_16 w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.08984 5.03516C6.33594 5.30859 6.33594 5.71875 6.08984 5.96484L1.71484 10.3398C1.44141 10.6133 1.03125 10.6133 0.785156 10.3398C0.511719 10.0938 0.511719 9.68359 0.785156 9.4375L4.69531 5.52734L0.785156 1.58984C0.511719 1.34375 0.511719 0.933594 0.785156 0.6875C1.03125 0.414062 1.44141 0.414062 1.6875 0.6875L6.08984 5.03516Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_open">
                  <div class="drop_holder">
                    <div clip="true" class="nav-link_product-wrap">
                      <div class="nav-link_product-col">
                        <img
                          src="../cdn.multiversx.com/webflow/nav-individual-grid.webp"
                          loading="lazy"
                          class="nav-individual_grid"
                        />
                        <img
                          src="../cdn.multiversx.com/webflow/nav-individuals-visual.webp"
                          loading="lazy"
                          class="nav-individual_visual"
                        />
                        <div class="nav-link_product-col-inside">
                          <a
                            href="https://help.multiversx.com/en/"
                            target="_blank"
                            class="nav-link_separate w-inline-block"
                          >
                            <div class="p_14">Support</div>
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
                            href="https://linktr.ee/multiversx"
                            target="_blank"
                            class="nav-link_separate w-inline-block"
                          >
                            <div class="p_14">See official channels</div>
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
                      <div class="nav-link_product-col-menu">
                        <a
                          href="/individuals/get-started"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3c1882ddd272af2a20ff4_get%20started.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Get Started</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Blockchain to the power of X
                            </div>
                          </div>
                        </a>
                        <a
                          href="/egld"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3c26ad535507c01e3f39b_egld.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">The EGLD Token</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              eGold is the currency of MultiversX
                            </div>
                          </div>
                        </a>
                        <a
                          href="/on-chain-2fa"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3c26ab329b571e668cd5f_2fa.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">On-chain 2FA</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Easy to setup, impossible to break, unique to
                              MultiversX
                            </div>
                          </div>
                        </a>
                        <a
                          href="/staking"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3c2698b28607b2100ea6a_staking.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Staking</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Secure the network and earn rewards
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://environment.multiversx.com/"
                          target="_blank"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3c18833707c9f6a095d66_Sustainability.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
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
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Towards a more responsible and sustainable
                              infrastructure
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="drop-open_icon individuals w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 42 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4768 1.34622C19.2507 -0.0395971 21.7319 -0.0692252 23.5383 1.27385L42 15H0L17.4768 1.34622Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-w-id="f48ab5da-4350-7b50-2de3-258870a7d043"
                class="nav-link_drop-wrap"
              >
                <div class="drop_trigger">
                  <div class="nav-llnk">
                    <div>Builders</div>
                    <div class="show_tablet">
                      <div class="icon_16 w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.08984 5.03516C6.33594 5.30859 6.33594 5.71875 6.08984 5.96484L1.71484 10.3398C1.44141 10.6133 1.03125 10.6133 0.785156 10.3398C0.511719 10.0938 0.511719 9.68359 0.785156 9.4375L4.69531 5.52734L0.785156 1.58984C0.511719 1.34375 0.511719 0.933594 0.785156 0.6875C1.03125 0.414062 1.44141 0.414062 1.6875 0.6875L6.08984 5.03516Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_open">
                  <div class="drop_holder">
                    <div clip="true" class="nav-link_product-wrap">
                      <div class="nav-link_product-col">
                        <div class="nav-top-cta">
                          <div class="spacer_100"></div>
                          <div class="spacer_24"></div>
                          <a
                            href="https://2023.xday.com/hackathon"
                            target="_blank"
                            class="btn teal-small w-inline-block"
                          >
                            <div
                              color-mode="light"
                              class="btn_bg bg_dark-teal"
                            ></div>
                            <div class="p_14">xDay 2023 hackathon</div>
                            <div class="icon_14 w-embed">
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
                          <img
                            src="../cdn.multiversx.com/webflow/hackaton-bg.webp"
                            alt="/Hackaton"
                            loading="lazy"
                            class="nav-top-cta_img"
                          />
                        </div>
                        <div class="nav-link_product-col-inside">
                          <a
                            href="https://docs.multiversx.com/validators/overview"
                            target="_blank"
                            class="nav-link_separate w-inline-block"
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
                          <a
                            href="https://docs.multiversx.com/"
                            target="_blank"
                            class="nav-link_separate w-inline-block"
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
                            href="https://t.me/MultiversXDevelopers"
                            target="_blank"
                            class="nav-link_separate w-inline-block"
                          >
                            <div class="p_14">Developer Discord</div>
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
                      <div class="nav-link_product-col-menu">
                        <a
                          href="/builders-hub"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3c1882ddd272af2a20ff4_get%20started.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Builders Hub</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Discover all MultiversX has to offer and take the
                              first step today
                            </div>
                          </div>
                        </a>
                        <a
                          href="/builders/build-your-first-multiversx-dapp-in-30-minutes"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3d9e55f9bb2f5fffc56d1_Fundamentals.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Tutorials</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Your journey from Web2 starts here
                            </div>
                          </div>
                        </a>
                        <a
                          href="/builders/builder-tools-resources"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65f01ffb67f3d7c7ea49c5b1_Releases.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Tools &amp; Resources</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Curated library of developer resources
                            </div>
                          </div>
                        </a>
                        <a
                          href="/releases"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3d9e48860f258227b942e_Technology.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Releases</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Here’s a feed to help you catch up with our latest
                              releases
                            </div>
                          </div>
                        </a>
                        <a
                          href="/roadmap"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3d9e44739f67bd9f4b4d4_Become%20a%20Validator.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Tech Roadmap</div>
                              <div class="link-flavor new">
                                <div class="powered-text_inner">
                                  <div class="text_semibold text_gradient-green-cyan">
                                    NEW
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Provides a regularly updated
                              <br />
                              high-level overview
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="drop-open_icon builders w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 42 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4768 1.34622C19.2507 -0.0395971 21.7319 -0.0692252 23.5383 1.27385L42 15H0L17.4768 1.34622Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <a href="/sovereign-chains" class="nav-llnk w-inline-block">
                <div>Sovereign Chains</div>
                <div class="show_tablet">
                  <div class="icon_16 w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.08984 5.03516C6.33594 5.30859 6.33594 5.71875 6.08984 5.96484L1.71484 10.3398C1.44141 10.6133 1.03125 10.6133 0.785156 10.3398C0.511719 10.0938 0.511719 9.68359 0.785156 9.4375L4.69531 5.52734L0.785156 1.58984C0.511719 1.34375 0.511719 0.933594 0.785156 0.6875C1.03125 0.414062 1.44141 0.414062 1.6875 0.6875L6.08984 5.03516Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div
                data-w-id="f997643b-91a8-ddf8-1fe6-9295ab5ad346"
                class="nav-link_drop-wrap"
              >
                <div class="drop_trigger">
                  <div class="nav-llnk">
                    <div>Ecosystem</div>
                    <div class="show_tablet">
                      <div class="icon_16 w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.08984 5.03516C6.33594 5.30859 6.33594 5.71875 6.08984 5.96484L1.71484 10.3398C1.44141 10.6133 1.03125 10.6133 0.785156 10.3398C0.511719 10.0938 0.511719 9.68359 0.785156 9.4375L4.69531 5.52734L0.785156 1.58984C0.511719 1.34375 0.511719 0.933594 0.785156 0.6875C1.03125 0.414062 1.44141 0.414062 1.6875 0.6875L6.08984 5.03516Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_open">
                  <div class="drop_holder">
                    <div clip="true" class="nav-link_product-wrap">
                      <div class="nav-link_product-col">
                        <div class="nav_partner-apply-wrap">
                          <div class="nav_partner-apply">
                            <div>
                              <div class="p_14">Partner Program</div>
                              <div class="p_14 text_neutral-400">
                                Discover exciting opportunities
                              </div>
                            </div>
                            <div class="spacer_24"></div>
                            <a
                              href="https://form.typeform.com/to/SjFRIQaj"
                              target="_blank"
                              class="btn teal-small w-inline-block"
                            >
                              <div
                                color-mode="light"
                                class="btn_bg bg_dark-teal"
                              ></div>
                              <div class="p_14">Become a Partner</div>
                              <div class="icon_14 w-embed">
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
                        </div>
                        <img
                          src="../cdn.multiversx.com/webflow/The-Marble-Dyson-Marvel4-1024x1024-2.webp"
                          loading="lazy"
                          class="nav_partner-visual"
                        />
                      </div>
                      <div class="nav-link_product-col-menu">
                        <a
                          href="/ecosystem"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b6146217c3ad76b11511ad_Discover.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Discover</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Explore projects and partners from the MultiversX
                              ecosystem
                            </div>
                          </div>
                        </a>
                        <a
                          href="/ecosystem/projects"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b6146330193b184e32617d_Projects.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Projects</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              A new dimension of utility built and launched on
                              MultiversX
                            </div>
                          </div>
                        </a>
                        <a
                          href="/ecosystem/partners"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b6146221078c5d27b23d37_Partners.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Partners</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Seamlessly connect with leading platforms and
                              protocols
                            </div>
                          </div>
                        </a>
                        <a
                          href="/ecosystem/validators"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b61462bcfbf52a02d3deca_Validators.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Validators</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Help secure the network and earn rewards
                            </div>
                          </div>
                        </a>
                        <a
                          href="/ecosystem/service-providers"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b6146330193b184e326188_Service%20Providers.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Service Providers</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Bring your business to the MultiversX network
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="drop-open_icon ecosystem w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 42 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4768 1.34622C19.2507 -0.0395971 21.7319 -0.0692252 23.5383 1.27385L42 15H0L17.4768 1.34622Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-w-id="d4a768de-1b55-7610-cebd-14c0127a8cd3"
                class="nav-link_drop-wrap"
              >
                <div class="drop_trigger">
                  <div class="nav-llnk">
                    <div>Community</div>
                    <div class="show_tablet">
                      <div class="icon_16 w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.08984 5.03516C6.33594 5.30859 6.33594 5.71875 6.08984 5.96484L1.71484 10.3398C1.44141 10.6133 1.03125 10.6133 0.785156 10.3398C0.511719 10.0938 0.511719 9.68359 0.785156 9.4375L4.69531 5.52734L0.785156 1.58984C0.511719 1.34375 0.511719 0.933594 0.785156 0.6875C1.03125 0.414062 1.44141 0.414062 1.6875 0.6875L6.08984 5.03516Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_open">
                  <div class="drop_holder">
                    <div clip="true" class="nav-link_product-wrap">
                      <div class="nav-link_product-col">
                        <div class="nav-top-cta">
                          <div class="spacer_80"></div>
                          <a
                            href="https://www.youtube.com/watch?v=fbQNmGRnUsI"
                            target="_blank"
                            class="btn teal-small w-inline-block"
                          >
                            <div
                              color-mode="light"
                              class="btn_bg bg_dark-teal"
                            ></div>
                            <div class="p_14">xDay 2023 Highlights</div>
                            <div class="icon_14 w-embed">
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
                          <img
                            src="../cdn.multiversx.com/webflow/xday-stage.webp"
                            alt="xDay 2023 Stage with crowd in the foreground"
                            loading="lazy"
                            class="nav-top-cta_img"
                          />
                          <div class="nav_top-cta-gradient"></div>
                        </div>
                        <img
                          src="../cdn.multiversx.com/webflow/nav-community-visual.webp"
                          loading="lazy"
                          class="nav_community-visual"
                        />
                        <img
                          src="../cdn.multiversx.com/webflow/nav-individual-grid.webp"
                          loading="lazy"
                          class="nav-individual_grid"
                        />
                        <div class="nav-social_wrap">
                          <div class="nav-social_top">
                            <div class="p_14 text_neutral-500">Connect</div>
                            <a
                              href="https://linktr.ee/multiversx"
                              target="_blank"
                              class="nav-link_separate w-inline-block"
                            >
                              <div class="p_14">See official channels</div>
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
                          <div class="spacer_8"></div>
                          <div class="social_wrap is-nav">
                            <a
                              aria-label="Twitter / X Profile"
                              href="https://twitter.com/MultiversX"
                              target="_blank"
                              class="st-custom-button is--nav w-inline-block"
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
                              class="st-custom-button is--nav w-inline-block"
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
                              class="st-custom-button is--nav w-inline-block"
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
                              class="st-custom-button is--nav w-inline-block"
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
                              class="st-custom-button is--nav w-inline-block"
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
                        </div>
                      </div>
                      <div class="nav-link_product-col-menu">
                        <a
                          href="/events"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b61f7115a1fb486e920208_Events%20Calendar.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Events Calendar</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Meet us at events across the world
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://governance.multiversx.com/"
                          target="_blank"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b61f7156665f919953817e_Governance.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
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
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              A new dimension of utility built and launched on
                              MultiversX
                            </div>
                          </div>
                        </a>
                        <a href="#" class="nav-llnk_drop-down w-inline-block">
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b61f71fc4c59f7f2a98eaa_Ambassadors%20Program.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Ambassador Program</div>
                              <div data-twothree-count="" class="link-flavor">
                                <div class="powered-text_inner">
                                  <div>SOON</div>
                                </div>
                              </div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Seamlessly connect with leading platforms and
                              protocols
                            </div>
                          </div>
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b918468fd49cda3f2d71e5_overlay.webp"
                            loading="lazy"
                            alt=""
                            class="nav-link_disabled"
                          />
                        </a>
                        <a
                          href="/faq"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b61f7116e06158e24eaccb_FAQ.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">FAQ</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              The answers to the questions you most seek
                            </div>
                          </div>
                        </a>
                        <a
                          href="/blog"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b61f71a0e2af577b8694f6_Blog.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Blog</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Latest posts on ecosystem, research, technology,
                              and more
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="drop-open_icon community w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 42 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4768 1.34622C19.2507 -0.0395971 21.7319 -0.0692252 23.5383 1.27385L42 15H0L17.4768 1.34622Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-w-id="f1e9dc3c-c342-6fab-59d5-cd53f0afecd5"
                class="nav-link_drop-wrap"
              >
                <div class="drop_trigger">
                  <div class="nav-llnk">
                    <div>About</div>
                    <div class="show_tablet">
                      <div class="icon_16 w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.08984 5.03516C6.33594 5.30859 6.33594 5.71875 6.08984 5.96484L1.71484 10.3398C1.44141 10.6133 1.03125 10.6133 0.785156 10.3398C0.511719 10.0938 0.511719 9.68359 0.785156 9.4375L4.69531 5.52734L0.785156 1.58984C0.511719 1.34375 0.511719 0.933594 0.785156 0.6875C1.03125 0.414062 1.44141 0.414062 1.6875 0.6875L6.08984 5.03516Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_open">
                  <div class="drop_holder">
                    <div clip="true" class="nav-link_product-wrap">
                      <div class="nav-link_product-col">
                        <img
                          src="../cdn.multiversx.com/webflow/nav-about-x.webp"
                          loading="lazy"
                          class="nav_about-visual"
                        />
                        <div class="spacer_200"></div>
                      </div>
                      <div class="nav-link_product-col-menu">
                        <a
                          href="/transformation"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b6267ac3edfa5897b2fcbe_Arrow%20top%20right.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">From Elrond to MultiversX</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              The story of our transformation from Elrond to
                              MultiversX
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://files.multiversx.com/MultiversX-Media-Kit.zip"
                          target="_blank"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b6267a479f8f780240986d_Media%20Kit.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Media Kit</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Latest media appearances, access to your official
                              media kit
                            </div>
                          </div>
                        </a>
                        <a
                          href="/careers"
                          class="nav-llnk_drop-down w-inline-block"
                        >
                          <img
                            src="../cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b3d9e411413c5774b6a887_Migration%20Guide.svg"
                            loading="lazy"
                            alt=""
                            class="icon_20"
                          />
                          <div class="f_vertical-left">
                            <div class="nav-llnk_drop-down-text-wrap">
                              <div class="p_14">Careers</div>
                            </div>
                            <div class="spacer_4"></div>
                            <div class="p_14 text_neutral-500">
                              Join one of the most resourceful tech companies in
                              the world
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="drop-open_icon about w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 42 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4768 1.34622C19.2507 -0.0395971 21.7319 -0.0692252 23.5383 1.27385L42 15H0L17.4768 1.34622Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="Navigation"
            aria-label="Mobile Navigation"
            class="nav-menu_button"
          >
            <div
              data-is-ix2-target="1"
              class="nav-menu_lottie"
              data-w-id="fe9aaf11-fc83-e8d2-99e4-79d077c1cfad"
              data-animation-type="lottie"
              data-src="https://cdn.prod.website-files.com/63c67e1faff95c11945da274/63c67e1faff95c0ab35da28c_lottieflow-menu-nav-09-000000-easey.json"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="2.5"
              data-duration="0"
              data-ix2-initial-state="0"
            ></div>
          </div>
        </div>
      </nav>
      {isSmallScreen && isMenuOpen && (
        <div
          className={`${styles.overlay} overlay`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
