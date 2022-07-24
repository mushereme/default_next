import React, { createContext, useEffect, useState } from "react";
import { loadApi } from "../utils/axios/main";

import { message } from "antd";
import { useRouter } from 'next/router'
import { ppid } from "process";

const RedeemContext = createContext();

export const RedeemStore = (props) => {

  const initialState = {
    loading: null,
    error: null,
    success: null,
    redeem: {},
    customer: {},
    isActivated: null
  }
  
  const router = useRouter();
    
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    state.success && message.success(state.success); clearSuccess();
    state.loading && message.loading(state.loading); clearLoading();
    state.error && message.error(state.error); clearError();
  }, [state.success, state.error]);

  
  const checkRedeem = async (value) => {
    // console.log("==CHECK", value);
    setState({ ...state, error: false, success: false})
    let val = '';

    value.serialNumber.split('-').map((item) => val += item);
    
    // console.log("==TEMP: ", val);

    await loadApi({
      method: "post",
      url: "/redeem/check",
      parameters: {
        serialNumber: val
      }
    }).then((resp) => {
      setState({
        ...state,
        redeem: resp,
        // success: 'Баталгаажуулалт амжилттай хийгдлээ. Баярлалаа'
      });
      router.push('/registration');
    }).catch((err) => {
      setState({
        ...state,
        error: err.message
      });
    });
  };

  const checkRegistration = async (value) => {

    setState({ ...state, success: null})

    await loadApi({
      method: "get",
      url: "/customer",
      query: "registerNumber:" + value.registerNumber,
      parameters: {}
    }).then((resp) => {
      // console.log("CUSTOMER RESPONSE: ", resp);
      setState({
        ...state,
        success: null,
        customer: resp[0],
      });
    }).catch((err) => {
      // console.log("ERR: ", err);
      setState({
        ...state,
        error: err.message
      });
    });

  };

  const createRegistration = async (value) => {

    setState({ ...state, error: false, success: false})

    await loadApi({
      method: !value?.id ? "post" : "put",
      url: "/customer",
      parameters: {
        ...value,
        bankAccount: {
          bankName: value.bankName,
          bankAccountNumber: value.bankAccountNumber
        }
      }
    }).then((resp) => {
      setState({
        ...state,
        redeem: resp,
        success: `
          МЭДЭЭЛЛИЙГ ХҮЛЭЭН АВЛАА
          ТАНЫ "БКО-БЭЛГИЙН КАРТ" ИДЭВХИЖЛЭЭ.
          ТАНЫ ҮНЭТ ЦААСНЫ ДАНС НЭЭГДСЭНИЙ ДАРАА БИД ТАНТАЙ ЭРГЭН ХОЛБОГДОХ БОЛНО
          
          ТАНЫ ХӨРӨНГӨ ОРУУЛАЛТАНД АМЖИЛТ ХҮСЭЕ.
        `
      });
      router.push('/');
    }).catch((err) => {
      // console.log("ERR: ", err);

      setState({
        ...state,
        error: err.message
      });
    });
  };
    
  const checkRedeemStatus = () => {
    console.log("STATE: ", state.redeem);
    if(!state.redeem) {
      router.push('/');
    }
  }


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
      success: null
    })
  }

  const clearError = () => {

    setState({
      ...state,
      error: false
    })
  }

  return (
    <RedeemContext.Provider
      value={{
        state,
        checkRedeem,
        createRegistration,
        checkRegistration,
        checkRedeemStatus
      }}
    >
      {props.children}
    </RedeemContext.Provider>    
  );
};


export default RedeemContext;