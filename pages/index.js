import React, { useEffect, useState, useCallback } from "react";
import Styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";

// Fetch
import { GetRandomUser } from "../services/api";

//Context
import { AppContext } from "../context/app-context";

// Components
import BoxContainer from "../components/commons/BoxSearch";
import CardContent from "../components/commons/CardContent";

//Style
const ButtonPagination = Styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 10px 0 10px;
`;

const ButtonContainer = Styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
`;

export default function Home() {
  const [isData, setData] = useState([]);
  const [isPage, setPage] = useState(0);
  const [isQuery, setQuery] = useState("");

  // Pagination Logic
  const userPerPage = 5;
  const startIndex = isPage * userPerPage;
  const lastIndex = startIndex + userPerPage;

  const displayToUser = isData.slice(startIndex, lastIndex);

  const DataToSearch = isData.filter((val) =>
    val.name.first.toLowerCase().includes(isQuery.toLowerCase())
  );

  useEffect(() => {
    /* this flow control is for preventing data change after reload */
    if (localStorage.getItem('dataUser') === null) {
      GetRandomUser()
      .then((items) => {
          localStorage.setItem('dataUser', JSON.stringify(items?.data?.results));
          setData(items?.data?.results);
      })
      .catch((err) => alert(err));
    } else {
      setData(JSON.parse(localStorage.getItem('dataUser')))
    }
    
  }, []);

  const handleNext = useCallback(
    () => {
      setPage(isPage + 1)
    },
    [isPage],
  );

  const handlePrev = useCallback(
    () => {
      setPage(isPage - 1)
    },
    [isPage],
  );

  // inject several parent data to child component
  const contextValue = {
    DataToSearch,
    isQuery,
    displayToUser,
    setQuery,
  };

  return (
    <div>
      <AppContext.Provider value={contextValue}>
        <BoxContainer />
        <CardContent />
        <ButtonContainer>
          <ButtonPagination
            disabled={isPage === 0 || isQuery.length > 0}
            onClick={handlePrev}
          >
            <GrPrevious color="#cdcdcd" /> Previousous Page
          </ButtonPagination>
          <ButtonPagination
            disabled={lastIndex === isData.length || isQuery.length > 0 || !Object.keys(isData).length > 0}
            onClick={handleNext}
          >
            Next Page <GrNext color="#cdcdcd" />
          </ButtonPagination>
        </ButtonContainer>
      </AppContext.Provider>
    </div>
  );
}
