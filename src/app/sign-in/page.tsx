"use client"
 
import Image from "next/image"
import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

import { ArrowRightIcon } from '@heroicons/react/24/outline'

import githubLogo from '@/public/github-logo.svg'
import googleLogo from '@/public/google-logo.svg'
 
const formSchema = z.object({
  email: z.string().email({
    message: "Incorrect e-mail",
  }),
  password: z.string().min(8, {
    message: "Incorrect password must be at least 8 characters",
  })
})

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <main>
      <section className="flex flex-row items-center justify-center">
        <div className="max-w-[60vw] border-r w-full min-h-screen max-h-screen flex items-center justify-center">
         [Content]
        </div>

        <div className="max-w-[40vw] w-full min-h-screen max-h-screen flex flex-col px-32 items-center justify-center bg-zinc-950">
          <div className="pb-5 w-full">
            <h3 className="text-2xl pb-10 font-bold flex items-center gap-2">
              Sign In
              <ArrowRightIcon width={25} />
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>

                      <FormControl>
                        <Input placeholder="email@example.com" {...field} />
                      </FormControl>

                      <FormDescription>
                        This is your e-mail.
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>

                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>

                      <FormDescription>
                        This is your password.
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Sign In</Button>

                <div className="flex flex-row gap-5">
                  <Link href={"/sign-up"}>
                    <small className="text-zinc-400 hover:text-white transition-[2000ms]">
                      Or sign up here.
                    </small>
                  </Link>
                  <Link href={"/sign-up"}>
                    <small className="text-zinc-400 hover:text-white transition-[2000ms]">
                      Forgot password?
                    </small>
                  </Link>
                </div>
              </form>
            </Form>
          </div>
          
          <div className="flex flex-col gap-5 pt-5 w-full">
            <Button variant={"outline"}>
              <Image src={githubLogo.src} alt="Github" width={20} height={20} className="mr-2" />
              Github
            </Button>
            
            <Button>
              <Image src={googleLogo.src} alt="Google" width={20} height={25} className="mr-2" />
              Google
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}