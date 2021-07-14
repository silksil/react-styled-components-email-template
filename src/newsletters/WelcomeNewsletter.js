import React from "react";
import styled from "styled-components";

import { Button } from "../components/Button";
import { Grid } from "../components/Grid";

const WelcomeNewsletter = () => {
  return (
    <Grid>
      <p>Welcome</p>
      <Grid.Row>
        <p>We love you</p>
        <p>Ok?</p>
      </Grid.Row>
      <Button>Don't click me here mate</Button>
    </Grid>
  );
};

export { WelcomeNewsletter };
