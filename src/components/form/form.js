import React, { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import emailjs from "emailjs-com"

import Card from "../card/card"
// require("dotenv").config()

// import Button from "../button/button"

console.log(process.env.GATSBY_API_URL)

const InputRow = styled.div`
  margin: 0 auto 16px auto;
  color: #ed4337;
  font-weight: 500;
  font-size: 12px;

  &:last-of-type {
    margin: 0 auto;
  }
  label {
    color: #4b597b;
    font-size: 16px;
  }
  input {
    outline: none;
    border-radius: 5px;
    margin: 8px auto 4px;
    font-size: 12px;
    width: 100%;
    font-weight: 500;
    padding: 9px 16px;
    border: 1.5px solid rgba(75, 89, 123, 0.5);
    background: #fff;
    ${"" /* &:last-of-type {
      margin: 8px auto 0 auto;
    } */}
  }
  display: flex;
  flex-direction: column;
`

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Pole wymagane"),
  email: Yup.string()
    .email("Wpisz poprawny adres email")
    .required("Pole wymagane"),
})

const FormRegister = () => {
  const [emailSent, setEmailSent] = useState(false)

  console.log("gowno", process.env.GATSBY_API_URL)

  return (
    <Card small topLine>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, actions, resetForm }) => {
          setSubmitting(true)

          emailjs
            // .send("gmail", "tkstest", values, process.env.GATSBY_API_URL)
            .send(
              "gmail",
              "tkstest",
              {
                from_name: values.name,
                reply_to: values.email,
              },
              process.env.GATSBY_API_URL
            )
            .then(resetForm())
            .catch()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form id="contactForm" onSubmit={handleSubmit}>
            <InputRow>
              <label htmlFor="name">Nick</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Podaj swój nick"
                className={touched.name && errors.name ? "has-error" : null}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {/* {errors.name && touched.name && errors.name} */}
            </InputRow>
            <InputRow>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Podaj swój adres email"
                className={touched.email && errors.email ? "has-error" : null}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <ErrorMessage
                name="newEmail"
                component="div"
                className="invalid-feedback"
              />
            </InputRow>
            <InputRow>
              <button disabled={isSubmitting}> Zapisz się</button>
            </InputRow>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default FormRegister
