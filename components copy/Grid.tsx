import "../app/mvx-dev.webflow.6b4d116ab.css";

const Grid = () => {
  return (
    <div className="container z-0">
      <div className="bento-grid_12 z-0">
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
                  ~$0
                  <span className="op_60">.00</span>
                  <span className="op_60">2</span>
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
              rel="noopener noreferrer"
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
            alt="Carbon Free Planet"
            loading="eager"
            className="bento_carbon-free"
          />
          <div className="bento_curtain"></div>
        </div>
      </div>
    </div>
  );
};
export default Grid;
