import React from "react";
import Styled, { keyframes } from "styled-components";
import { DateTime as dt } from "luxon";

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
    }
`;

const CardContent = (props) => {
  const { dataCard, searchKeyword, dataSearchAll } = props;

  return (
    <CardContainer>
      {dataCard.length ? (
        /* Render if user search the driver */
        searchKeyword.length > 0 ? dataSearchAll.map((val, i) => {
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
              </CardList>
            );
          }) :
        /* Render if user not search the driver */
        dataCard
          .map((val, i) => {
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
              </CardList>
            );
          })
      ) : (
        <Loading />
      )}
    </CardContainer>
  );
};

export default React.memo(CardContent);
