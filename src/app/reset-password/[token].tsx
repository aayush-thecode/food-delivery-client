/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from "react";
import { useRouter } from 'next/router';  
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { resetPasswordSchema } from "@/schemas/forgot-password-schema"; // Define your validation schema for reset password
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/api/forgotpassword.api"; 
import { motion } from "framer-motion";
import { LuLock } from "react-icons/lu";

type ResetPasswordForm = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordPage() {
  const router = useRouter();
  const { token } = router.query; 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema), 
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { token: string; password: string }) => resetPassword(data.token, data.password),
    onSuccess: (res) => {
      toast.success(res.message || "Password reset successfully");
      router.push('/login'); 
    },
    onError: (err: any) => {
      toast.error(err?.message || "Something went wrong");
    },
  });

  const onSubmit = (data: ResetPasswordForm) => {
    if (typeof token === 'string') {
      mutate({ token, password: data.password });
    } else {
      toast.error("Invalid token");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-8">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Reset Your Password
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter your new password below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Password Input */}
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              New Password
            </label>
            <div className="relative">
              <LuLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                {...register("password")}
                type="password"
                placeholder="Enter new password"
                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              Confirm Password
            </label>
            <div className="relative">
              <LuLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm your new password"
                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:brightness-110 transition disabled:opacity-60"
          >
            {isPending ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
