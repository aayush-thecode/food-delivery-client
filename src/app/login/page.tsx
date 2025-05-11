import LoginPage from "@/components/login/page";
import Link from "next/link";
import * as React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-orange-50">
      <div className="flex flex-col justify-center items-center px-3 sm:px-14 py-10 w-full md:w-fit border border-gray-300 rounded-md shadow-lg bg-white">
        {/* Login Form */}
        <LoginPage />
        <div className="mt-4 tracking-wider text-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register">
              <span className="text-orange-600 font-semibold hover:text-orange-500 transition-colors">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
