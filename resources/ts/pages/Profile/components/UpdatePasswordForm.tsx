import React, { useState, useRef, MouseEvent } from "react";
import { usePage, router } from "@inertiajs/react";

function UpdatePasswordForm() {
  const [currentPasswordForm, setCurrentPasswordForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const [passwordConfirmationForm, setPasswordConfirmationForm] = useState("");
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfimationRef = useRef<HTMLInputElement>(null);

  const errors = usePage().props.errors;

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.put(
      "user/password",
      {
        _method: "put",
        current_password: currentPasswordForm,
        password: passwordForm,
        password_confirmation: passwordConfirmationForm,
        preserveScroll: true,
      },
      {
        onSuccess: () => {
          setCurrentPasswordForm("");
          setPasswordForm("");
          setPasswordConfirmationForm("");
        },
        onError: (errors: any) => {
          if (errors.updatePassword.current_password) {
            setCurrentPasswordForm("");
            currentPasswordRef.current?.focus();
          }

          if (errors.updatePassword.password) {
            setPasswordForm("");
            passwordRef.current?.focus();
            setPasswordConfirmationForm("");
          }
        },
      }
    );
  }

  return (
    <div>
      <div className="mt-10 md:grid md:grid-cols-3 md:gap-6 sm:mt-0">
        {/* left side */}
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium text-gray-900"> Update Password </h3>
            <p className="mt-1 text-sm text-gray-600">
              Ensure your account is using a long, random password to stay secure.
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="current_password"
                  >
                    <span>Current Password</span>
                  </label>
                  <input
                    ref={currentPasswordRef}
                    value={currentPasswordForm}
                    onChange={(e) => setCurrentPasswordForm(e.target.value)}
                    className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="current_password"
                    type="password"
                    autoComplete="current-password"
                  />
                  {errors.updatePassword && (
                    <div className="mt-2 text-sm text-red-500">
                      {errors.updatePassword.current_password}
                    </div>
                  )}
                  <div className="mt-2">
                    <p className="text-sm text-red-600"></p>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                    <span>New Password</span>
                  </label>
                  <input
                    ref={passwordRef}
                    value={passwordForm}
                    onChange={(e) => setPasswordForm(e.target.value)}
                    className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="password"
                    type="password"
                    autoComplete="new-password"
                  />
                  {errors.updatePassword && (
                    <div className="mt-2 text-sm text-red-500">
                      {errors.updatePassword.password}
                    </div>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password_confirmation"
                  >
                    <span>Confirm Password</span>
                  </label>
                  <input
                    ref={passwordConfimationRef}
                    value={passwordConfirmationForm}
                    onChange={(e) => setPasswordConfirmationForm(e.target.value)}
                    className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="password_confirmation"
                    type="password"
                    autoComplete="new-password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">
              <button
                type="submit"
                onClick={handleSubmit}
                className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePasswordForm;
