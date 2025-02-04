import { useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TopSellerData from "../data/top-seller.json";

const TopSeller = () => {
  useEffect(() => {
    fetch(
      "https://api.shyft.to/sol/v1/marketplace/active_sellers?network=devnet&marketplace_address=JDn3zWPKcTd1qurNNjvr8YGYcVrdm8i7eHam7M6DQggo",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // setFilteredDocument(data[0].result);
      })
      .catch((error) => console.log(error));
  }, []);

  const TopSellerCards = TopSellerData.slice(0, 15).map((element, index) => (
    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4" key={index}>
      <div className="nft-card card seller-card shadow-sm">
        <div className="card-body">
          <div className="row align-items-center g-3">
            <div className="col-4">
              <div className="img-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/${element.authorAvater}`}
                  alt=""
                />
                <div
                  className={`badge bg-${element.badgeColor} position-absolute px-2 py-1`}
                >
                  #{element.id}
                </div>
              </div>
            </div>

            <div className="col-8">
              <div className="name-author">
                <Link
                  className="name d-block hover-primary text-truncate"
                  to={`${process.env.PUBLIC_URL}/author/${element.authorUsername}`}
                >
                  {element.authorName}
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip id={`topseller${element.id}`}>
                        {element.authorVerifiedText}
                      </Tooltip>
                    }
                  >
                    <i
                      className={`bi bi-patch-check-fill ms-2 text-${element.authorVerifiedColor}`}
                    />
                  </OverlayTrigger>
                </Link>

                <Link
                  className="author d-block fz-14 hover-primary text-truncate"
                  to={`${process.env.PUBLIC_URL}/author/${element.authorUsername}`}
                >
                  @{element.authorUsername}
                </Link>

                <div className="price-bid d-flex align-items-center mt-3">
                  <div className="price me-2 me-sm-3">
                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">
                      {element.totalPrice}
                    </h6>
                  </div>
                  <p className="mb-0 lh-1 d-flex align-items-center fz-14">
                    <i className={`me-1 bi ${element.totalItemsIcon}`} />{" "}
                    {element.totalItems} Items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Top Creator"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <div className="seller-wrapper">
        <div className="container">
          <div className="row g-4 justify-content-center">{TopSellerCards}</div>
        </div>
      </div>

      <Divider />

      <Footer />
    </>
  );
};

export default TopSeller;
