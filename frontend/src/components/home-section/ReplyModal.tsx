import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";
import ImageIcon from "@mui/icons-material/Image";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({open, handleClose} : {open: boolean, handleClose: any}) {
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const handleSubmit = (values: any) => {
    console.log("submit", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: "",
    },
    onSubmit: handleSubmit,
  });

  const handleSelectImage = (e: any) => {
    setImageUpload(true);
    const imageURL = e !== null ? e.target.files[0] : "";
    formik.setFieldValue("image", imageURL);
    setSelectedImage(imageURL);
    setImageUpload(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <span onClick={() => navigate("/profile/5")}>
              <Avatar
                className="cursor-pointer"
                alt="user avatar"
                src="https://cdn-icons-png.freepik.com/512/6858/6858504.png"
              />
            </span>
            <div className="w-full ">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semibold">HungNV</span>
                  <span className="text-gray-600">@spam4.me . 2m</span>
                  <img
                    className="ml-2 w-5 h-5"
                    src="https://www.citypng.com/public/uploads/preview/hd-blue-badge-verified-tick-mark-png-704081694710438adyvtbqafw.png"
                    alt="verification badge"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate("/tweet/5")}
                >
                  <p className="mb-2 p-0">
                    My twitter clone - a project creatd using react and spring
                    boot
                  </p>
                  <img
                    className="w-[28rem] border border-gray-400  p-5 rounded-md"
                    src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    alt="tweet image"
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="py-10">
            <div>
              <Avatar
                alt="user avatar"
                src="https://cdn-icons-png.freepik.com/512/6858/6858504.png"
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Express your thought!"
                      className="border-none outline-none text-xl bg-transparent"
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]" />
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
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
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
