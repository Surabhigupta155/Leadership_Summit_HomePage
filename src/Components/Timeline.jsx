import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { useTheme } from "@mui/material/styles";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "../Components.css";
import card from "../images/card.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Timeline_() {
  const theme = useTheme();
  return (
    <div>
      <section id="timeline">
      <div className="design1"></div>
      <div className="design2"></div>
        <div className="container-fluid">
          <ScrollAnimation animateIn="fadeInDown">
            <div className="text-center heading mb-lg-5 mb-md-5 mb-4">
              Timeline
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card sx={{ display: "flex",float:'left', maxWidth: 300 }} className="timelinecard">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography className="cardheading" component="div" variant="h5">
                          21 October 2021
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          className="content"
                        >
                         Registration Start Date
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card sx={{ display: "flex", float:"right", maxWidth: 300 }} className="timelinecard">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography className="cardheading" component="div" variant="h5">
                        4 November 2021
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          className="content"
                        >
                          Registration End Date
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card sx={{ display: "flex",float:'left', maxWidth: 300 }} className="timelinecard">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography className="cardheading" component="div" variant="h5">
                        5 November 2021
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          className="content"
                        >
                         Test 1
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card sx={{ float:'right', display: "flex",maxWidth: 300,  }} className="timelinecard">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography className="cardheading" component="div" variant="h5">
                        6 November 2021
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          className="content"
                        >
                          Test 2
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card sx={{   display: "flex",maxWidth: 300,float:'left', }} className="timelinecard">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography className="cardheading" component="div" variant="h5">
                        8-12 November 2021
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          className="content"
                        >
                          Test 3
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card sx={{  float:'right', display: "flex",maxWidth: 300, }} className="timelinecard">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography className="cardheading" component="div" variant="h5">
                        12 November 2021
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          className="content"
                        >
                         Announcement of shortlisted candidates  
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
