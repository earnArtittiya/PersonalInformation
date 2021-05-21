import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    minWidth: 275,
    maxWidth: 600,
    backgroundColor: "#fafafa",
    border: "None",
  },
  key: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  value: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },

  EditRoundedIcon: {
    color: "#f49628",
  },
  MoreHorizOutlinedIcon: {
    color: "#f49628",
  },
  CardEdit: {
    marginLeft: theme.spacing(50),
    width: "25ch",
  },
}));

export default function CardEditable(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={0}>
          {Object.entries(props.value).map(([key, val], i) => {
            if (i === 0) {
              return (
                <React.Fragment key={i}>
                  <Grid item xs={3}>
                    <Typography className={classes.key}>{key}</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField className={classes.value} defaultValue={val} />
                  </Grid>
                  
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={i}>
                  <Grid item xs={3}>
                    <Typography className={classes.key}>{key}</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField className={classes.value} defaultValue={val} />
                  </Grid>
                </React.Fragment>
                
              );
            }
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}
