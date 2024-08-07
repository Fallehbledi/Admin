import Link from 'next/link';
import { revalidatePath } from 'next/cache'
const addprices= () => {
  const createprice = async (formData: FormData) => {
    'use server'
    const price = {
      id:formData.get("id"),
      name: formData.get("name"),
      price: formData.get("price"),
      image: formData.get("image"),
    };
    const response = await fetch("http://127.0.0.1:5000/api/price/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(price)
    });
    if (response.ok) {
      revalidatePath('/marketprice')
    }
  };
  
  
  return (
    <div className="p-8 mt-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
  <div className="flex justify-center mb-4">
    <h1 className="text-4xl text-gray-800 font-bold">Add Price</h1>
  </div>
  <form action={createprice}>
    <div className="p-2 w-full">
      <div className="relative">
        <label className="leading-7 text-lg text-gray-900">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>

    <div className="p-2 w-full">
      <div className="relative">
        <label className="leading-7 text-lg text-gray-900">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          className="w-full bg-white rounded border border-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div className="p-2 w-full">
      <div className="relative">
        <label className="leading-7 text-lg text-gray-900">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          className="w-full bg-white rounded border border-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div className="p-2 w-full">
      <div className="flex justify-between items-center">
        <Link
          href="/marketprice"
          className="px-4 py-3 bg-red-700 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Close
        </Link>
        <button
          type="submit"
          className="flex justify-center items-center text-white bg-green-700 border-0 py-3 px-6 focus:outline-none rounded text-xl font-bold shadow-lg w-full max-w-xs"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</div>

  )
}
export default addprices

