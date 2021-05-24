import React, { useState, useEffect } from "react";
import CardBasic from "./components/CardBasic";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import mocksPersonalInformation from "./mocks/PersonalInformation.json";
import CardEditable from "./components/CardEditable";
import Button from "@material-ui/core/Button";

const useStyles1 = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f4f4",
    paddingTop: theme.spacing(2),
  },
  Typography: {
    margin: theme.spacing(2),
    color: "#969696",
  },
  Basiccard: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function Teble() {
  const [personalInformation, setPersonalInformation] = useState();
  const [editProfile, setEditProfile] = useState(false);
  const [add,setAdd]=useState([]);
  async function fetchPersonalInformation() {
    setPersonalInformation(mocksPersonalInformation.data);
  }
  useEffect(() => {
    fetchPersonalInformation();
  }, []);

  const classes = useStyles1();
  return (
    <React.Fragment>
      {personalInformation != null ? (
        <Box style={{ height: "100vh" }} className={classes.root}>
          <Typography align="left" className={classes.Typography}>
            Contact
          </Typography>
          {!editProfile ? (
            <CardBasic
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
          <Typography align="left" className={classes.Typography}>
            Work
          </Typography>

          {personalInformation.Works.map((work, i) => {
            console.log(i);
            return <CardBasic key={i} value={work} />;
          })}
        </Box>
      ) : (
        <Box style={{ height: "100vh" }} className={classes.root}>
          No Data!
        </Box>
      )}

      <Button
        onClick={(event) => {
          add.Works = [];
          add.Works = [...add.Works, { company: "", position: "", period: "" }];
          setAdd(add.Works)
        }}
        variant="contained"
        color="primary"
      >
        ADD
      </Button>
    </React.Fragment>
  );
}