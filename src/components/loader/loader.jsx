import React from "react";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 10%;
`;
 
class Loader extends React.Component {
 
    render() {
        const { isLoading } = this.props
        return (
        <div className="sweet-loading">
            <PuffLoader
                css={override}
                size={500}
                color={"#00605c"}
                loading={isLoading}
            />
        </div>
        );
    }
}

export default Loader;