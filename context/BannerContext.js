import React, { createContext, useEffect, useState } from "react";
import { loadApi } from "../utils/axios/main";

import { message } from "antd";
import { useRouter } from 'next/router'
import { ppid } from "process";

const BannerContext = createContext();

export const BannerStore = (props) => {

  const initialState = {
    loading: false,
    error: false,
    success: false,
    list: {},
    isActivated: false
  }

  const router = useRouter();    
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    state.success && message.success(state.success); clearSuccess();
    state.loading && message.loading(state.loading); clearLoading();
    state.error && message.error(state.error); clearError();
  }, [state.success, state.error]);
  
  const getBanners = async () => {
    console.log("==CHECK");
    setState({ ...state, error: false, success: false})
    
    await loadApi({
      method: "get",
      url: "/banner",
      query: 'isActive:1',
      parameters: {}
    }).then((resp) => {
      setState({
        ...state,
        list: resp
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
    <BannerContext.Provider
      value={{
        state,
        getBanners
      }}
    >
      {props.children}
    </BannerContext.Provider>    
  );
};


export default BannerContext;