"use client"

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from 'date-fns';

export default function BookingForm() {
  const [date, setDate] = useState("04/01/2021");
  const [time, setTime] = useState("06:30 PM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [persons, setPersons] = useState("1 Person");

// ...

const handlePhoneChange = (e) => {
  const value = e.target.value.replace(/\D/g, '');
  let formattedValue = '';
  if(value.length > 7){
    formattedValue = `${value.slice(0, 1)}-${value.slice(1, 4)}-${value.slice(4, 7)}-${value.slice(7)}`
  }
  else if(value.length > 4){
    formattedValue = `${value.slice(0, 1)}-${value.slice(1, 4)}-${value.slice(4, 7)}`
  }
  else if(value.length > 1){
    formattedValue = `${value.slice(0, 1)}-${value.slice(1, 4)}`
  }
  else if(value.length > 0){
    formattedValue = `${value.slice(0, 1)}`
  }
  else if(value.length == 0){
    formattedValue = ''
  }
  setPhone(formattedValue);
};
// ...

  const handleSubmit = (e) => {
    console.log({ date, time, name, phone, persons });
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-12 bg-white rounded-xl shadow-md z-20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <div className="relative">
              <Input
                id="date"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-4 pr-10 py-6 rounded-full border-gray-200 w-full"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="rounded-full border-gray-200 py-6">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM"].map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full border-gray-200 py-6"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <Input
              id="phone"
              type="text"
              placeholder="x-xxx-xxx-xxxx"
              value={phone}
              onChange={handlePhoneChange}
              className="rounded-full border-gray-200 py-6"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="persons" className="block text-sm font-medium text-gray-700">
            Total Person
          </label>
          <Select value={persons} onValueChange={setPersons}>
            <SelectTrigger className="rounded-full border-gray-200 py-6">
              <SelectValue placeholder="Select number of people" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {["1 Person", "2 People", "3 People", "4 People", "5 People", "6 People", "7 People", "8+ People"].map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full py-6 rounded-full bg-[#b33e42] hover:bg-[#9a3538] text-white font-medium"
        >
          Book A Table
        </Button>
      </form>
    </div>
  );
}