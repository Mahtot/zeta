import React from "react";

const MarqueeCommunity: React.FC = () => {
  const images1 = [
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-5.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-08.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-07.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-06.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-05.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-04.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-03.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-02.webp",
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-4.webp",
  ];

  const images2 = [
    "../cdn.multiversx.com/webflow/xCommunity-lower-01.webp",
    "../cdn.multiversx.com/webflow/xCommunity-upper-06.webp",
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-2.webp",
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-3.webp",
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-4.webp",
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-5.webp",
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-6.webp",
    "../cdn.multiversx.com/webflow/xCommunity-lower-01-7.webp",
  ];

  return (
    <>
      <div className="spacer_80"></div>
      <div className="container no-pad">
        <div className="marquee-community">
          <div className="marquee_content left">
            {images1.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Photo of the crowd at xDays 2023"
                loading="lazy"
                className="community_img"
              />
            ))}
            <div className="community_stat">
              <h3 className="p_160 text_lh-1">2.6k</h3>
              <div className="p_32">xDay 2023 attendees</div>
            </div>
          </div>
          <div className="marquee_content left">
            {images1.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Photo of the crowd at xDays 2023"
                loading="lazy"
                className="community_img"
              />
            ))}
            <div className="community_stat">
              <h3 className="p_160 text_lh-1">2.6k</h3>
              <div className="p_32">xDay 2023 attendees</div>
            </div>
          </div>
        </div>
        <div className="marquee-community">
          <div className="marquee_content right">
            {images2.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Photo of the crowd at xDays 2023"
                loading="lazy"
                className="community_img"
              />
            ))}
            <div className="community_stat is--teal">
              <h3 className="p_160 text_lh-1">39k</h3>
              <div className="text_maxch-20">
                <h3 className="p_32">On Discord and Telegram</h3>
              </div>
            </div>
            <div className="community_stat is--yellow">
              <h3 className="p_160 text_lh-1">1k+</h3>
              <div>
                <h3 className="p_32">
                  participants in the xDay 2023 hackathon
                </h3>
              </div>
            </div>
          </div>
          <div className="marquee_content right">
            {images2.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Photo of the crowd at xDays 2023"
                loading="lazy"
                className="community_img"
              />
            ))}
            <div className="community_stat is--teal">
              <h3 className="p_160 text_lh-1">39k</h3>
              <div className="text_maxch-20">
                <h3 className="p_32">On Discord and Telegram</h3>
              </div>
            </div>
            <div className="community_stat is--yellow">
              <h3 className="p_160 text_lh-1">1k+</h3>
              <div>
                <h3 className="p_32">
                  participants in the xDay 2023 hackathon
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeCommunity;
