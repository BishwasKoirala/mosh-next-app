'use client';
import React, { useState } from 'react'
import { CldUploadWidget ,CldImage} from 'next-cloudinary'

interface CloudinaryResult {
  public_id : string
}


const uploadPage = () => {
  const [publicId,setPublicId] = useState('');

  return (
    <>
    {publicId && 
    <CldImage src={publicId} width={270} height={180} alt ="A code note image"/>}
      <CldUploadWidget uploadPreset='rmui9qyj'
      onUpload={(result , widget) => {
        if (result.event !== 'success') return
        const info = result.info as CloudinaryResult;
        setPublicId(info.public_id)
        console.log(result);
      }}>
        {({open }) =>
        <button
        className='btn btn-primary'
        onClick={() => open()}>Upload</button>}
      </CldUploadWidget>
    </>
  )
}

export default uploadPage