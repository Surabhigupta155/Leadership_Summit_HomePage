import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../Components.css';

import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function RegisterForm() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) =>{
    setOpen(false);
    // setResult(JSON.stringify(data))
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Registration Form
      </Button>
      <Dialog
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
     
     <input {...register("firstName")} placeholder="First name" />
     {errors.firstName && <p>This field is required</p>}

     <input {...register("lastName")} placeholder="Last name" />
     <input {...register("contact")} placeholder="Contact Number" />
     {errors.contact && <p>This field is required</p>}

     <input {...register("email")} placeholder="Email" />
     {errors.email && <p>This field is required</p>}

     <input {...register("college")} placeholder="College" />
     {errors.college && <p>This field is required</p>}

     <input {...register("address")} placeholder="Address" />
     <select {...register("category")}>
       <option value="">Select...</option>
       <option value="A">Category A</option>
       <option value="B">Category B</option>
     </select>
     <input type="submit" onClick={handleClose} />
   
     
          {/* <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
       
       
   </form>
   </DialogContent>
      </Dialog>

    </div>
  );
}
// export default function RegisterForm() {
 
//   return (
//     <div>
//       <section id="register">
//         <div className="container-fluid">
//         <ScrollAnimation animateIn="fadeInDown">
//             <div className="text-center heading mb-lg-5 mb-md-5 mb-4">
//              <h1>Registration Form</h1> 
//             </div>
//           </ScrollAnimation>
//           <ScrollAnimation animateIn="fadeInLeft">
//             <div className="register">
              
  
//     </div>
//     </ScrollAnimation>
//     </div>
       
//         </section>
//         </div>
//   );
// }
