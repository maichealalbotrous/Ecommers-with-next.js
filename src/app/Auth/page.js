"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Page() {
  const SignUpFormData = [
    { label_name: "First Name", input_placeholder: "First Name" },
    { label_name: "Last Name", input_placeholder: "Last Name" },
    { label_name: "Email", input_placeholder: "Your Email" },
    { label_name: "Password", input_placeholder: "Password", type: "password" },
  ];

  const SignInFormData = [
    { label_name: "Email", input_placeholder: "Your Email" },
    { label_name: "Password", input_placeholder: "Password", type: "password" },
  ];

  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const toggleAuth = () => setIsSignUp((prev) => !prev);

  const fields = isSignUp ? SignUpFormData : SignInFormData;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-md bg-white">
        <Button
          variant="secondary"
          size="icon"
          className="return_icone size-8 mb-4 ml-2 cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          onClick={() => router.push("/")}
        >
          <ChevronLeft />
        </Button>

        <h2 className="text-blue-950 text-3xl font-bold mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <div className="text-gray-600 flex justify-between items-center mb-6">
          <p>{isSignUp ? "Already a member?" : "Create Account"}</p>
          <Button
            className="cursor-pointer outline-0"
            variant="link"
            onClick={toggleAuth}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </div>
        <form className="space-y-4">
          {fields.map((e, idx) => (
            <div className="grid w-full items-center gap-2" key={idx}>
              <Label>{e.label_name}</Label>
              <Input
                type={e.type || "text"}
                placeholder={e.input_placeholder}
              />
            </div>
          ))}
          <Button type="submit" className="w-full mt-4">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}