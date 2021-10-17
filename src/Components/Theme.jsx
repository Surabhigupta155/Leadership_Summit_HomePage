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
import Paper from "@mui/material/Paper";
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RegisterForm from './Register'
import image1 from "../images/skill.jpg"
import image2 from "../images/senior.jpg"
import image3 from "../images/health.jpg"
import image4 from "../images/school.jpg"
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
        <div className="design1"></div>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5">
              <ScrollAnimation animateIn="fadeInUp">
                <h1 className="mb-lg-4 mb-md-4 mb-3">Theme and Agendas</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="mb-lg-0 mb-md-5 mb-4">The theme for this year will be “Inclusive development”. Marginalization has made the people fall into pits of exclusion and developmental lag, which have to be reflected, and innovative measures have to be enforced through social democracy, which rest on justice, liberty, equality and fraternity. Here we invite leaders to deliberate over the problem of selective development of a few sections of the society and find innovative paths to achieve the goal of inclusive development.

                </p>
                <br />
                <RegisterForm/>
              </ScrollAnimation>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }} className="themecard">
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
                        title="Skill development"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={image1}
                        alt="Paella dish"
                      />
                      <Collapse in={expanded1} timeout="auto" unmountOnExit>
                        <CardContent style={{ maxHeight: 200, overflow: "auto" }}>
                   
           
                          <Typography className="agendadesc" paragraph>
                          Certain groups of people are being excluded from opportunities for skills development, at the same time opportunities to develop certain skills are largely lacking. Even after skills are acquired, there is a disparity in the wages, pays and respect for certain skills which are considered inferior.


                          </Typography>
                     
                        </CardContent>
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 mb-4">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }} className="themecard">
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
                        title="Pwd, Senior citizens, LGBTQ"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={image2}
                        alt="Paella dish"
                      />
                      <Collapse in={expanded2} timeout="auto" unmountOnExit>
                        <CardContent style={{ maxHeight: 200, overflow: "auto" , border:"0"}}>
                          {/* <Typography className="agenda" paragraph>Method:</Typography> */}
                         
                          <Typography className="agendadesc" paragraph>
                          While we tend to emphasize the specific neglected groups for development, we often overlook the bigger picture. For some groups like PwD, Senior Citizens, LGBTQ+, etc., the exclusion is omnipresent. It’s endemic and it’s systemic.
                              </Typography>
                        
                        
                        </CardContent>
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 mb-4">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }} className="themecard">
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
                        title="Public health management"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={image3}
                        alt="Paella dish"
                      />
                      <Collapse in={expanded3} timeout="auto" unmountOnExit>
                        <CardContent style={{ maxHeight: 200, overflow: "auto" }}>
                          {/* <Typography className="agenda" paragraph>Method:</Typography> */}
                          <Typography className="agendadesc" paragraph>
                          Health disparities have garnered an increasing amount of attention since the start of the pandemic. The healthcare facilities are not accessible for a myriad of reasons to all the segments of the society. The situations are dire to an extent that there is the availability of only a single doctor for a population of thousands.
                           </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6">
                  <ScrollAnimation animateIn="fadeInUp">
                    <Card sx={{ maxWidth: 345 }} className="themecard">
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
                        title="School education"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={image4}
                        alt="Paella dish"
                      />
                      <Collapse in={expanded4} timeout="auto" unmountOnExit>
                        <CardContent style={{ maxHeight: 200, overflow: "auto" }}>
                          {/* <Typography className="agenda" paragraph>Method:</Typography> */}
                          <Typography className="agendadesc" paragraph>
                          The Indian Education system has failed to serve the 150 million children that are currently out of the education system, and hundreds of millions of students that are in the system but are greatly deprived of the global minium standards of education, be it the infrastructure or the curriculum. This is due to the blatant disregard to the problems in our education system, that we've been unable to address let alone resolve for years now, and this is just the right time to change this reality by first addressing and discussing the problems. It might be only fair if we subject your critical, rational and diverse thoughts to this problem which will hopefully yield to solutions that would help us to realise what we are imagining.
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