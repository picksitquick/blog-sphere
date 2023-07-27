"use client"
import React, { useEffect, useState } from "react";
// import Box from "@material-ui/core/Box";

const Sample = () => {
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [imageUrl, setImageUrl] = useState(null);

    // const onHandleSubmitInput = () => {

    // }

    // useEffect(() => {
    //     if (selectedImage) {
    //       setImageUrl(URL.createObjectURL(selectedImage));
    //     }
    //   }, [selectedImage]);

    return(
        <main>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
                <span className="bg-blue-400 mb-4 p-1 font-bold rounded-lg highlight text-white">FetchCraft: The Art of Data Acquisition</span>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <span className="font-bold flex flex-col items-center bg-gray-400 rounded-lg text-white">Enter Image</span>
                    <div className="mt-4">
                        <input
                        // onSubmit={onHandleSubmitInput}
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        type="file"
                        name="img"
                        // onChange={e => setSelectedImage(e.target.files[0])}
                        placeholder="Image ID"
                        required={true}
                        minLength={1}
                        maxLength={2}
                        />
                    </div>
                </div>
                <div className="mt-4 bg-blue-400 rounded-lg">
                    <button
                        type="button"
                        // onClick={onHandleSubmit}
                        className="hover:bg-blue-500 rounded-lg text-white font-bold py-2 px-4">
                        Submit
                    </button>
                    {/* {imageUrl && selectedImage && (
                    <Box mt={2} textAlign="center">
                        <div>Image Preview:</div>
                        <img src={imageUrl} alt={selectedImage.name} height="100px" />
                    </Box> */}
      {/* )} */}
                </div>
            </div>
            
        </main>
        
    );
}

export default Sample;