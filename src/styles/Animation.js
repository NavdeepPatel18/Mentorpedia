import { Box, Grow } from "@material-ui/core";
import React from "react";

export function Animation(props) {
  const { interval = 200, children, ...rest } = props;

  return (
    <Box {...rest}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          <Grow in timeout={(index + 1) * interval}>
            {child}
          </Grow>
        ) : null
      )}
    </Box>
  );
}
