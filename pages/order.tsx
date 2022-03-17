import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react';
import OrderForm from "../components/Form/OrderForm";
import { 
  Form,
  message
} from "antd";

import { useRouter } from "next/router";
import OrderContext from "../context/OrderContext";

const Order: NextPage = () => {
  
  const router = useRouter()
  const context = useContext(OrderContext);
  const { state, checkCustomerData, checkVehicleData, saveOrderDetail } = context;
  
  useEffect(() => {
    setCustomerFieldValue(state.detail.customer);
  }, [state.detail.customer])

  useEffect(() => {
    setOrderFieldValue(state.detail.order);
  }, [state.detail.order])


  const [form] = Form.useForm();

  var onFieldsChange = (field: any) => {
    if(field[0].name[0] === 'phone') {
      if(`${field[0].value}`.length === 8) {
        checkCustomerData(field[0].value);
      }
    }

    if(field[0].name[0] === 'vehicleCountryCode') {
      if(field[0].value.length === 7) {
        checkVehicleData(field[0].value);
      } 
    }

  }

  var setOrderFieldValue = (detail: any) => {

    form.setFieldsValue({
      vehicle: detail?.markname + " " + detail?.modelname + " " + detail?.modificacename,
      vehicleBodyVinNumber: detail?.cabinno || ""
    })
  };

  var setCustomerFieldValue = (detail: any) => {
    
    form.setFieldsValue({
      customerId: detail?.id || "",
      lastName: detail?.lastname || "",
      firstName: detail?.firstname || "",
      email: detail?.email || "", 
      facebook: detail?.facebook || "",
      vehicle: detail?.order?.markname + " " + detail?.order?.modelname + " " + detail?.order?.modificacename,
      vehicleBodyVinNumber: detail?.order?.cabinno || ""
    })
  };

  var onFinish = (values: any) => {
    saveOrderDetail(values);  
    form.resetFields();
    router.push("/");
  }

  console.log("STATE: ", state);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderForm form={form} detail={state.detail} onChange={onFieldsChange} onFinish={onFinish}/>
    </div>
  )
}

export default Order;
