import head from './head.svg';
import manage from './manage.svg';
import account from './account.svg';
import myhome from './myhome.svg';
import loopstudios from './loopstudios.svg'
import photosnap from './photosnap.svg';
import React, { Col, Row } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={head} alt="img1" style={{backgroundColor:"rgb(45, 156, 151)"}}/>
      <Card style={{marginLeft: "15rem", marginTop: "3rem", width: "50rem" }}>

        <Paper >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase >
                <img alt="complex" src={photosnap} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  Photosnap
                <Chip label="New!" style={{ margin: "2px", padding: "5px", color: "white", backgroundColor: "rgb(45, 156, 151)" }} />
                  <Chip label="Featured" style={{ color: "white", backgroundColor: "rgb(49, 43, 43)" }} />
                  <Typography variant="body2" gutterBottom>
                    Senior Frontend Developer
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    1d ago.   Full Time. USA only
                </Typography>
                  <Typography variant="body2" color="textSecondary">

                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <Chip label="Frontend" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Senior" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="HTML" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="CSS" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="JavaAcript" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Card>

      <Card style={{ marginLeft: "15rem", marginTop: "3rem", width: "50rem" }}>

        <Paper >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase >
                <img alt="complex" src={manage} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  Manage
                <Chip label="New!" style={{ margin: "2px", padding: "5px", color: "white", backgroundColor: "rgb(45, 156, 151)" }} />
                  <Chip label="Featured" style={{ color: "white", backgroundColor: "rgb(49, 43, 43)" }} />
                  <Typography variant="body2" gutterBottom>
                    Full Stack Developer
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    1d ago.   Part Time. Remote
                </Typography>
                  <Typography variant="body2" color="textSecondary">

                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <Chip label="Fullstack" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Midweight" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Python" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="React" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Card>


      <Card style={{ marginLeft: "15rem", marginTop: "3rem", width: "50rem" }}>

        <Paper >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase >
                <img alt="complex" src={account} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  Account
          <Chip label="New!" style={{ margin: "2px", padding: "5px", color: "white", backgroundColor: "rgb(45, 156, 151)" }} />
                  <Typography variant="body2" gutterBottom>
                    Junior Frontend Developer
          </Typography>
                  <Typography variant="body2" color="textSecondary">
                    2d ago.   Part Time. USA only
          </Typography>
                 
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <Chip label="Frontend" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Junior" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="React" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Sass" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="JavaScript" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Card>

      <Card style={{ marginLeft: "15rem", marginTop: "3rem", width: "50rem" }}>

        <Paper >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase >
                <img alt="complex" src={myhome} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  MyHome
                  <Typography variant="body2" gutterBottom>
                    Junior Frontend Developer
          </Typography>
                  <Typography variant="body2" color="textSecondary">
                    5d ago.   Contract.  USA only
          </Typography>
                 
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <Chip label="Frontend" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Junior" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="CSS" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="JavaScript" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Card>


      <Card style={{ marginLeft: "15rem", marginTop: "3rem", width: "50rem" }}>

        <Paper >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase >
                <img alt="complex" src={loopstudios} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  Loop Studios
                  <Typography variant="body2" gutterBottom>
                    Software Engineer
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    1w ago.   Full Time. WorldWide
                </Typography>
                  <Typography variant="body2" color="textSecondary">

                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <Chip label="Fullstack" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Midweight" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Javascript" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Sass" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />
                  <Chip label="Ruby" style={{ marginRight: "15px", color: "rgb(45, 156, 151)" }} />

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Card>

    </div>
  );
}

export default App;
