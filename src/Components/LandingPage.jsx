import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import '../Components.css';
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AboutUs from './AboutUs';
// @material-ui/icons
import RegisterForm from './Register'
// core components


import '../Components.css';

const useStyles =  makeStyles(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   margin: theme.spacing(1)
    },

  }));

export default function SectionHome() {
  const classes = useStyles();
  return (
    <div className="heroimage">
        <div className="overlay">
            <h1 className="text_hero">Vidwan Sabha</h1>

            <a href="#aboutus">
              <ArrowDownwardIcon fontSize={"large"} className="arrow bounce"/>
            </a>
            <div>
              <img src="./images/leader.png" alt="" />
            </div>
        </div>
    </div>
  );
}
