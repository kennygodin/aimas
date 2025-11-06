"use client";

import { Form } from "@/components/ui/form";
import { getErrorMessage } from "@/lib/errorHandler";
import {
  ResgisterFormValues,
  resgisterSchema,
} from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormTextInput } from "./FormTextInput";
import { Button } from "@/components/ui/button";

const Registration = () => {
  const [activeTab, setActiveTab] = useState<"delegate" | "exhibitor">(
    "delegate"
  );

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<ResgisterFormValues>({
    resolver: zodResolver(resgisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phoneNumber: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: ResgisterFormValues) => {
      return fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      setSuccess(data.message);
      form.reset();
    },
    onError: (error: unknown) => {
      const errorMessage = getErrorMessage(error, "Failed to register");
      setError(errorMessage);
    },
  });

  const onSubmit = async (values: ResgisterFormValues) => {
    try {
      setError(null);
      setSuccess(null);
      await registerMutation.mutateAsync(values);
    } catch (error) {
      console.error("Send error:", error);
      const errorMessage = getErrorMessage(error, "Failed to register.");
      setError(errorMessage);
    }
  };

  return (
    <div className="py-20 pt-0 bg-[#DFF8FF]">
      <div className="w-full mb-20">
        <div className="relative w-full">
          <Image
            src="/images/registeration.svg"
            alt="registeration"
            width={1920}
            height={300}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-10 mb-10">
        <div className="space-y-5 flex flex-col items-center w-full">
          <Image
            src="/images/aimas.svg"
            alt="aimas"
            width={200}
            height={200}
            priority
            className="w-40 h-auto"
          />
          <div className="font-clash text-3xl font-semibold text-center">
            Registration
          </div>
          <p className="font-sora leading-8 font-medium">
            Join us at AIMAS 2025 as a delegate or exhibitor. Secure your spot
            today!
          </p>

          <div className="flex h-16 items-center font-sora justify-center font-semibold text-xl w-full max-w-3xl mx-auto bg-[#299ADC] text-black shadow-[3px_3px_0_#000] gap-2">
            <div
              onClick={() => setActiveTab("delegate")}
              className={`relative flex items-center flex-1 justify-center px-6 py-3 cursor-pointer transition-all duration-200 
            ${activeTab === "delegate" ? "text-black" : "text-white"}`}
            >
              {activeTab === "delegate" && (
                <Image
                  src="/images/scratch.svg"
                  alt="active background"
                  fill
                  className="absolute inset-0 w-full h-full object-contain z-0"
                />
              )}
              <span className="relative z-10">Delegate Registration</span>
            </div>
            <div
              onClick={() => setActiveTab("exhibitor")}
              className={`relative flex items-center flex-1 justify-center px-6 py-3 cursor-pointer transition-all duration-200 
            ${activeTab === "exhibitor" ? "text-black" : "text-white"}`}
            >
              {activeTab === "exhibitor" && (
                <Image
                  src="/images/scratch.svg"
                  alt="active background"
                  width={240}
                  height={100}
                  className="absolute inset-0 w-full h-full object-contain z-0"
                />
              )}
              <span className="relative z-10">Exhibitor Registration</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#042035] shadow-[3px_3px_0_#299ADC] font-sora text-white max-w-7xl mx-auto px-8 py-8 space-y-10">
        <div className="flex flex-col items-center space-y-2 max-w-2xl text-center mx-auto">
          <h2 className="text-2xl font-semibold">Delegate Registration</h2>
          <p className="leading-8 font-medium">
            Register as a conference delegate to access all sessions, networking
            events, and exhibition areas
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormTextInput
                control={form.control}
                name="firstName"
                label="First Name"
                isDisabled={registerMutation.isPending}
              />
              <FormTextInput
                control={form.control}
                name="lastName"
                label="Last Name"
                isDisabled={registerMutation.isPending}
              />
              <div className="col-span-2">
                <FormTextInput
                  control={form.control}
                  name="email"
                  label="Email"
                  type="email"
                  isDisabled={registerMutation.isPending}
                />
              </div>
              <FormTextInput
                control={form.control}
                name="company"
                label="Company"
                isDisabled={registerMutation.isPending}
              />
              <FormTextInput
                control={form.control}
                name="jobTitle"
                label="Job Title"
                isDisabled={registerMutation.isPending}
              />
              <div className="col-span-2">
                <FormTextInput
                  control={form.control}
                  name="phoneNumber"
                  label="Phone Number"
                  isDisabled={registerMutation.isPending}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                variant="heroPrimary"
                className="rounded-none bg-[#299ADC] text-white font-sora h-14 px-8 shadow-[3px_3px_0_#fff]"
              >
                Register as Delegate
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
