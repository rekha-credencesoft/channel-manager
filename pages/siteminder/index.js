import styles from "../../styles/Siteminder.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { FaBed } from "react-icons/fa";
import { AiFillThunderbolt, AiFillCaretDown } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsFillTagFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GoTriangleRight } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { GrRotateLeft } from "react-icons/gr";
import { useState } from "react";
import { display } from "@mui/system";

export default function Home() {
  const [shopModal, setshopModal] = useState(false);
  const [roomType, setRoomType] = useState(false);
  const [ratePlans, setRatePlans] = useState(false);
  const handleShopModal = () => {
    setshopModal(!shopModal);
  };

  const handleRoomTypesDrop = () => {
    setRoomType(!roomType);
  };

  const handleRateDrop = () => {
    setRatePlans(!ratePlans);
  };
  // console.log(styles);
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.topBar}>
          <div className={styles.topBarButtons}>
            <div>
              <span className={styles.channelManagerFont}>
                Channel Manager:
              </span>
              <button
                onClick={handleShopModal}
                className={styles.channelSelectionBtn}
              >
                Agoda <AiFillCaretDown />
                {shopModal ? (
                  <div
                    onMouseLeave={handleShopModal}
                    className={styles.shopModal}
                    style={
                      shopModal ? { display: "block" } : { display: "none" }
                    }
                  >
                    <li>
                      <button type="button">Siteminder</button>
                    </li>
                    <li>
                      <button type="button">OYO</button>
                    </li>
                    <li>
                      <button type="button">AirBnb</button>
                    </li>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            <div className={styles.buttonsWrapper}>
              <button className={styles.bulkUpdateBtn}>Bulk Update</button>
              <span className={styles.resetLink}>
                <GrRotateLeft />
                <span>Reset</span>
              </span>
              <button className={styles.saveBtn}>Save</button>
            </div>
          </div>
          <Row className={styles.dateSection}>
            <Col className={styles.dateSelector}>
              <span>
                <GrRotateLeft size={15} style={{ marginRight: "10px" }} />
                <AiOutlineDoubleLeft
                  size={15}
                  style={{ marginRight: "10px" }}
                />
                <MdKeyboardArrowLeft />
                Jul 5, 2022
                <MdKeyboardArrowRight />
                <AiOutlineDoubleRight
                  size={15}
                  style={{ marginLeft: "10px" }}
                />
              </span>
            </Col>
            <Col className={styles.dates}>
              <Row className={styles.dateCards}>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
                <Col className={styles.dateCard}>
                  <span>Mon</span>
                  <span className={styles.boldDateText}>03</span>
                  <span>JUL</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={styles.buttonGroup}>
          <Row>
            <Col className={styles.buttons}>
              <button className={`${styles.buttonHover} ${styles.button} `}>
                All Rates & Availablity
                <span>
                  <MdOutlineArrowDropDown
                    size={22}
                    style={{ marginBottom: "2px" }}
                  />
                </span>
              </button>
              <button onClick={handleRoomTypesDrop} className={styles.button}>
                <FaBed
                  style={{ marginRight: "8px", marginBottom: "2px" }}
                  size={15}
                />
                All Room Types
                <MdOutlineArrowDropDown
                  size={22}
                  style={{ marginLeft: "2px", marginBottom: "2px" }}
                />
                <div
                  className={styles.roomTypeDrop}
                  onMouseLeave={handleRoomTypesDrop}
                  style={roomType ? { display: "block" } : { display: "none" }}
                >
                  <li>Classic Room</li>
                  <li>Deluxe Room</li>
                  <li>Twin Room</li>
                  <li>Supreme Room</li>
                </div>
              </button>
              <button className={styles.button} onClick={handleRateDrop}>
                <BsFillTagFill
                  style={{ marginRight: "8px", marginBottom: "2px" }}
                />
                All Rates Plans
                <MdOutlineArrowDropDown
                  size={22}
                  style={{ marginLeft: "2px", marginBottom: "4px" }}
                />
                <div
                  className={styles.ratePlanDrop}
                  onMouseLeave={handleRateDrop}
                  style={ratePlans ? { display: "block" } : { display: "none" }}
                >
                  <li>Bar</li>
                  <li>Honeymoon</li>
                  <li>Bed & Breakfast</li>
                </div>
              </button>
              <div className={styles.inputItem}>
                <span>
                  <BiSearch size={15} style={{ marginBottom: "1px" }} />
                </span>
                <input placeholder="Search room Rates" />
              </div>
              <span>Clear all filters</span>
            </Col>
            <Col className={styles.rightlinkText}>
              <div className={styles.linkText}>
                <GoTriangleRight size={20} style={{ marginBottom: "3px" }} />
                <span>Quick Tour - Inventory Grid</span>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.item}>
          <Row className={styles.heading}>
            <Col className={styles.Icon}>
              <FaBed size={18} style={{ marginTop: "5px" }} />
            </Col>
            <Col className={styles.leftSection}>
              <span>Deluxe View</span>
              <AiFillThunderbolt
                size={15}
                style={{ marginTop: "5px", color: "#2494d1" }}
              />
            </Col>
            <Col className={styles.midSection}>Avail</Col>
            <Col className={styles.rightSection}>
              <Row className={styles.data}>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.content}>
            <Col className={styles.Icon}></Col>
            <Col className={styles.leftSection}>
              Rath Yatra Plan (Rath Yatra Special)
              <AiFillThunderbolt
                size={15}
                style={{ marginTop: "5px", color: "#2494d1" }}
              />
            </Col>
            <Col className={styles.midSection}>Avail</Col>
            <Col className={styles.rightSection}>
              <Row className={styles.data}>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={styles.item}>
          <Row className={styles.heading}>
            <Col className={styles.Icon}>
              <FaBed size={18} style={{ marginTop: "5px" }} />
            </Col>
            <Col className={styles.leftSection}>
              <span>Deluxe View</span>
              <AiFillThunderbolt
                size={15}
                style={{ marginTop: "5px", color: "#2494d1" }}
              />
            </Col>
            <Col className={styles.midSection}>Avail</Col>
            <Col className={styles.rightSection}>
              <Row className={styles.data}>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.content}>
            <Col className={styles.Icon}></Col>
            <Col className={styles.leftSection}>
              Rath Yatra Plan (Rath Yatra Special)
              <AiFillThunderbolt
                size={15}
                style={{ marginTop: "5px", color: "#2494d1" }}
              />
            </Col>
            <Col className={styles.midSection}>Avail</Col>
            <Col className={styles.rightSection}>
              <Row className={styles.data}>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={styles.item}>
          <Row className={styles.heading}>
            <Col className={styles.Icon}>
              <FaBed size={18} style={{ marginTop: "5px" }} />
            </Col>
            <Col className={styles.leftSection}>
              <span>Deluxe View</span>
              <AiFillThunderbolt
                size={15}
                style={{ marginTop: "5px", color: "#2494d1" }}
              />
            </Col>
            <Col className={styles.midSection}>Avail</Col>
            <Col className={styles.rightSection}>
              <Row className={styles.data}>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.content}>
            <Col className={styles.Icon}></Col>
            <Col className={styles.leftSection}>
              Rath Yatra Plan (Rath Yatra Special)
              <AiFillThunderbolt
                size={15}
                style={{ marginTop: "5px", color: "#2494d1" }}
              />
            </Col>
            <Col className={styles.midSection}>Avail</Col>
            <Col className={styles.rightSection}>
              <Row className={styles.data}>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
                <Col className={styles.col}>10</Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
