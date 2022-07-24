import React, { createContext, useEffect, useState } from "react";
import { loadApi } from "../utils/axios/main";

import { message } from "antd";
import { useRouter } from 'next/router'
import { ppid } from "process";

const PartnerContext = createContext();

export const PartnerStore = (props) => {

  const initialState = {
    loading: false,
    error: false,
    success: false,
    list: [],
    isActivated: false
  }
  
  const router = useRouter();
    
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    state.success && message.success(state.success); clearSuccess();
    state.loading && message.loading(state.loading); clearLoading();
    state.error && message.error(state.error); clearError();
  }, [state.success, state.error]);

  
  const getPartners = async () => {
    // console.log("==CHECK", value);
    setState({ ...state, error: false, success: false})
    
    await loadApi({
      method: "get",
      url: "/partner",
      query: 'isActive:1&isDeleted:0',
      parameters: {}
    }).then((resp) => {
      setState({
        ...state,
        list: resp,
        // success: 'Баталгаажуулалт амжилттай хийгдлээ. Баярлалаа'
      });
    }).catch((err) => {
      setState({
        ...state,
        error: err.message
      });
    });
  };

  //   #####  #       #######    #    ######
  //  #     # #       #         # #   #     #
  //  #       #       #        #   #  #     #
  //  #       #       #####   #     # ######
  //  #       #       #       ####### #   #
  //  #     # #       #       #     # #    #
  //   #####  ####### ####### #     # #     #
  const clearLoading = () => {

    setState({
      ...state,
      loading: false
    })
  }

  const clearSuccess = () => {

    setState({
      ...state,
      success: false
    })
  }

  const clearError = () => {

    setState({
      ...state,
      error: false
    })
  }

  return (
    <PartnerContext.Provider
      value={{
        state,
        getPartners
      }}
    >
      {props.children}
    </PartnerContext.Provider>    
  );
};


export default PartnerContext;