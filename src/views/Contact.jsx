import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import Swal from "sweetalert2";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("yP5PwuOMjGJSnus1S");

import { FaPaperPlane } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import "./styles/Contact.css";

export const Contact = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t("Yup.NameRequired"))
      .min(3, t("Yup.NameInvalid")),
    email: Yup.string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        t("Yup.EmailInvalid")
      )
      .required(t("Yup.EmailRequired")),
    message: Yup.string().required(t("Yup.MessageRequired")),
  });

  const enviarCorreo = (setSubmitting) => {
    emailjs
      .sendForm("service_wbkkx8w", "template_idh1qql", "#contact__form")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire("Bien!", "Tu mensaje ha sido enviado!", "success");
          setSubmitting(false);
        },
        (err) => {
          console.log("FAILED...", err);
          Swal.fire("Oops...", "Algo salió mal!", "error");
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="contact__section" id="contact">
      <div className="container">
        <h2 className="contact__heading">{t("ContactTitle")}</h2>
        <Formik
          initialValues={formik.initialValues}
          validationSchema={validationSchema}
          onSubmit={({ setSubmitting }) => {
            enviarCorreo(setSubmitting);
          }}
        >
          <Form id="contact__form">
            <div className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name">{t("Form.Name")}</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  className="text-red-500"
                  component="div"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">{t("Form.Email")}</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  className="text-red-500"
                  component="div"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message">{t("Form.Message")}</label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  placeholder={t("Form.MessagePlaceholder")}
                ></Field>
                <ErrorMessage
                  name="message"
                  className="text-red-500"
                  component="div"
                />
              </div>
              <button className="contact__button" type="submit">
                {t("Form.Send")}
                <FaPaperPlane className="inline-block ml-2" />
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
