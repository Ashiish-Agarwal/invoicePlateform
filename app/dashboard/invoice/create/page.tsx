"use client";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDaysIcon, NotepadText} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const Create = () => {
  const [date, setdate] = useState<Date>();

  return (
    <div className="p-2 mx-auto ">
      <Card className="w-full ">
        <CardHeader>
          <div className="flex  gap-5 ">
            <Badge
              className={buttonVariants({
                variant: "outline",
                className: "text-black h-8 text-sm  bg-accent",
              })}
            >
              Draft
            </Badge>
            <Input placeholder="test 123" className="w-52 h-8 " />
          </div>
          <CardContent>
            <div className="grid md:grid-cols-3 mt-5 gap-5 ">
              <div>
                <Label className="mb-3 ">invoice no..</Label>

                <div className="flex ">
                  <div
                    className={buttonVariants({
                      variant: "outline",
                      className: "rounded-r-none  ",
                    })}
                  >
                    #
                  </div>
                  <Input className="rounded-l-none w-64  " placeholder="5" />
                </div>
              </div>

              <div>
                <Label className="mb-3 ">currency</Label>
                <div>
                  <Select defaultValue="USD">
                    <SelectTrigger className="w-full  ">
                      {" "}
                      <SelectValue placeholder="select your currency" />{" "}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD"> United State --USD</SelectItem>
                      <SelectItem value="INR"> indian ruppee --INR</SelectItem>
                      <SelectItem value="EUR"> EUROPEAN --EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-10  ">
              <div className="flex flex-col gap-3 p-2">
                <Label>From</Label>
                <Input placeholder="your name" />
                <Input placeholder="your email" />
                <Input placeholder="your address" />
              </div>
              <div className="flex flex-col gap-3  p-2">
                <Label>TO</Label>
                <Input placeholder="to name" />
                <Input placeholder="to email" />
                <Input placeholder="to address" />
              </div>
            </div>
            <div className="grid md:grid-cols-2  gap-5    mt-4 ">
              <div className="flex flex-col gap-5 w-full   " >
                <Label>Date </Label>
                <Popover>
                  <div className="flex gap-2  ">
                    <PopoverTrigger asChild className="flex gap-2  ">
                      <div className="flex gap-2   rounded-md  w-[80%]    ">
                        <Button className="w-full  cursor-pointer " variant="outline">
                          <Label>
                            {" "}
                            {date ? (
                              <div>{format(date, "PPP")}</div>
                            ) : (
                              <p> Add the date </p>
                            )}{" "}
                          </Label>

                          <CalendarDaysIcon />
                        </Button>
                      </div>
                    </PopoverTrigger>
                  </div>
                  <PopoverContent>
                    <div>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setdate}
                        initialFocus
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            {/**
             * div saprate s
             */}
              <div className="flex flex-col gap-5 w-full   " >
                <Label >invoices due..</Label>
                <Select >
                  <SelectTrigger className="w-full   " >
                    <SelectValue
                      className=" w-full   "
                      placeholder="select due date       "
                      defaultValue="0" 
                     /> 
                  </SelectTrigger>
                  <SelectContent  className="w-56 ">
                    <SelectItem value="0 ">due on reciept</SelectItem>
                    <SelectItem value="5">net 15</SelectItem>
                    <SelectItem value="30">net 30</SelectItem>
                    
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full grid md:grid-cols-12 mt-10 p-2 gap-4  ">
  <div className="col-span-6 gap-5     ">

  <Label>description</Label>
  <Textarea placeholder="description" className="w-full bg-accent rounded-md  border-2 border-black/10 h-fit p-0.5       " />




  </div>
  <div className="col-span-2">

  <Label>Quantity</Label>
  <Input placeholder="1" type="number"/>
  </div>
  <div className="col-span-2">

  <Label>Rate</Label>
  <Input placeholder="3" type="number"/>
  </div>
  <div className="col-span-2">
  <Label>Amount</Label>
  <Input placeholder="2" type="number"/>

  </div>
</div>
{
  /**
   * worinng at here 
   */
}
<div className="  flex    justify-end    " >
  <div className="  w-1/3   flex flex-col gap-8  ">

<div className="flex gap-2  justify-between   ">
  <Label className="font-semibold ">subtotal</Label>
  <Label className="font-semibold ">$5 dollar </Label>

</div>


<div className="flex gap-3 justify-between border-t border-black/10 pt-6  ">


  <Label className="font-semibold ">total</Label>
  <Label className="font-semibold ">$5 dollar </Label>


</div>


  </div>
</div>
<div>
  <Label className="p-2 "><NotepadText/> Note</Label>
  <Textarea placeholder="Add your note here..."/>
</div>

          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Create;
