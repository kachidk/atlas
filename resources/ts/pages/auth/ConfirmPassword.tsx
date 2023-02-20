import { Link, useForm } from "@inertiajs/react";
import React, { FormEvent, useEffect } from "react";

function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post("/user/confirm-password");
  };

  return (
    <div>
      <div className="p-8">
        <Link href="/" className="p-4 text-xl font-bold text-white bg-black">
          Logo
        </Link>
      </div>

      <div className="max-w-xl p-4 mx-auto">
        <h1 className="text-3xl text-center">Confirm Action</h1>
        <p className="mt-4 text-center">
          This is a secure area of the application. Please confirm your password before continuing.
        </p>

        <form className="flex flex-col pt-3 md:mt-8" onSubmit={handleSubmit}>
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
              autoFocus
              className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.password && <div className="text-sm text-red-500">{errors.password}</div>}
          </div>

          <input
            type="submit"
            value="Confirm"
            className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"
            disabled={processing}
          />
        </form>
      </div>
    </div>
  );
}

export default ConfirmPassword;
