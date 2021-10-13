import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Components.css";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
export default function RegisterForm() {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAlert(0);
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/signup", data)
      .then((response) => {
        setAlert(1);
      })
      .catch((error) => {
        setAlert(2);
        console.error("There was an error!", error);
      });

    // setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Registration Form
      </Button>
      <Dialog
        fullWidth={"md"}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Registeration Form"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("fullName", { required: true })}
              placeholder="Full Name"
            />
            {errors?.fullName?.type === "required" && (
              <p>This field is required</p>
            )}

            <input type="number"
              {...register("number", { required: true, maxLength: 9 })}
              placeholder="Contact Number"
            />
            {errors?.number?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <p>Contact number cannot exceed 10 digits</p>
            )}
            <input type="email"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
              placeholder="Email"
            />
            {errors?.email?.type === "required" && (
              <p>This field is required</p>
            )}
{errors?.email?.type === "pattern" && (
        <p>Email format only</p>
      )}
            <input
              {...register("college", { required: true })}
              placeholder="College"
            />
            {errors?.college?.type === "required" && (
              <p>This field is required</p>
            )}

            <input
              {...register("address", { required: true })}
              placeholder="Address"
            />
            <select {...register("category")}>
              <option value="">Select...</option>
              <option value="A">Category A</option>
              <option value="B">Category B</option>
            </select>
            <input type="submit" />
          </form>

          <Stack sx={{ width: "100%" }} spacing={2}>
            {alert == 2 ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Already registered with same number/email —{" "}
                <strong>check it out!</strong>
              </Alert>
            ) : alert == 1 ? (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Thank you for registeration <strong>check your mail!</strong>
              </Alert>
            ) : (
              <></>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
