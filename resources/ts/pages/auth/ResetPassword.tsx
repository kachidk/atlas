import { CSRFToken } from "@/utils/CSRFToken";
import { Link, useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";

interface Props {
  status?: string;
}

function ResetPassword({ status }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    password_confirmation: "",
    token: CSRFToken,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post("/reset-password");
  };

  return (
    <div>
      <div className="p-8">
        <Link href="/" className="p-4 text-xl font-bold text-white bg-black">
          Logo
        </Link>
      </div>

      <div className="max-w-xl p-4 mx-auto">
        <h1 className="text-3xl text-center">Reset Password</h1>
        <p className="mt-4 text-center">Enter your new password.</p>

        {status && (
          <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
            {status}
          </div>
        )}

        <form className="flex flex-col pt-3 md:mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.email && <div className="text-sm text-red-500">{errors.email}</div>}
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.password && <div className="text-sm text-red-500">{errors.password}</div>}
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="password_confirmation" className="text-lg">
              Confirm password
            </label>
            <input
              type="password"
              id="password_confirmation"
              placeholder="Confirm password"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.password_confirmation && (
              <div className="text-sm text-red-500">{errors.password_confirmation}</div>
            )}
          </div>

          <input
            type="submit"
            value="Reset password"
            className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"
            disabled={processing}
          />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
