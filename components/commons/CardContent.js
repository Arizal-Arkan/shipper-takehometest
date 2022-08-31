import React, { useContext } from "react";
import Styled, { keyframes } from "styled-components";
import { DateTime as dt } from "luxon";

//context
import { AppContext } from "../../context/app-context";

//Icon
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

// Styled
const CardContainer = Styled.div`
    margin-top: 30px;
    display: flex;
    height: 370px;
    overflow: scroll;
    column-gap: 20px;
    width: 100%;
    white-space: nowrap;

    @media (max-width: 768px) {
      display: block;
      height: 100%;
      overflow: hidden;
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = Styled.div`
    width: 2rem;
    height: 2rem;
    margin: auto;
    border: 5px solid #f3f3f3;
    border-top: 6px solid #ff0000;
    border-radius: 100%;
    animation: ${rotate} 1s infinite linear;
`;

const CardList = Styled.article.attrs(() => ({}))`
    width: 300px;
    height: 350px;
    border-radius: 5px;
    background: #fff;

    @media (max-width: 768px) {
      height: auto;
      margin-bottom: 20px;
    }

    .card-title {
        display: flex;
        padding: 0 15px 0 15px;
        align-items: center;
        justify-content: space-between;

        p {
            color: #cdcdcd;
        }

        span {
            color: #ff837c;
        }
    }

    .card-line {
        border: 1px solid #cdcdcd;
        margin: 0;
    }

    .card-content {
        padding: 25px;

        p {
            margin-top: 0;
            margin-bottom: 2px;
            color: #c1c1c1;
            font-size: 14px;
        }

        svg {
            margin-bottom: 10px;
        }

        h3 {
            margin-top: 0;
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 500;
        }

        @media (max-width: 768px) {
          display: flex;

          svg {
            margin-right: 25px;
          }

          p:nth-child(5) {
            display: none;
          }

          h3:nth-child(6) {
            display: none;
          }

          p:nth-child(7) {
            display: none;
          }

          h3:nth-child(8) {
            display: none;
          }
        }
    }
`;

const CardContent = () => {
  const context = useContext(AppContext);

  return (
    <CardContainer>
      {context?.displayToUser?.length ? (
        /* Render if user search the driver, then show all the data ( not only 5 if more than 5 ) */
        context?.isQuery?.length > 0 ? (
          context?.DataToSearch.map((val, i) => {
            const date = dt.fromISO(val.dob.date).toFormat("yyyy LLL dd");
            return (
              <CardList key={i}>
                <div className="card-title">
                  <p>
                    Driver ID <span>2876YAB</span>{" "}
                  </p>
                  <BiDotsHorizontalRounded color="#cdcdcd" />
                </div>
                <hr className="card-line" />
                <div className="card-content">
                  <FaRegUserCircle size="5em" color="#cdcdcd" />
                  <div>
                    <p>Nama Driver</p>
                    <h3>
                      {val.name.first}, {val.name.last}
                    </h3>
                    <p>Telepon</p>
                    <h3>{val.phone}</h3>
                    <p>Email</p>
                    <h3>{val.email}</h3>
                    <p>Tanggal Lahir</p>
                    <h3>{date}</h3>
                  </div>
                </div>
              </CardList>
            );
          })
        ) : (
          /* Render if user not search the driver */
          context?.displayToUser.map((val, i) => {
            const date = dt.fromISO(val.dob.date).toFormat("yyyy LLL dd");
            return (
              <CardList key={i}>
                <div className="card-title">
                  <p>
                    Driver ID <span>2876YAB</span>{" "}
                  </p>
                  <BiDotsHorizontalRounded color="#cdcdcd" />
                </div>
                <hr className="card-line" />
                <div className="card-content">
                  <FaRegUserCircle size="5em" color="#cdcdcd" />
                  <div>
                    <p>Nama Driver</p>
                    <h3>
                      {val.name.first}, {val.name.last}
                    </h3>
                    <p>Telepon</p>
                    <h3>{val.phone}</h3>
                    <p>Email</p>
                    <h3>{val.email}</h3>
                    <p>Tanggal Lahir</p>
                    <h3>{date}</h3>
                  </div>
                </div>
              </CardList>
            );
          })
        )
      ) : (
        <Loading />
      )}
    </CardContainer>
  );
};

export default React.memo(CardContent);
