import React, { createContext, useEffect, useState } from "react";
import { loadApi } from "../utils/axios/main";

import { message, notification } from "antd";
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

  // useEffect(() => {
  //   state.success && successNotification(state.success); clearSuccess();
  //   state.loading && message.loading(state.loading); clearLoading();
  //   state.error && errorNotification(state.error); clearError();
  // }, [state.success, state.error]);


  // useEffect(() => {
  //   // state.success && message.success({content: state.success, style: {marginTop: '10vh', fontSize: '28px', color: '#5BA8FF', fontWeight: 550}, duration: 3}); clearSuccess();
  //   // state.loading && message.loading(state.loading); clearLoading();
  //   state.error && message.error({content: state.error, className: "bko-notification", style: {marginTop: '10vh', fontSize: '28px', color: '#5BA8FF', fontWeight: 550}, duration: 3}); clearError();
  // }, [state.error]);
  
  // useEffect(() => {
  //   state.success && message.success({content: state.success, style: {marginTop: '10vh', fontSize: '28px', color: '#5BA8FF', fontWeight: 550}, duration: 3}); clearSuccess();
  //   // state.loading && message.loading(state.loading); clearLoading();
  //   // state.error && message.error({content: state.error, className: "bko-notification", style: {marginTop: '10vh', fontSize: '28px', color: '#5BA8FF', fontWeight: 550}, duration: 3}); clearError();
  // }, [state.success]);


  
  const checkRedeem = async (value) => {
    // console.log("==CHECK", value);
    setState({ ...state, error: false, success: false})
    let val = '';

    // value.serialNumber.split('-').map((item) => val += item);
    
    // console.log("==TEMP: ", val);

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


      errorNotification(err.message)
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
      url: "/customer/check",
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
        // error: err.message
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
        success: null
      });
      successNotification('Таны кодыг хүлээн авлаа')
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

  const successNotification = (success) => {
    // console.log("SUCC")
    message.success({content: success, style: {marginTop: '10vh', fontSize: '28px', color: '#5BA8FF', fontWeight: 550}, duration: 3});

    // notification.success({
    //   message: success,
    //   // description: '',
    //   placement: 'top',
    //   style: {
    //     width: 600,
    //     marginTop: "150px"
    //   },
    // })
  } 

  const clearSuccess = () => {

    setState({
      ...state,
      success: null
    })
  }

  const errorNotification = (error) => {
    // console.log("ERRR")
    message.error({content: error, className: "bko-notification", style: {marginTop: '10vh', fontSize: '28px', color: '#5BA8FF', fontWeight: 550}, duration: 3});
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