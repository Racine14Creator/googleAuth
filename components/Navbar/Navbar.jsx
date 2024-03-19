"use client"

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"


export function Navbar() {

    const { status } = useSession()

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center py-4 px-3 shadow-lg">
                    <div className="logo">
                        <Link href={"/"}>
                            Racine14
                        </Link>
                    </div>
                    <div className="Links">
                        <ul>
                            {
                                status === 'authenticated' ? (
                                    <li>
                                        <button onClick={() => signOut()} className="btn btn-sm btn-error">Sign Out</button>
                                    </li>
                                ) : (
                                    <li>
                                        <button className="btn btn-sm btn-primary" onClick={() => signIn('google')}>Sign In</button>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}