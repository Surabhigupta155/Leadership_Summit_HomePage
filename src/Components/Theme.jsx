import * as React from 'react';

import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from "@material-ui/core/Grid";
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RegisterForm from './Register'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Theme() {
  const [expanded1, setExpanded1] = React.useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = React.useState(false);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const [expanded3, setExpanded3] = React.useState(false);
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const [expanded4, setExpanded4] = React.useState(false);
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  return (
    <div>

      <section id="theme">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5">
              <ScrollAnimation animateIn="fadeInUp">
                <h1 className="mb-lg-4 mb-md-4 mb-3">Theme and Agendas</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="mb-lg-0 mb-md-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br />
                <RegisterForm/>
              </ScrollAnimation>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            1
                          </Avatar>
                        }
                        action={
                          <CardActions disableSpacing>
                            <ExpandMore
                              expand={expanded1}
                              onClick={handleExpandClick1}
                              aria-expanded={expanded1}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </ExpandMore>
                          </CardActions>
                        }
                        title="Agenda 1 Name"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
                        alt="Paella dish"
                      />
                      <Collapse in={expanded1} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography className="agenda" paragraph>Method:</Typography>
                          <Typography className="agendadesc" paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 mb-4">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            2
                          </Avatar>
                        }
                        action={
                          <CardActions disableSpacing>
                            <ExpandMore
                              expand={expanded2}
                              onClick={handleExpandClick2}
                              aria-expanded={expanded2}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </ExpandMore>
                          </CardActions>
                        }
                        title="Agenda 2 Name"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
                        alt="Paella dish"
                      />
                      <Collapse in={expanded2} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography className="agenda" paragraph>Method:</Typography>
                          <Typography className="agendadesc" paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 mb-4">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            3
                          </Avatar>
                        }
                        action={
                          <CardActions disableSpacing>
                            <ExpandMore
                              expand={expanded3}
                              onClick={handleExpandClick3}
                              aria-expanded={expanded3}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </ExpandMore>
                          </CardActions>
                        }
                        title="Agenda 3 Name"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
                        alt="Paella dish"
                      />
                      <Collapse in={expanded3} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography className="agenda" paragraph>Method:</Typography>
                          <Typography className="agendadesc" paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            4
                          </Avatar>
                        }
                        action={
                          <CardActions disableSpacing>
                            <ExpandMore
                              expand={expanded4}
                              onClick={handleExpandClick4}
                              aria-expanded={expanded4}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </ExpandMore>
                          </CardActions>
                        }
                        title="Agenda 4 Name"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image="https://c8.alamy.com/comp/HWEDTX/rectangularrectangular-shaperectangle-shapewhitewhite-backgroundb-HWEDTX.jpg"
                        alt="Paella dish"
                      />
                      <Collapse in={expanded4} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography className="agenda" paragraph>Method:</Typography>
                          <Typography className="agendadesc" paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>










          {/* <div className="row justify-content-center align-items-center mx-0">
                            <div className="col-md-4 col1">
                                <ScrollAnimation animateIn="fadeInLeft">
                                  <h1>Theme and Agendas</h1>
                                 </ScrollAnimation>
                            </div>
                            <div className="col-lg-6 col-md-8 col2">
                                <ScrollAnimation animateIn="fadeInRight">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                   */}
        </div>
      </section>

    </div>
  )
}