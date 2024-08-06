// import Link from 'next/link'
// import React from 'react'
// import admin from './signin'

// const pagesign = () => {
//   return (
//     <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
//     <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
//       <h2 className="mb-9 text-1sxl font-bold text-black dark:text-white sm:text-title-xl2 ">
//         Sign In 
//       </h2>

//       <form action={admin}>
//         <div className="mb-4">
//           <label className="mb-2.5 block font-medium text-black dark:text-white">
//             Email
//           </label>
//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none  focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white"
//             />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="mb-2.5 block font-medium text-black dark:text-white">
//             Password
//           </label>
//           <div className="relative">
//             <input
//               type="password"
//               name="password"
//               placeholder="password"
//               className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none  focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white "
//             />
//           </div>
//         </div>
//         <div className="mb-5">
//           <input
//             type="submit"
//             value="Sign In"
//             className="w-full cursor-pointer rounded-lg border border-green-600 bg-green-600 p-4 text-white transition hover:bg-opacity-90"
//           />
//         </div>
//         <div className="mt-6 text-center">
//           <p>
//             Don’t have any account?{" "}
//             <Link href="/auth/signup" className="text-green-600">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default pagesign
import Link from 'next/link'
import React from 'react'
import admin from './signin'

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
        <h2 className="mb-9 text-1sxl font-bold text-black dark:text-white sm:text-title-xl2 text-center">
            Sign In
          </h2>

          <form action={admin}>
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
            </div>
            <div className="mb-5">
              <input
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-green-600 bg-green-600 p-4 text-white transition hover:bg-opacity-90"
              />
            </div>
            <div className="mt-6 text-center">
              <p>
                Don’t have any account?{" "}
                <Link href="/auth/signup" className="text-green-600">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
