"use client"

import { useState } from "react"
import { CalendarIcon, CheckCircle, XCircle } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

// Sample data for bookings
const initialBookings = [
  {
    id: "1",
    name: "John Smith",
    date: new Date(2025, 2, 18),
    time: "19:00",
    persons: 4,
    status: "pending",
  },
  {
    id: "2",
    name: "Emily Johnson",
    date: new Date(2025, 2, 18),
    time: "20:30",
    persons: 2,
    status: "pending",
  },
  {
    id: "3",
    name: "Michael Brown",
    date: new Date(2025, 2, 19),
    time: "18:00",
    persons: 6,
    status: "pending",
  },
  {
    id: "4",
    name: "Sarah Davis",
    date: new Date(2025, 2, 20),
    time: "19:30",
    persons: 3,
    status: "pending",
  },
  {
    id: "5",
    name: "Robert Wilson",
    date: new Date(2025, 2, 21),
    time: "20:00",
    persons: 5,
    status: "pending",
  },
]

export default function BookingsPage() {
  const [bookings, setBookings] = useState(initialBookings)
  const [date, setDate] = useState(new Date())

  const filteredBookings = date
    ? bookings.filter((booking) => booking.date.toDateString() === date.toDateString())
    : bookings

  const handleAccept = (id) => {
    setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: "accepted" } : booking)))
  }

  const handleReject = (id) => {
    setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: "rejected" } : booking)))
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 pb-16 md:pb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Bookings</h2>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Table Reservations</CardTitle>
          <CardDescription>Manage your restaurant bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Persons</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.name}</TableCell>
                  <TableCell>{format(booking.date, "MMM dd, yyyy")}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>{booking.persons}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        booking.status === "accepted" && "bg-green-100 text-green-800",
                        booking.status === "rejected" && "bg-red-100 text-red-800",
                        booking.status === "pending" && "bg-yellow-100 text-yellow-800",
                      )}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {booking.status === "pending" && (
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleAccept(booking.id)}
                          className="h-8 w-8 text-green-600"
                        >
                          <CheckCircle className="h-4 w-4" />
                          <span className="sr-only">Accept</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleReject(booking.id)}
                          className="h-8 w-8 text-red-600"
                        >
                          <XCircle className="h-4 w-4" />
                          <span className="sr-only">Reject</span>
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {filteredBookings.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No bookings found for this date.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

