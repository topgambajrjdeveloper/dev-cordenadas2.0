import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { loginApi } from "../pages/api/login";
import es from "../locales/es";
import en from "../locales/en";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function LoginForm() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        console.log(access);
      } catch (error) {
        toast.error(error.message);
      }
    }
  });
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">{t.login}</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4">
              <div>
                <input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder={t.correo}
                  //error={formik.errors.email}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder={t.contrasena}
                  //error={formik.errors.password}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  {t.login}
                </button>
                <Link href="/">
                  <a className="text-sm text-blue-600 hover:underline">
                    {t.rec_pass}
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
function initialValues() {
  return {
    email: "",
    password: ""
  };
}
function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  };
}
