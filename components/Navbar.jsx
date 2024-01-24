"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {

    const {status } = useSession();

    return (
        <nav className="p-4 flex justify-between items-center shadow-md">
            <Link href={'/'} className='font-bold text-lg text-green-700'>Google Auth</Link>
            {status === "authenticated" ? (
            <button onClick={()=>signOut()}
                    className='bg-slate-900 text-white px-6 py-2 rounded-md'>
                        log out
            </button>

            ) : (
                <button onClick={()=>signIn('google')}
                        className='bg-slate-900 text-white px-6 py-2 rounded-md'>
                            sign in
                </button>
            )}
        </nav>
    )
}