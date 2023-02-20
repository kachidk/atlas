import { Link, useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";

interface Props {
  status?: string;
}

function VerifyEmail({ status }: Props) {
  const { post, processing } = useForm({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post("/email/verification-notification");
  };

  return (
    <div>
      <div className="p-8">
        <Link href="/" className="p-4 text-xl font-bold text-white bg-black">
          Logo
        </Link>
      </div>

      <div className="max-w-xl p-4 mx-auto">
        <h1 className="text-3xl text-center">Verify Email</h1>
        <p className="mt-4 text-center">
          Thanks for signing up! Before getting started, could you verify your email address by
          clicking on the link we just emailed to you? If you didn't receive the email, we will
          gladly send you another.
        </p>

        {status === "verification-link-sent" && (
          <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
            A new verification link has been sent to the email address you provided during
            registration.
          </div>
        )}

        <form className="flex flex-col pt-3 md:mt-8" onSubmit={handleSubmit}>
          <input
            type="submit"
            value="Send Verification Email"
            className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"
            disabled={processing}
          />

          <Link href="/logout" method="post" as="button" className="mt-4 underline cursor-pointer">
            Log Out
          </Link>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
