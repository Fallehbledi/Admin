import Link from "next/link";
import DeleteAction from '../../components/marketpricetable/delete'
import Addprices from "@/components/marketpricetable/addprice";
import updateprices from "@/components/marketpricetable/update";
type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
  }
    interface prices {
        id: number;
        name: string;
        price: number
        image: string;  
      }
      async function getData() {
        const res = await fetch(`http://127.0.0.1:5000/api/price/all`, { next: { revalidate: 1 } })
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      }
      export default async function Page({ searchParams }: SearchParamProps) {
        const show = searchParams?.show;
        const data = await getData()
        return (
            
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 flex flex-col items-center">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Product prices
        </h4>
      </div>
      <Link href="/marketprice/?show=true">
      <button className="px-4 py-2 text-white bg-green-950 rounded" type="submit">
      Add prices
    </button>
    </Link>
    {show && <Addprices/>}
      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Image</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
       
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Price</p>
        </div>
      </div>

      {data.map((product:prices) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={product.id}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product.image} width={60}
                  height={50} />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.name}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.price} TND
            </p>
          </div>
          <div className="flex space-x-1">
  <div>
    <form action={DeleteAction.bind(null,product.id)}>
    <button  className="px-4 py-2 text-white bg-red-600 rounded" type="submit">
      delete
    </button > 
    </form>
  </div>
  <div>
  <form action={updateprices.bind(null,product.id,product.price)}>
    <button className="px-4 py-2 text-white bg-orange-500 rounded" type="submit">
      update
    </button>
    </form>
  </div>
</div>
        </div>
      ))}
    </div>
  );
};

