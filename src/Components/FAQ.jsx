import * as React from 'react';

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

  return (
    <div>
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
          <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mb-2">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                               
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        
        </DialogActions>
      </Dialog>
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