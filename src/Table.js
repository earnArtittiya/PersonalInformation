import React, { useState, useEffect } from "react";
import CardBasic from "./components/CardBasic";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import mocksPersonalInformation from "./mocks/PersonalInformation.json";
import CardEditable from "./components/CardEditable";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles1 = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f4f4",
    height: "100vh",
  },
  CardBasic: {
    margin: theme.spacing(2),
    backgroundColor: "#fafafa",
    border: "None",
  },
  Card: {
    backgroundColor: "#fafafa",
    borderColor: "#fa9917",
    borderWidth: "medium",
    borderStyle: "double",
  },
  Button: {
    minWidth: 275,
    maxWidth: 600,
  },
  Infomation: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  AddCircleOutlineIcon: {
    color: "#fa9917",
  },
}));

export default function Table() {
  const [personalInformation, setPersonalInformation] = useState(
    mocksPersonalInformation.data
  );
  const [editProfile, setEditProfile] = useState(false);
  const [works, setWorks] = useState(mocksPersonalInformation.data.Works);

  const addNewWork = () => {
    setWorks([...works, { company: "", position: "", period: "" }]);
  };

  const classes = useStyles1();
  return (
    <React.Fragment>
      {personalInformation != null ? (
        <Grid container component="main" className={classes.root}>
          <Grid item xs={7} className={classes.Infomation}>
            <Typography>Contact</Typography>
            {!editProfile ? (
              <CardBasic
                className={classes.CardBasic}
                value={personalInformation.Profile}
                icon={"edit"}
                whenClick={() => {
                  setEditProfile(true);
                }}
              />
            ) : (
              <CardEditable value={personalInformation.Profile} />
            )}

            <CardBasic value={personalInformation.National} icon={"edit"} />
            <CardBasic value={personalInformation.Contact} icon={"edit"} />
            <CardBasic value={personalInformation.Referral} icon={"edit"} />
            <Typography>Work</Typography>
            {works.map((work, i) => {
              console.log(i);
              return <CardBasic key={i} value={work} />;
            })}
            <Card className={classes.Card}>
              <Button onClick={addNewWork} className={classes.Button}>
                <AddCircleOutlineIcon
                  className={classes.AddCircleOutlineIcon}
                />
                Add more
              </Button>
            </Card>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      ) : (
        <Grid container component="main" className={classes.Infomation}>
          No Data!
        </Grid>
      )}
    </React.Fragment>
  );
}
