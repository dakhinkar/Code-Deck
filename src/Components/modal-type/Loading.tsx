

import React from "react";
import styled from "styled-components";

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        font-size: 2rem;
        font-weight: 500;
    }
`

const Loading = () =>
 {
    return <Loader>
      <div>Loading...</div>
  </Loader>;

};

export default Loading;
