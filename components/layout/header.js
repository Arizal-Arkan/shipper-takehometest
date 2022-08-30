import React from 'react'
import Styled from "styled-components";
import Image from "next/image";

// Assets
import Shipper from "../../public/Images/shipper.png";

//Icons
import { FaRegUserCircle } from "react-icons/fa";

//Style

const Head = Styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
const User = Styled.div`
    display: flex;
    align-items: center;
`;

const UserName = Styled.span`
    color: #fe453b;
    margin-right: 10px;
`;

function Header(){
  return (
    <Head>
      <Image
        height={30}
        width={150}
        objectFit={"contain"}
        src={Shipper}
        alt="shipper"
      />

      <User>
        <p>
          Hello, <UserName> Shipper User </UserName>
        </p>
        <div>
          <FaRegUserCircle size="2em" />
        </div>
      </User>
    </Head>
  );
};

export default React.memo(Header);
