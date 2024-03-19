"use client"

import Image from "next/image";
import { signIn } from "next-auth/react";

export function SignIn() {
    return (
        <button onClick={() => signIn("google")} className="flex items-center gap-4 shadow-xl rounded-lg pl-3 my-4 bg-white overflow-hidden">
            <span className="bg-white">
                <Image src={"/images/google-logo.png"} height={32} width={32} />
            </span>
            <span className="bg-blue-500 text-white px-4 py-3">Sign In with Google</span>
        </button>
    )
}