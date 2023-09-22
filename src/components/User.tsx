import { useFormik } from "formik";
import { useLocation, useParams } from "react-router-dom";
import {
  userAddRequest,
  userRequest,
  userUpdateRequest,
  userUploadImageRequest,
} from "../store/users/actions";
import ImageIcon from "@mui/icons-material/Image";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useEffect, useLayoutEffect } from "react";
import { getUserSelector } from "../store/users/selectors";
import { IUserInfo, IUsersList } from "../models/users";

function UserUpdate() {
  const dispatch = useDispatch();
  const params = useParams();
  const user: IUsersList = useSelector(getUserSelector);

  const location = useLocation();
  let currentURL = location.pathname.split("/")[1];

  useLayoutEffect(() => {
    if (params.id) {
      dispatch(userRequest({ id: params.id as any }));
    }
  }, [dispatch, params]);

  useEffect(() => {
    if (user && currentURL === "edit") {
      formik.setValues({
        name: user ? user.name : "",
        photo: user ? user.photo : "",
        email: user ? user.email : "",
        location: user ? user.location : "",
      });
    }
  }, [user]);

  const validate = (values: IUserInfo) => {
    const errors: { email: string } = {
      email: "",
    };

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      photo: "",
      email: "",
      location: "",
    },

    validate,

    onSubmit: (values) => {
      if (currentURL === "edit") {
        dispatch(userUpdateRequest({ id: user.id, values }));
      } else {
        dispatch(userAddRequest(values));
      }
    },
  });

  const handlePhotoChange = (event: any) => {
    dispatch(userUploadImageRequest(event.target.files[0]));
    
    formik.setFieldValue("photo", event.target.files[0]);
  };

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <h2>
        <span style={{ textTransform: "capitalize" }}>{currentURL}</span> user
      </h2>
      <div className="UserForm">
        <form
          onSubmit={handleFormSubmit}
          className="UserForm_wrapper"
          encType="multipart/form-data"
        >
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="User name"
          />

          <label className="ImageUploadd">
            <ImageIcon style={{ color: "#407EFF", marginRight: "10px" }} />
            Photo
            <input
              id="photo"
              name="photo"
              type="file"
              onChange={handlePhotoChange}
              placeholder="photo"
            />
          </label>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />

          <input
            id="location"
            name="location"
            type="location"
            onChange={formik.handleChange}
            value={formik.values.location}
            placeholder="Location"
          />

          <Button
            type="submit"
            variant="contained"
            style={{ fontSize: "10px", width: "116px" }}
          >
            Save
          </Button>
        </form>
      </div>
    </>
  );
}

export default UserUpdate;
