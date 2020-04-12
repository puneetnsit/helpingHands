import React, { useState, useEffect } from "react";

import SpeakerCard from "../components/SpeakerCard";
import { Col, Row } from "../components/Grid";
import Box from "@material-ui/core/Box";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      backgroundColor: "#0000",
      minWidth: 300,
      color: "#ffff",
      float: "right",
      border: "1px solid white",
      borderRadius: "4px",
      "& .MuiSelect-selectMenu": {
        paddingLeft: "15px",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "none",
      },
      "& .MuiSelect-icon": {
        backgroundColor: "#7d40d1",
        color: "#ffff",
        right: "5px",
      },
    },
    citySelect: {
      //minHeight: "50px",
      color: "#ffff",
    },
    cityOption: {
      paddingLeft: "15px",
    },
  })
);

const SpeakerList = () => {
 
  //const locationService = useLocationListingService("");

  return (
    <Box className="listingContainer">
      {<Box className="listingContainer__header"></Box>}
      <Row justify-align="center">
        <Col
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className="flex-center location-list-card-container"
        >
          <SpeakerCard />
        </Col>

        <Col
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className="flex-center location-list-card-container"
        >
          <SpeakerCard />
        </Col>

        <Col
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className="flex-center location-list-card-container"
        >
          <SpeakerCard />
        </Col>

        <Col
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className="flex-center location-list-card-container"
        >
          <SpeakerCard />
        </Col>

        <Col
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className="flex-center location-list-card-container"
        >
          <SpeakerCard />
        </Col>

        <Col
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className="flex-center location-list-card-container"
        >
          <SpeakerCard />
        </Col>
      </Row>
    </Box>
  );
};

export default SpeakerList;
