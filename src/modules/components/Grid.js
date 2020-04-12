import React from "react";
import { Grid as MaterialUiGrid, Container as MaterialUiContainer } from "@material-ui/core/";


export const Row = (props)  => (
  <MaterialUiGrid {...props} container>
    {props.children}
  </MaterialUiGrid>
);

export const Col = (props)=> (
  <MaterialUiGrid {...props} item>
    {props.children}
  </MaterialUiGrid>
);

export const Container = (props) => (
  <MaterialUiContainer {...props}>{props.children}</MaterialUiContainer>
);
