import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  width: 100%;
  min-height: 120vh;
  height: 100%;
  position: relative;
  z-index: 0;
  margin: 5rem 0;
  margin-top: 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }

  .bg {
    width: 100%;
    min-height: 200vh;
    height: 100%;
    position: relative;
    z-index: 1;
    background-image: url("https://res.cloudinary.com/divbobkmd/image/upload/v1694679619/big-ship_ci1nnu.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      min-height: 100vh;
    }

    .containers {
      height: 100%;
      width: 100%;
      font-family: var(--font);

      .title {
        width: 100%;
        text-align: center;
        font-family: var(--extra);
        color: var(--white);
        font-size: var(--heading-big);
        padding: 2rem 0;

        @media screen and (max-width: 768px) {
          font-size: var(--heading);
        }
      }

      .timeline {
        position: relative;
        width: 100%;
        max-width: 1140px;
        margin: 0 auto;
        padding: 15px 0;
      }

      .container {
        padding: 15px 30px;
        position: relative;
        background: inherit;
        width: 50%;
      }

      .container.left {
        left: -10%;
      }

      .container.right {
        left: 60%;
      }

      .container::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: calc(50% - 8px);
        right: -10px;
        background: #ffffff;
        border: 2px solid var(--secondary-color);
        border-radius: 16px;
        z-index: 1;
      }

      .container.right::after {
        left: -10px;
      }

      .container::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 2px;
        top: calc(50% - 0px);
        right: 8px;
        background: var(--secondary-color);
        z-index: 1;
      }

      .container.right::before {
        left: 8px;
      }

      .container .content {
        padding: 30px 90px 30px 30px;
        background: #091f4199;
        backdrop-filter: blur(10px);
        position: relative;
        border-radius: 0 500px 500px 0;
        transition: all 0.5s ease-in-out;
      }

      .container.right .content {
        padding: 30px 30px 30px 90px;
        border-radius: 500px 0 0 500px;
      }

      .container .content h2 {
        font-size: var(--heading-small);
        font-weight: 700;
        color: var(--white-bg);
        font-family: var(--bold);
      }

      .container .content p {
        margin: 0;
        font-size: var(--para-mini);
        color: var(--text-para);
        font-weight: 300;
        font-family: var(--light-font);
        letter-spacing: 0.5px;
      }

      @media (max-width: 768px) {
        .timeline::after {
          left: 20px;
        }

        .container.left {
          left: 0%;
        }

        .container.right {
          left: 50%;
        }

        .container {
          width: 100%;
          padding-left: 30px;
          padding-right: 15px;
        }

        .container.right {
          left: 0%;
        }

        .container.left::after,
        .container.right::after {
          left: 10px;
        }

        .container.left::before,
        .container.right::before {
          left: 10px;
          border-color: transparent var(--secondary-color) transparent
            transparent;
        }

        .container.left .content,
        .container.right .content {
          padding: 30px 30px 30px 90px;
          border-radius: 500px 0 0 500px;
        }
      }
    }
  }
`;

const leftvariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,

    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const rightvariants = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,

    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Timeline() {
  return (
    <div>
      <TimelineContainer>
        <div className="bg">
          <div className="containers">
            <h1 className="title">Why to choose us?</h1>
            <div class="timeline">
              <div class="container left">
                <div class="content">
                  <h2>Menufacturers</h2>
                  <p>
                    Menufacturers benefit from integrations with multiple
                    platforms and marketplaces, enabling efficient order
                    processing and a wide reach. They can also take advantage of
                    our "ship anytime to anywhere" service.
                  </p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Enterprises</h2>
                  <p>
                    Large enterprises can enjoy advanced features such as
                    non-robotic NDR management, reduced RTO (Return to Origin)
                    rates, comprehensive analytics, and reporting. Additionally,
                    we offer the flexibility to ship to any destination at any
                    time.
                  </p>
                </div>
              </div>
              <div
                variants={leftvariants}
                initial="hidden"
                whileInView="visible"
                class="container left"
              >
                <div class="content">
                  <h2>Small & Medium Enterprises (SMEs)</h2>
                  <p>
                    Providing SMEs with multiple channel integrations, tracking
                    notifications for buyers, multiple pickup locations, and
                    optimized shipping processes. Moreover, we offer the
                    convenience of shipping to any location, 24/7.
                  </p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Direct-to-Consumer (D2C)</h2>
                  <p>
                    Empowering D2C businesses with seamless channel integration,
                    enhanced operational efficiency, value-added services, and a
                    user-friendly platform for order management and fulfillment.
                    Plus, we ensure that your shipments can go anywhere,
                    anytime.
                  </p>
                </div>
              </div>
              <div
                variants={leftvariants}
                initial="hidden"
                whileInView="visible"
                class="container left"
              >
                <div class="content">
                  <h2>Marketplace Sellers</h2>
                  <p>
                    Empowering marketplace sellers by offering easy integrations
                    with multiple marketplaces and carts, multiple locations for
                    pickup and delivery, and enabling efficient order
                    processing. Plus, our "ship anytime to anywhere" feature
                    ensures your products reach customers globally.
                  </p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Social Sellers</h2>
                  <p>
                    With no monthly fees, a convenient cash on delivery (COD)
                    facility, reliable tracking information for their customers,
                    and the ability to ship to any destination at any time,
                    Shipyaari is an ideal choice for social sellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TimelineContainer>
    </div>
  );
}

export default Timeline;
