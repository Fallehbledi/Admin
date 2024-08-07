'use server'
 import {redirect} from 'next/navigation'
 import {cookies} from 'next/headers'

const admin = async (formData: FormData) => {

        const admin = Object.fromEntries(formData.entries());
        const getadmin = await fetch('http://127.0.0.1:5000/api/admin/signin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(admin)
        })
       const json = await getadmin.json()
        cookies().set("Authorization", json.token,{
            secure:true,
            httpOnly:true,
            path:"/",
            sameSite:'strict'
        })
    if(getadmin.ok){
        redirect('/dash')
    }
   
}
    
export default admin