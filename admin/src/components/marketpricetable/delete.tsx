
import { revalidatePath } from 'next/cache'
  

    const handleDelete = async (id:any ,data : FormData) => {
      "use server";
      const response = await fetch(`http://127.0.0.1:5000/api/price/del/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        revalidatePath('/marketprice')
      }
    };
  export default handleDelete

