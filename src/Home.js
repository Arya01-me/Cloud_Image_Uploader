import React, { useRef, useState } from 'react';
import axios from 'axios';
import { User, UserIcon } from 'lucide-react';

function Home() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [images, setImages] = useState([]);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setFileName(file.name);
      setFileType(file.type);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image.');
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'y2xceept'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dmtjwp2te/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      console.log('Uploaded image URL:', response.data.secure_url);
      setImages([...images, response.data]); // Add uploaded image to the images state
    } catch (error) {
      console.error('Error uploading file:', error.response ? error.response.data : error.message);
      alert(`Error uploading file: ${error.response ? error.response.data.error.message : error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (imageId) => {
    const updatedImages = images.filter(image => image.asset_id !== imageId);
    setImages(updatedImages);
  };

  return (
    <div className='place-items-center justify-center text-center container mx-auto'>
        
        <h1 className=' mb-5 text-white font-bold text-5xl'>
            Welcome to the app made in REACT JS
        </h1>
        <h1 className='mb-10 font-medium text-white text-2xl'>
            The app is designed using Tailwind
        </h1>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center border-8 p-10 w-full md:w-1/2  rounded-3xl text-black  border-gray-200'>
          <div className='flex'>
            <input
              type='file'
              ref={fileInputRef}
              onChange={handleFileChange}
              className='hidden'
              accept='image/*'
            />
            <button
              className='hover:bg-gray-500 hover:ease-in-out transition-all duration-300 text-gray-50 border-4 font-bold rounded-full  mt-10 mr-4 border-gray-300 p-4'
              onClick={handleIconClick}
            >
              Choose File
            </button>
            <button
              onClick={handleUpload}
              className='hover:bg-gray-600 hover:ease-in-out transition-all duration-300 font-bold text-md mt-10 border-4 rounded-full w-52 text-gray-50 border-gray-300 p-4 flex items-center justify-center'
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <svg className='animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-gray-300 rounded-full' viewBox='0 0 24 24'></svg>
                  Uploading..
                </>
              ) : (
                'Upload'
              )}
            </button>
          </div>
          {file && (
            <div className='mt-4 text-center'>
              <p className='text-lg text-gray-50 font-bold'>Selected File: {fileName}</p>
              <p className='text-lg text-gray-50 font-bold'>File Type: {fileType}</p>
            </div>
          )}
        </div>

        <div className='mt-16'>
          <h1 className='text-lg font-medium  mb-4'>Uploaded Images</h1>
          <div className='grid grid-cols-3 gap-4'>
           
            {images.map(image => (
              <div key={image.asset_id} className='border-2 border-gray-400 p-2 grid image-container'>
                <img
                  src={image.secure_url}
                  alt={image.public_id}
                  className='max-w-full max-h-48' // Set maximum width and height for the image
                />
                <button
                  className='top-2 right-2 text-gray-50 font-medium px-2 py-1'
                  onClick={() => handleDelete(image.asset_id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
