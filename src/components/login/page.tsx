/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import { ILogin } from "@/interface/auth-interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/login-schema";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useAuth } from "@/context/auth.context";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth"; 
import { useRouter } from "next/navigation";
import { LuMail, LuLock } from "react-icons/lu";
import { motion } from "framer-motion";

const LoginPage = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      toast.success("Login Successful!");
      Cookies.set("access_token", response.token, { expires: 1 });
      localStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
      router.replace("/");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message ?? "Login Failed!");
    },
  });

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    mutate(data);
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");  // This will redirect to a page where users can reset their password
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 py-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Section - Image (Only on Desktop) */}
        <div className="hidden md:flex items-center justify-center bg-orange-100 p-8">
          <img
            src="/login/login-burger.jpg"
            alt="Login Illustration"
            className="w-80 h-auto object-contain"
          />
        </div>

        {/* Right Section - Form */}
        <motion.div
          className="p-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4 text-center">
            Welcome Back 🍕
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Log in to order your favorite food in seconds
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Email
              </label>
              <div className="relative">
                <LuMail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  {...register("email")}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Password
              </label>
              <div className="relative">
                <LuLock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={isPending}
              type="submit"
              className="w-full py-3 text-white font-semibold bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:brightness-110 transition disabled:opacity-60"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <button
              onClick={handleForgotPassword}
              className="text-sm text-orange-500 hover:text-orange-700"
            >
              Forgot your password?
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
