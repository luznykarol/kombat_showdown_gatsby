import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import emailjs from "emailjs-com"

import Card from "../card/card"

import Button from "../button/button"

const InputRow = styled.div`
  margin: 0 auto;
  color: #ed4337;
  font-weight: 500;
  font-size: 11px;
  min-height: 85px;

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
    margin: 4px auto;
    font-size: 12px;
    width: 100%;
    font-weight: 600;
    padding: 9px 16px;
    border: 2px solid rgba(75, 89, 123, 0.8);
    background: #fff;
    transition: 0.5s all linear;
    font-size: 16px;
    color: #4b597b;
    &:focus,
    :active {
      box-shadow: 0 0px 8px rgba(95, 121, 246, 0.8);
    }

    &:placeholder {
      color: rgba(75, 89, 123, 0.8);
      font-size: 11px;
    }
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

  return (
    <Card titleBox title="Formularz zgłoszeniowy" small>
      <Formik
        initialValues={{ name: "", email: "", team: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, actions, resetForm }) => {
          setSubmitting(true)

          emailjs
            // .send("gmail", "tkstest", values, process.env.GATSBY_API_URL)
            .send(
              "gmail",
              "tkstest",
              {
                email: values.email,
                name: values.name,
                team: values.team,
              },
              process.env.GATSBY_API_URL
            )
            .then(resetForm(), setEmailSent(!emailSent))
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
          <Form
            noValidate
            style={{
              margin: `60px auto 0 auto`,
            }}
            id="contactForm"
            onSubmit={handleSubmit}
          >
            {!emailSent ? (
              <>
                <InputRow>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Podaj swój adres email"
                    className={
                      touched.email && errors.email ? "has-error" : null
                    }
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
                  {errors.name && touched.name && errors.name}
                  <ErrorMessage
                    name="newName"
                    component="div"
                    className="invalid-feedback"
                  />
                </InputRow>
                <InputRow>
                  <label htmlFor="team">Tag Drużynowy</label>
                  <input
                    type="text"
                    name="team"
                    id="team"
                    placeholder="Podaj tag swojej drużyny ( niewymagane ) "
                    className={touched.team && errors.team ? "has-error" : null}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.team}
                  />
                </InputRow>
                <Button
                  type="submit"
                  text="Zapisz się"
                  disabled={isSubmitting}
                />
              </>
            ) : (
              <>
                <h4
                  style={{
                    textAlign: "center",
                    margin: "60px auto 0 auto",
                    fontSize: "24px",
                  }}
                >
                  Dziękujemy za zgłoszenie!
                </h4>
                <p style={{ textAlign: "center", margin: "16px auto 0 auto" }}>
                  Na podany adres mailowy wysłaliśmy potwierdzenie oraz
                  instrukcję co zrobić dalej aby wziąć udział w turnieju
                </p>
                <Button
                  style={{
                    margin: "16px auto 0 auto",
                  }}
                  text={"Powrót"}
                  type="button"
                  onClick={() => setEmailSent(false)}
                />
              </>
            )}
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default FormRegister
