import React from "react";
import Styled from "styled-components";
import Image from "next/image";

// Assets
import Shipper from "../../public/Images/shipper.png";

//Icons
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

//Style

const Head = Styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const User = Styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      p {
        display: none;
      }
    }
`;

const BurgerContainer = Styled.div`
    display: none;

    svg {
      margin-right: 15px;
    }

    @media (max-width: 768px) {
      display: block;
    }
`;

const LogoContain = Styled.div`
    display: flex;
`

const UserName = Styled.span`
    color: #fe453b;
    margin-right: 10px;
`;

function Header() {
  return (
    <Head>
      <LogoContain>
        <BurgerContainer>
          <GiHamburgerMenu size="2em" color="#cdcdcd" />
        </BurgerContainer>
        <Image
          height={30}
          width={150}
          objectFit={"contain"}
          src={Shipper}
          alt="shipper"
        />
      </LogoContain>

      <User>
        <p data-testid="text-container">
          Hello,{" "}
          <UserName data-testid="text-user-name"> Shipper User </UserName>
        </p>
        <div>
          <FaRegUserCircle size="2em" />
        </div>
      </User>
    </Head>
  );
}

export default React.memo(Header);
