// import React from 'react'
import { Oval } from "react-loader-spinner";
const Loading = () => {
      return(
        <Oval
          visible={true}
          height="80"
          width="50"
          color="blue"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      );
};

export default Loading;
