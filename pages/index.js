import React, { useEffect, useState, useMemo } from 'react';
import Styled from 'styled-components';
import { GrNext, GrPrevious } from 'react-icons/gr'

// Fetch
import { GetRandomUser } from '../services/api'

// Components
import BoxContainer from '../components/commons/BoxSearch'
import CardContent from '../components/commons/CardContent'

//Style

const ButtonPagination = Styled.button `
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 10px 0 10px;
`

const ButtonContainer = Styled.div `
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
`

export default function Home() {
  const [isData, setData] = useState([]);
  const [isPage, setPage] = useState(0);
  const [isQuery, setQuery] = useState("");

  const userPerPage = 5;
  const startIndex = isPage * userPerPage;
  const lastIndex = startIndex + userPerPage;

  const displayToUser = isData.slice(startIndex, lastIndex);

  const DataToSearch= isData.filter((val) =>
  val.name.first.toLowerCase().includes(isQuery.toLowerCase())
)

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    let mounted = true
    GetRandomUser()
      .then(items => {
        if (mounted) {
          setData(items?.data?.results)
        }
      })
      .catch(err => alert(err))
  
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div>
      <BoxContainer handleSearch={handleSearch} />
      <CardContent dataCard={displayToUser} searchKeyword={isQuery} dataSearchAll={DataToSearch}  />
      <ButtonContainer>
      <ButtonPagination disabled={isPage === 0 || isQuery.length > 0} onClick={() => setPage(isPage - 1)}> <GrPrevious color="#cdcdcd" /> Previousous Page</ButtonPagination>
      <ButtonPagination disabled={lastIndex === isData.length || isQuery.length > 0} onClick={() => setPage(isPage + 1)}>Next Page <GrNext color="#cdcdcd" /> </ButtonPagination>
      </ButtonContainer>
    </div>
  )
}
