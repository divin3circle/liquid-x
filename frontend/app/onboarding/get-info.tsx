"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  Select,
} from "@/components/ui/select";
import eth from "../../public/eth.svg";
import bsc from "../../public/base.svg";
import pol from "../../public/polygon.svg";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2).max(7),
  chain: z.enum(["ethereum", "bsc", "polygon"]),
});

function GetUserInformation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const [loading, setLoading] = useState(false);
  // const router = useRouter();
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      localStorage.setItem("userPreferences", JSON.stringify(values));
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <span className="loading loading-ring loading-md"></span>
      </div>
    );
  }

  return (
    <div className="shadow-lg shadow-primary-500 md:w-1/2 w-full backdrop-blur-xl flex flex-col items-center gap-4 py-2 rounded-md">
      <h1 className="dark:text-50 text-gray-700">
        Welcome to <span className="text-primary-500">LiquidX</span>
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full z-10 gap-2 flex flex-col"
        >
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="mx-2">
                  <FormLabel className="kanit-bold text-base dark:text-primary-50 text-gray-500 flex items-start">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What should we call you?"
                      {...field}
                      className="dark:text-primary-50 text-gray-500 lowercase
                      "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="chain"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="mx-2">
                  <FormLabel className="kanit-bold text-base dark:text-primary-50 text-gray-500 flex items-start">
                    Network
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="text-gray-500">
                        <SelectValue placeholder="Preferred Network" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ethereum" className="">
                        <div className="flex items-center gap-2">
                          <Image
                            src={eth}
                            alt="ethereum"
                            width={10}
                            height={10}
                          />
                          <h1>Ethereum</h1>
                        </div>
                      </SelectItem>
                      <SelectItem value="bsc">
                        <div className="flex items-center gap-2">
                          <Image src={bsc} alt="base" width={10} height={10} />
                          <h1>Base</h1>
                        </div>
                      </SelectItem>
                      <SelectItem value="polygon">
                        <div className="flex items-center gap-2">
                          <Image
                            src={pol}
                            alt="polygon"
                            width={10}
                            height={10}
                          />
                          <h1>Polygon</h1>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Link href="/dashboard">
            <Button
              type="submit"
              className="w-[80%] bg-primary-500 font-bold hover:bg-transparent border-2 border-primary-500 py-2 mx-4 hover:text-gray-500"
            >
              Next
            </Button>
          </Link>
        </form>
      </Form>{" "}
    </div>
  );
}

export default GetUserInformation;
