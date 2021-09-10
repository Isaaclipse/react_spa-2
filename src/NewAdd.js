import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import "./NewAddress-styles.css";
import logo from "./assets/logo.png"; // relative path to image
import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import axios from "axios"


const schema = yup.object().shape({
  name: yup.string('Name should be a string').required('Name is required'),
  address_line1: yup.string('Address should be string').required('Address is required'),
  address_line2: yup.string('Address should be string').required('Address is required'),
  address_city: yup.string('City should be string').required('City is required'),
  address_state: yup.string('State should be string').required('State is required').matches(/^[a-zA-Z]{2}$/, 'State should be a 2 letter short Code'),
  address_zip: yup.string().required('Zip is required').matches(/^\d{5}(-\d{4})?$/, 'Zip must be valid'),
})

export default function AddAddress() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const url = 'https://api.lob.com/v1/addresses'
  const onSubmit = async (data) => {
    try {
      const res = axios.post(url, data, {
        auth: {
          username: 'your api key lives here',
          password: ''
        }
      })
      if (res.status === 200) {
        console.log(res.data.data)
      }

    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className="NewAddress">
      <div className="formContainer">
        <h3>
          <img src={logo} alt="React Logo" />
          <span>Address Form</span>
        </h3>
        <form id="demo_form">
        <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              {...register('name')}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="field">
            <label htmlFor="address1">Address 1</label>
            <input
              id="address1"
              name="address1"
              type="text"
              {...register('address_line1')}
            />
            <p>{errors.address_line1?.message}</p>
          </div>
          <div className="field">
            <label htmlFor="address2">Address 2</label>
            <input
              id="address2"
              name="address2"
              type="text"
              {...register('address_line2')}
            />
            <p>{errors.address_line2?.message}</p>
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="address_city"
              type="text"
              {...register('address_city')}
            />
            <p>{errors.address_city?.message}</p>
          </div>
          <div className="field">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="address_state"
              type="text"
              {...register('address_state')}
            />
            <p>{errors.address_state?.message}</p>
          </div>
          <div className="field">
            <label htmlFor="zip">Zip</label>
            <input
              id="zip"
              name="address_zip"
              type="text"
              {...register('address_zip')}
            />
            <p>{errors.address_zip?.message}</p>
          </div>
          {/* <div className="field">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              onChange={setFormValue("country")}
              value={getFormValue("country")}
            />
          </div> */}
          {/* IMPORTANT:
           * The submit button must be an input of type submit
           * in order htmlFor the AV Script to function properly
           */}
          <input
            id="submit-button"
            type="submit"
            className="btnSubmit"
            onClick={handleSubmit(onSubmit)}
          ></input>
        </form>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AddAddress />
  </StrictMode>,
  rootElement
)