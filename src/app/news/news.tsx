"use client";
import axios from "@/axiosInstance";
import { useState, useEffect } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
interface News {
  id: number;
  title: string;
  content: string;
  image: string;
}
const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<News>>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/news/getAllNews");
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (deleteId !== null) {
      try {
        await axios.delete(`/news/delete/${deleteId}`);
        setNews(news.filter((item) => item.id !== deleteId));
        setShowModal(false);
      } catch (error) {
        console.error("Failed to delete news", error);
        alert("Failed to delete news");
      }
    }
  };

  const handleExpand = (item: News) => {
    setExpandedId(item.id);
    setFormData(item);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (id: number) => {
    try {
      const { data } = await axios.put(`/news/updateNew/${id}`, formData);
      setNews(news.map((item) => (item.id === id ? data : item)));
      setExpandedId(null);
    } catch (error) {
      console.error("Failed to update news", error);
      alert("Failed to update news");
    }
  };

  const handleCancel = () => {
    setExpandedId(null);
  };
  const handleShowModal = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[80px] px-4 py-4 font-medium text-black dark:text-white">
                Image
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Title
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Content
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {news?.map((item, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-30 w-50 rounded object-cover"
                  />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {item.title}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className="overflow-hidden text-ellipsis text-black dark:text-white"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.content}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <FaRegPenToSquare onClick={() => handleExpand(item)} />
                    </button>
                    <button
                      className="hover:text-danger"
                      onClick={() => handleShowModal(item.id)}
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {expandedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="dark:bg-gray-800 w-1/3 space-y-4 rounded-lg bg-white p-5">
              <h1 className="mb-4 text-2xl font-bold">Update News</h1>
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleInputChange}
                placeholder="Title"
                className="text-gray-900 dark:bg-gray-700 w-full rounded border px-3 py-2 dark:border-black dark:text-black"
              />
              <textarea
                type="text"
                name="content"
                value={formData.content || ""}
                onChange={handleInputChange}
                placeholder="Content"
                className="text-gray-900 dark:bg-gray-700 h-80 w-full rounded border px-3 py-2 dark:border-black dark:text-black"
              ></textarea>
              <input
                type="text"
                name="image"
                value={formData.image || ""}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="text-gray-900 dark:bg-gray-700 w-full rounded border px-3 py-2 dark:border-black dark:text-black"
              />
              <div className="flex-end flex space-x-4">
                <button
                  onClick={() => handleUpdate(expandedId)}
                  className="transform rounded-lg bg-green-800 px-3 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-300 dark:focus:ring-gray-800 transform rounded-lg px-3 py-2 text-sm font-medium text-black transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 dark:bg-black dark:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="mx-auto max-w-sm rounded bg-white p-8 shadow-lg ">
              <h2 className="mb-4 text-2xl font-bold ">Confirm Deletion</h2>
              <p className="dark:text-gray-400 mb-4 text-black">
                Are you sure you want to delete this news item?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleDelete}
                  className="dark:bg-red-500 dark:hover:bg-red-600 transform rounded bg-red px-4 py-2 text-white transition duration-300 hover:scale-105 hover:bg-red"
                >
                  Delete
                </button>
                <button
                  onClick={handleCloseModal}
                  className="dark:hover:bg-gray-600 transform rounded bg-gray px-4 py-2 text-black transition duration-300 hover:scale-105 hover:bg-gray dark:bg-black dark:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;
