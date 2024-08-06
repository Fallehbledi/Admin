'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const Logout = async () => {
    cookies().set("Authorization", "", {
        expires: new Date(0), 
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    })
    redirect('/auth/signin')
}

export default Logout
