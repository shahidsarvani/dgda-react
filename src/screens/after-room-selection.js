import React, { Component } from "react";
import PopupModal from "../PopupModal"; // Import the modal component
import "../bootstrap.min.css";
import "../mystyle.css";
import move_startshow_left from "../move-startshow-left";
import move_start_modellights_left from "../move-start-modellights-left";
import move_start_basementfloors_left from "../move-start-basementfloors-left";
import start_show_icon from "../images/icons/play-icon.svg";
import presentation_icon from "../images/icons/presentation_icon.svg";
import model_districts from "../images/icons/model-zones.svg";
import Basementfloors_icon from "../images/icons/basement-floors-updated.svg";
import videowallsactive from "../move-videowallsactive";
import "../customjqjs";
import Translator from "../translator";
import vwalls_nonactive_icon from "../images/icons/ftr-vwalls-icon.svg";

class Afterroomselection extends Component {
  constructor(props) {
    super(props);
    this.tran = new Translator(this.props.lang);
    this.state = {
      has_modal: 0,
      isModalOpen: false, // State for modal visibility
    };
  }

  componentWillUpdate(nextProps, nextState) {
    this.tran = new Translator(nextProps.lang);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.hasModal !== this.props.hasModal) {
      this.setState({
        has_modal: this.props.hasModal,
      });
    }
  }

  startShow() {
    move_startshow_left();
  }

  modelDistrict() {
    move_start_modellights_left();
  }

  basementFloors() {
    move_start_basementfloors_left();
  }

  videoWalls() {
    videowallsactive();
  }

  openPresentation() {
    // Set the modal state to open
    this.setState({ isModalOpen: true });
    fetch("http://localhost:3001/api/room/2/play_pres/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Presentation started and synchronized with VLC:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
    fetch("http://localhost:3001/api/play_default", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Popup closed" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  render() {
    return (
      <div className="after_room_selection_screen">
        <section id="dg_afrs_screen" className="dg_afrs_screen">
          <div className="container container-ctm dg_afrs_container">
            <div className="row dg_afrs_row">
              <div className="col-3 dg_afrs_col">
                <a
                  className="start_show_a"
                  href="#"
                  onClick={() => {
                    this.startShow();
                  }}
                >
                  <img
                    className="start_show_icon"
                    src={start_show_icon}
                    alt="start-show"
                  />
                  <h3 className="dg_afrs_col1_h">{this.tran.T("STARTSHOW")}</h3>
                </a>
              </div>
              {this.state.has_modal === 1 ? (
                <>
                  <div className="col-3 dg_afrs_col">
                    <a
                      className="start_modelzone_a"
                      href="#"
                      onClick={() => {
                        this.modelDistrict();
                      }}
                    >
                      <img
                        className="screensaver_icon"
                        src={model_districts}
                        alt="night-scene"
                      />
                      <h3 className="dg_afrs_col2_h">
                        {this.tran.T("MODEL_DISTRICTS")}
                      </h3>
                    </a>
                  </div>
                  <div className="col-3 dg_afrs_col">
                    <a
                      className="start_basementfloors_a"
                      href="#"
                      onClick={() => {
                        this.basementFloors();
                      }}
                    >
                      <img
                        className="basementfloors_icon"
                        src={Basementfloors_icon}
                        alt="basementfloors"
                      />
                      <h3 className="dg_afrs_col3_h">
                        {this.tran.T("BASEMENT_FLOORS")}
                      </h3>
                    </a>
                  </div>
                </>
              ) : null}
              {this.state.has_modal === 0 ? (
                <div className="col-3 dg_afrs_col">
                  <a
                    className="start_modelzone_a"
                    href="#"
                    onClick={() => {
                      this.videoWalls();
                    }}
                  >
                    <img
                      className="screensaver_icon"
                      src={vwalls_nonactive_icon}
                      alt="night-scene"
                    />
                    <h3 className="dg_afrs_col2_h">
                      {this.tran.T("VIDEO_WALL")}
                    </h3>
                  </a>
                </div>
              ) : null}
              <div className="col-3 dg_afrs_col">
                <a
                  className="start_presentation_a"
                  href="#"
                  onClick={() => {
                    this.openPresentation();
                  }}
                >
                  <img
                    className="start_show_icon"
                    src={presentation_icon}
                    alt="presentation icon"
                  />
                  <h3 className="dg_afrs_col2_h">
                    {this.tran.T("OPEN_PRESENTATION")}
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Component */}
        <PopupModal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
      </div>
    );
  }
}

export default Afterroomselection;
