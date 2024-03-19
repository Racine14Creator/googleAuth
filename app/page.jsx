"use client"

import { SignIn } from "@/components/SignIn";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { UserInfo } from "@/components/UserInfo/UserInfo";

export default function Home() {

  const { status, data: session } = useSession()
  if (status === 'authenticated') {
    return (
      <div className="max-w-3xl mx-auto py-5">
        <UserInfo name={session?.user?.name} img={session?.user?.image} email={session?.user?.email} />
      </div>
    )
  } else {
    return (
      <div className="flex justify-center items-center container max-w-3xl mx-auto">
        <div className="mt-5 flex text-black min-h-full bg-white rounded-3xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <h3 className="text-black font-bold text-4xl">Bienvenu chez Racine14</h3>
          <p className="mt-5">
            Dans cette video tu vas apprendre a creer un login avec l&apos;authetification de google...
            Sois sur que tu vas avoir toutes les reponses possible par les codes aussi sont sur mon <Link target="_blank" href={'https://github.com/Racine14Creator/googleAuth'} className="link text-blue-500">Github</Link>
          </p>
          <div className="mt-10 sm:mx-auto lg:mx-auto mx-auto sm:w-full sm:max-w-sm">
            <SignIn />
          </div>
        </div>
      </div>
    )
  }
}
