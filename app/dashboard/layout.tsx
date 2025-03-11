import {  signOut } from "@/lib/auth";
import { requireuser } from "@/lib/hooks";

import React, { ReactNode } from "react";

import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DashBoardLink from "@/components/DashBoardLink";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MailPlus, Menu, UserIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, Label } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import prisma from "@/db";
import { redirect } from "next/navigation";

const changa = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});


export async function userid (userid:string){
  const user = await prisma.user.findFirst({
    where:{
      id:userid
    },
    select:{
      firstname:true,
      lastname:true,
      adress:true,
    }
  })
  if(!user?.firstname || !user.lastname || !user.adress){
    redirect('/onboarding')
  }
}


const layout = async ({ children }: { children: ReactNode }) => {
  const session = await requireuser();
  const user = await userid(session.user?.id as string)


  return (
    <div className={cn(changa.className)}>
      <div className="grid min-h-fit w-full md:grid-cols-[320px_1fr] lg:grid-cols-[380px-1fr]     ">
        <div className=" hidden w-full bg-muted min-h-screen  md:block border-r-2 border-zinc-500/10">
          <div className="flex flex-col w-full h-screen    ">
            <div className="flex text-center border-b-2 border-zinc-500/10 pb-1  w-full  content-center px-5 mb-2   ">
              {" "}
              <Link
                href="/"
                className=" w-full   text-lg font-semibold  flex items-center  text-center  "
              >
                {" "}
                <MailPlus />{" "}
                <span className="text-blue-700   rounded-md  p-2  ">
                  {" "}
                  GO <span className="text-black ">Mail</span>
                </span>{" "}
              </Link>
            </div>
            <div className="w-full h-full flex flex-col gap-3 mt-5  text-center px-auto  ">
              <DashBoardLink />
            </div>
          </div>
        </div>

        {/**
         * top baar for
         */}
        <div>
          <header className="h-12    sm:px-5   md:px-7 lg:px-9 border-b-2 border-zinc-600/10 relative  ">
            {/**
             * small devices
             */}
            <Sheet >
              <SheetTrigger asChild>
                <Button
                  className={buttonVariants({
                    variant: "outline",

                    className:
                      "md:hidden sm:block  size-8  border-2 text-center p-0.5 ",
                  })}
                >
                  <Menu className="size-5 text-black text-center " />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="pt-10 gap-5 ">
                  <DashBoardLink />
                </div>
              </SheetContent>
            </Sheet>
            {/**
             * icons for logut or layout 
             */}
            <div className="full flex mr-7   justify-end absolute top-0   duration-500  right-0 ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <span className="text-center">
                  <Button variant={"outline"} className="rounded-full p-2 mt-1">

                    <UserIcon  className="size-5    " />
                  </Button>
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="mr-5 p-2 gap-3 " >
                  <Label className="font-bold pb-5 ">My Account </Label>
                  <DropdownMenuSeparator className="mt-2" />
                  <div className="p-0.5 flex flex-col gap-1 uppercase  ">
                    <DropdownMenuItem>
                      <Link className="font-semibold" href="/dashboard">
                        dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link className="font-semibold" href="/dashboard/invoice">
                        invoice
                      </Link>
                    </DropdownMenuItem>
                  </div>
                  <div>
                    <DropdownMenuSeparator className="mt-2 " />

                    <form
                      action={async (formData) => {
                        "use server";
                        await signOut();
                      }}
                    >
                      <Button
                        className=" hover:text-red-600 duration-500 mx-2  "
                        variant={"link"}
                        type="submit"
                      >
                        Sign out
                      </Button>
                    </form>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className=" w-full  h-48  ">

            {/*
            // childrens
            */
            }
            <div className=" p-1  ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
