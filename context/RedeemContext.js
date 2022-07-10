import { createContext, useEffect, useState } from "react";
import { loadApi } from "../utils/axios/main";

import { commands } from "../config/config"
import { message } from "antd";
import moment from "moment";
import { useRouter } from 'next/router'

const RedeemContext = createContext();

export const RedeemStore = (props) => {

  const initialState = {
    loading: false,
    error: false,
    success: false,
    redeem: {},
    isActivated: false
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

    setState({ ...state, error: null, success: null})

    await loadApi({
      method: "post",
      url: "/redeem/check",
      parameters: {
        serialNumber: value.serialNumber
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

  const createRegistration = async (value) => {

    // console.log("==REG", value);

    setState({ ...state, error: false, success: false})

    await loadApi({
      method: "post",
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
  }
    
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
    <RedeemContext.Provider
      value={{
        state,
        checkRedeem,
        createRegistration,
        checkRedeemStatus
      }}
    >
      {props.children}
    </RedeemContext.Provider>    
  );
};


export default RedeemContext;