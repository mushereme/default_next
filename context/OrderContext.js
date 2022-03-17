import { createContext, useEffect, useState } from "react";
import { loadApi } from "../utils/axios/main";

import { commands } from "../config/config"
import { message } from "antd";
import moment from "moment";


const OrderContext = createContext();

export const OrderStore = (props) => {

  const initialState = {
    loading: false,
    error: false,
    success: false,
    detail: {
      order: {},
      customer: {}
    },
    list: []
  }
    
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    state.success && message.success(state.success); clearSuccess();
    state.loading && message.loading(state.loading); clearLoading();
    state.error && message.error(state.error); clearError();
  }, [state.success, state.error]);

//  ####### ######  ######  ####### ######  
//  #     # #     # #     # #       #     # 
//  #     # #     # #     # #       #     # 
//  #     # ######  #     # #####   ######  
//  #     # #   #   #     # #       #   #   
//  #     # #    #  #     # #       #    #  
//  ####### #     # ######  ####### #     #                            

  const saveOrderDetail = async (values) => {
    
    setState({
      ...state,
      loading: true,
      error: false,
      success: false
    });
    
    console.log("CREATING: ", values);

    if(!values.customerId) {
      
    console.log("CREATING: ", values);
      var customer = await loadApi({
        method: "post",
        command: commands.createCustomer,
        parameters: {
          lastName: values.lastName,
          firstName: values.firstName,
          email: values.email,
          phone: values.phone,
          facebookUrl: values.facebook
        }
      });
      // await createCustomer({
      //   lastName: values.lastName,
      //   firstName: values.firstName,
      //   email: values.email,
      //   phone: values.phone,
      //   facebookUrl: values.facebook
      // })
      values.customerId = customer.id;
    }

    values.orderDate = moment().format("YYYY-MM-DD HH:mm:SS")
    values.orderNumber = moment().format("YYYYMMDDHHMMSS") + "-" + Math.floor(Math.random() * 99)

    var options = {
      method: "post",
      command: commands.createOrder,
      parameters: values
    }

    console.log("CREATING ORDER: ", options)

    await loadApi(options).then((resp) => {
      setState({
        ...initialState,
        success: "Захиалга хүлээн авлаа."
      })
    }).catch((err) => {
      setState({
        ...state,
        error: err
      })
    })
  }

//  #     # ####### #     # ###  #####  #       ####### 
//  #     # #       #     #  #  #     # #       #       
//  #     # #       #     #  #  #       #       #       
//  #     # #####   #######  #  #       #       #####   
//   #   #  #       #     #  #  #       #       #       
//    # #   #       #     #  #  #     # #       #       
//     #    ####### #     # ###  #####  ####### ####### 
  const checkVehicleData = async (value) => {

    setState({
      ...state, 
      loading: true, 
      error: false, 
      success: false 
    });

    var options = 
 
    await loadApi({
      method: "post",
      command: commands.getVehicle,
      parameters: {
        plateNo: value
      } 
    })
      .then((resp) => {

        setState({
          ...state,
          detail: {
            customer: state.detail.customer,
            order: resp
          },
          success: true,
          loading: false
        })
      })
      .catch((err) => {
        
        setState({
          ...state,
          error: true,
          loading: false
        })
      })

  }                                                  


//   #####  #     #  #####  ####### ####### #     # ####### ######  
//  #     # #     # #     #    #    #     # ##   ## #       #     # 
//  #       #     # #          #    #     # # # # # #       #     # 
//  #       #     #  #####     #    #     # #  #  # #####   ######  
//  #       #     #       #    #    #     # #     # #       #   #   
//  #     # #     # #     #    #    #     # #     # #       #    #  
//   #####   #####   #####     #    ####### #     # ####### #     # 
                      
  const createCustomer = async (values) => {
    setState({
      ...state, 
      loading: true,
      error: false,
      success: false 
    });

    var options = {
      method: "post",
      command: commands.createCustomer,
      parameters: values
    }
    console.log("CREATING CUSTOMER: ", options);
    await loadApi(options).then((resp) => {
      console.log("CUSTOMERCREATED: ", resp);
      setState({
        ...state,
        detail: { 
          order: state.detail.order, 
          customer: resp
        }, 
        success: true,
        loading: false
      })
    }).catch((err) => {
      console.log("ERR: ", err);
      setState({
        ...state,
        error: err,
        loading: false
      })
    })
  }

  const checkCustomerData = async (value) => {
    setState({
      ...state, 
      loading: true,
      error: false, 
      detail: { 
        order: {...state.detail.order}, 
        customer: {}
      }, 
      success: false 
    });

    var options = {
      method: "post",
      command: commands.getCustomer,
      parameters: {
        phone: value
      } 
    }
 
    await loadApi(options)
      .then((resp) => {

        setState({
          ...state,
          detail: {
            ...state.detail,
            customer: {
              ...resp
            }
          },
          success: true,
          loading: false
        })
      })
      .catch((err) => {
        
        setState({
          ...state,
          error: true,
          loading: false
        })
      })
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
    <OrderContext.Provider
      value={{
        state,
        createCustomer,
        checkCustomerData,
        checkVehicleData,
        saveOrderDetail
      }}
    >
      {props.children}
    </OrderContext.Provider>    
  );
};


export default OrderContext;