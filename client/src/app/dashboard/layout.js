"use client"

import React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Calendar, Home, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Menu", href: "/dashboard/menu", icon: Menu },
  ]

  return (
    <SidebarProvider>
      {!isMobile ? (
        <Sidebar className="border-r">
          <SidebarHeader className="border-b">
            <div className="flex items-center p-2">
              <span className="text-xl font-bold">Restaurant Admin</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <a href={item.href} className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.name}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
      ) : null}

      <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-auto">{children}</div>

        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 border-t bg-background">
            <div className="flex items-center justify-around">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center p-3 text-sm",
                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </SidebarProvider>
  )
}

