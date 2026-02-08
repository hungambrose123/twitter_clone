import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import { useState } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object({
    content: Yup.string().required("Tweet content must not be empty"),
})

const HomeSection = () => {
    const [imageUpload, setImageUpload] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleSubmit = (values : any) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
        },
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    })

    const handleSelectImage = (e : any) => {
        setImageUpload(true);
        const imageURL = e !== null ? e.target.files[0] : "";
        formik.setFieldValue("image", imageURL);
        setSelectedImage(imageURL);
        setImageUpload(false);
    }

  return (
    <div className='space-y-5'>
        <section>
            <h1 className='text-xl py-5 font-bold opacity-90'>Home</h1>
        </section>
        <section className='pb-10'>
            <div>
                <Avatar alt='user avatar' src="https://cdn-icons-png.freepik.com/512/6858/6858504.png" />
                <div className='w-full'>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type='text'
                            placeholder='Express your thought!' 
                            className='border-none outline-none text-xl bg-transparent' 
                             {...formik.getFieldProps("content")}
                            />
                           {formik.errors.content && formik.touched.content && (
                                <span className='text-red-500'>{formik.errors.content}</span>
                           )}
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                           <div className='flex space-x-5 items-center'>
                                <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                    <ImageIcon className='text-[#1d9bf0]'/>
                                    <input type='file' className='hidden' onChange={handleSelectImage} />
                                </label>
                                <FmdGoodIcon className='text-[#1d9bf0]' />
                                <TagFacesIcon className='text-[#1d9bf0]' />
                           </div>
                           <div>
                                <Button
                                sx={{
                                    width: "100%",
                                    borderRadius: "20px",
                                    paddingY: "8px",
                                    paddingX: "20px",
                                    bgcolor: "#1e88e5",
                                }}
                                variant="contained"
                                type='submit'
                                >Tweet</Button>
                           </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section>
            {[1,1,1,1,1].map(() => <TweetCard />)}
        </section>
    </div>
  )
}

export default HomeSection