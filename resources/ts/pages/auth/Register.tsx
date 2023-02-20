import React, { ChangeEvent, FormEvent, useState } from "react";
import { router } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import backgroundImage from "./assets/images/auth-image.jpg";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const errors = usePage().props.errors;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.target.id;
    const value = e.target.value;
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.post("/register", {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.confirmPassword,
    });
  }

  return (
    <div>
      <div className="flex flex-wrap w-full">
        {/* Register Section  */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-12">
            <Link href="/" className="p-4 text-xl font-bold text-white bg-black" alt="Logo">
              Logo
            </Link>
          </div>

          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Register.</p>

            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
              {Object.keys(errors).length > 0 && (
                <div>
                  <div className="font-medium text-red-600">Whoops! Something went wrong.</div>
                  <ul className="mt-3 text-sm text-red-600 list-disc list-inside">
                    {Object.keys(errors).map((key, index) => (
                      <li key={index}>{errors[key]}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-col pt-4">
                <label htmlFor="name" className="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="confirmPassword" className="text-lg">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                value="Register"
                className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"
              />
            </form>
            <div className="pt-12 pb-12 text-center">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="font-semibold underline">
                  Log in here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Image Section  */}
        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden object-cover w-full h-screen md:block"
            src={backgroundImage}
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
