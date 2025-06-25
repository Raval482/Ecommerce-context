import { usecustomeHook } from "../context/AppContext";
import { useState } from "react";

const Home = () => {
  const { getData, setData, cart, Addcart, color } = usecustomeHook();
  const [draggedItem, setDraggedItem] = useState(null);


  const DeleteData = (id) => {
    const filterData = getData.filter((data) => data.id !== id);
    setData(filterData);
  };

  const addCart = (id) => {
    const filterData = getData.find((data) => data.id === id);
    if (filterData && !cart.some((item) => item.id === id)) {
      Addcart([...cart, filterData]);
    }
  };

  const handleDragStart = (index) => {
    setDraggedItem(index);
    console.log(index)
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow the drop

  };

  const handleDrop = (index) => {
    if (draggedItem === null) return;

    const updatedData = [...getData];
    const [draggedElement] = updatedData.splice(draggedItem, 1); // Remove dragged item
    updatedData.splice(index, 0, draggedElement); // Insert at the drop index

    setData(updatedData);
    setDraggedItem(null); // Reset dragged item
  };

  return (
    <>
      <div className="flex justify-center mt-5 w-[95%] mx-auto flex-col p-5">
        <p className="text-4xl font-bold p-5">Product Section</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {getData.length > 0 ? (
            getData.map((data, index) => (
              <div
                className={`border shadow-xl p-5 rounded-xl overflow-hidden ${color.textcolor} ${color.textbg}`}
                key={data.id}
                draggable="true"
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
              >
                <p className="text-4xl my-5 font-bold text-center">{data.title}</p>
                <p>{data.discription}</p>
                <div className="flex justify-between my-6 gap-2 items-baseline">
                  <p className="text-xl font-bold">{data.price}</p>
                  <div className="flex gap-2">
                    <button
                      className="bg-green-500 p-3 text-white text-xl rounded-xl"
                      onClick={() => addCart(data.id)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-red-500 p-3 text-white text-xl rounded-xl"
                      onClick={() => DeleteData(data.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
