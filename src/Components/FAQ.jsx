import * as React from 'react';

import '../Components.css';

import ScrollAnimation from 'react-animate-on-scroll';
import { saveAs } from "file-saver";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function FAQ() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveFile = () => {
    saveAs(
      "./AboutUs.pdf",
      "example.pdf"
    );
  };
  return (
    <div>
      <section id="FAQ">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-6">
              <Button variant="outlined" onClick={handleClickOpen}>
                FAQs
              </Button>
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Frequently Answered Questions"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <p className="mb-2"> <strong>Q.</strong> What will I get by participating in this conclave?</p>
                    <p><strong>Ans.</strong> You will be getting an exciting hamper from IIT Jammu. Beside this you will be getting a certificate of appreciation from IIT Jammu.</p>
                    <p className="mb-2"><strong>Q.</strong> Is there any registration fee?</p>
                    <p><strong>Ans.</strong> No, the registration is free of cost.</p>
                    <p className="mb-2"><strong>Q.</strong> How will the participants be shortlisted for the summit?</p>
                    <p><strong>Ans.</strong> The participants will have to appear for a 3-stage assessment test. </p>
                    <p className="mb-2"><strong>Q.</strong> Will the event be held online or offline?</p>
                    <p><strong>Ans.</strong> The event will be held online.</p>

                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Close
                  </Button>

                </DialogActions>
              </Dialog>

            </div>
            <div className="col-6">
              <Button variant="outlined" onClick={saveFile}>
                Brochure
                {/* <a href='AboutUs.pdf' download  style={{ color: 'inherit', textDecoration:"none" }}> Brochure</a>
        */}
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


// export default function FAQ() {
//     return (
//         <div>

//                <section id="FAQ">
//                     <div className="container-fluid">
//                         <div className="row justify-content-center align-items-center">
//                             <ScrollAnimation animateIn="fadeInDown">
//                                 <h1 className="text-center mb-lg-5 mb-md-5 mb-4">Frequently Answered Questions</h1>
//                             </ScrollAnimation>
//                             <div className="flex justify-content-center align-items-center mx-0">
//                                 <div className="mb-4">
//                                     <ScrollAnimation animateIn="fadeInLeft">
//                                         <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                                         <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                                         </ScrollAnimation>
//                                 </div>
//                                 <div className="mb-4">
//                                     <ScrollAnimation animateIn="fadeInRight">
//                                         <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                                         <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                                     </ScrollAnimation>
//                                 </div>
//                                 <div className="mb-4">
//                                     <ScrollAnimation animateIn="fadeInLeft">
//                                         <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                                         <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                                         </ScrollAnimation>
//                                 </div>
//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInRight">
//                                     <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                                         <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                                     </ScrollAnimation>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//             </div>
//     )
// }