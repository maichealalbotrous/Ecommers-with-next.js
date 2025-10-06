'use client'

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button";
import Link from 'next/link'

function NavBar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-around py-4">
      <div className="flex flex-col items-start gap-1 font-bold text-xl text-gray-800">
            <img
                src="/photo_2025-10-01_17-10-35.jpg"
                alt="Logo"
                className="w-10 h-10 object-cover rounded-full mb-1"
            />
            <span>M&H E-Commerce</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/Cart" className="relative">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-semibold shadow">
                2
              </span>
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <Link
              className="px-3 py-1 rounded hover:bg-blue-100 hover:text-blue-700 transition-colors"
              href="/Auth"
            >
              Login
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              className="px-3 py-1 rounded hover:bg-black hover:text-white transition-colors"
              href="/Auth"
            >
              Register
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Michael Alboutros</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/order">Order</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>LogOut</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;