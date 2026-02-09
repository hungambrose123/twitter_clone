import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ProfileModal({open, handleClose} : {open: boolean, handleClose: any}) {
  const [uploading, setUploading] = React.useState(false);
  // const handleCloseProfileModal = () => {
  //   console.log("close modal")
  // }
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const name = event.target.name;
      const file = event.target.files[0];
      formik.setFieldValue(name, file);
    } catch (error) {
        console.log("Uploading error: "+ error)
    } finally {
      setUploading(false);
    }
  };
  const handleSubmit = (values : any) => {
    console.log("submit", values)
  }
  const formik = useFormik({
    initialValues: {
        username: "",
        website: "",
        location: "",
        bio: "",
        backgroundImage: "",
        avatar: "",
    },
    onSubmit: handleSubmit,
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton
                  onClick={handleClose}
                  aria-label="close-profile"
                >
                  <Close />
                </IconButton>
                <p className="text-sm ">Edit profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className="hideScrollball overflow-y-scroll overflow-x-hidden h-[80vh]">
              <>
              <div>
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src="https://images.squarespace-cdn.com/content/66ec3b49803ab81bf84f89e4/1726785641222-1BBJMO12LECPNQ5GWYZ2/image-asset.jpeg?content-type=image%2Fjpeg"
                      alt="currentBackgroundImage"
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleImageChange}
                      name="backgroundImageInput"
                    />
                  </div>
                </div>
                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                  <div className='relative'>
                    <Avatar 
                    src="https://cdn-icons-png.freepik.com/512/6858/6858504.png"
                    alt="profile avatar"
                    sx={{height: "10rem", width: "10rem", border: "4px solid white"}}
                    />
                    <input 
                    type='file' 
                    className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                    onChange={handleImageChange}
                    name='avatar'
                    />
                  </div>
                </div>
              </div>
              </>
              <div className='flex flex-col gap-3'>
                    <TextField
                    fullWidth
                    id='username'
                    name='username'
                    label="Username"
                    value={formik.values.username} 
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                    fullWidth
                    multiline
                    rows={4}
                    id='bio'
                    name='bio'
                    label="Biography"
                    value={formik.values.bio} 
                    onChange={formik.handleChange}
                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                    helperText={formik.touched.bio && formik.errors.bio}
                    />
                    <TextField
                    fullWidth
                    id='website'
                    name='website'
                    label="Website"
                    value={formik.values.website} 
                    onChange={formik.handleChange}
                    error={formik.touched.website && Boolean(formik.errors.website)}
                    helperText={formik.touched.website && formik.errors.website}
                    />
                    <TextField
                    fullWidth
                    id='location'
                    name='location'
                    label="Location"
                    value={formik.values.location} 
                    onChange={formik.handleChange}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                    helperText={formik.touched.location && formik.errors.location}
                    />
                    <div className='my-3'>
                        <p className='text-lg'>Birth date . Edit</p>
                        <p className='text-2xl'>14 - 05 - 1970</p>
                    </div>
                    <p className='py-3 text-lg'>Edit professional profile</p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}