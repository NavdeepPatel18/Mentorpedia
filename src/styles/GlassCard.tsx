import { BoxProps, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import color from "color";
import { Card } from "react-bootstrap";

const useStyles = (c: string, blur: number = 7) =>
  makeStyles((theme: Theme) => ({
    glass: {
      backgroundColor: color(c).alpha(0.4).toString(),
      backgroundImage: `linear-gradient(to bottom right, ${color(c)
        .alpha(0.3)
        .toString()}, ${color(c).alpha(0).toString()})`,
      backdropFilter: `blur(${blur}px)`,
      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.2)",
    },
    glassBorders: {
      borderLeft: `solid 1px ${color(c).alpha(0.3).toString()}`,
      borderTop: `solid 1px ${color(c).alpha(0.8).toString()}`,
    },
    glassRounded: {
      // borderRadius: theme.spacing(2),
    },
  }));

export interface GlassCardProps extends BoxProps {
  color?: string;
  noBorders?: boolean;
  square?: boolean;
  blur?: number;
}

export function GlassCard(props: GlassCardProps) {
  const {
    color = "#ffffff",
    blur,
    noBorders,
    square,
    className,
    ...rest
  } = props;
  const classes = useStyles(color, blur)();

  return (
    <Card
      className={clsx(classes.glass, className, {
        [classes.glassBorders]: !noBorders,
        [classes.glassRounded]: !square,
      })}
      {...rest}
    />
  );
}
