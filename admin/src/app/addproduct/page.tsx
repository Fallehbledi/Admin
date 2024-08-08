"use client"
import AddProdAction from './addProductAction'


const AddProduct = () => {

 

  return (
    <div className="max-w-lg mx-auto bg-white p-6 md:p-8 border border-gray-200 rounded-lg shadow-md mt-8">
       
      <h2 className="text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">Add New Product</h2>
      <form action={AddProdAction} >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productName"
            type="text"
            name='name'
            placeholder="Product Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            name = "category"
            placeholder="Category"
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            name = "price"
            placeholder="Price"
           
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Quantity"
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            name = "description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name='image'
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto ml-24" 
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
