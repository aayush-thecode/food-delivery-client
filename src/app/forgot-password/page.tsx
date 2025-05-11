/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { forgotPasswordSchema } from "@/schemas/forgot-password-schema";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/api/forgotpassword.api";
import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";

type ForgotPasswordForm = {
  email: string;
};

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (res) => {
      toast.success(res.message || "Reset link sent to your email");
    },
    onError: (err: any) => {
      toast.error(err?.message || "Something went wrong");
    },
  });

  const onSubmit = (data: ForgotPasswordForm) => {
    mutate(data.email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 py-8">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          Forgot Password?
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter your email to receive a reset link.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 text-white font-semibold bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:brightness-110 transition disabled:opacity-60"
          >
            {isPending ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
