import React from 'react'
import {Grid,Typography,CardContent} from '@material-ui/core'
import CountUp from "react-countup"
import "../Cards/Cards.css"

export const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => {
    
    if(!confirmed)
    {
        return "LOADING....."
    }
    return (
      <div>
        <Grid container spacing={3}>
          <div className="card">
            <div className="title">Confirmed</div>
            <br></br>
            <h2>
              <CountUp
                start={0}
                end={confirmed.value}
                separation=","
                duration={2.5}
              ></CountUp>
            </h2>

            <div>Total Number of confirmed cases</div>
            <div> {new Date(lastUpdate).toDateString()}</div>
            <br></br>
          </div>

          <div className="card">
            <div className="title">Recovered</div>
            <br></br>
            <h2>
              <CountUp
                start={0}
                end={recovered.value}
                separation=","
                duration={2.5}
              ></CountUp>
            </h2>

            <div>Total Number of Recovered cases</div>
            <div> {new Date(lastUpdate).toDateString()}</div>
            <br></br>
          </div>

          <div className="card">
            <div className="title">Deaths</div>
            <br></br>
            <h2>
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                separation=","
                duration={2.5}
              ></CountUp>
            </h2>

            <div>Total Number of Deaths</div>
            <div> {new Date(lastUpdate).toDateString()}</div>
            <br></br>
          </div>

          {/* <Grid className="cards">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <CountUp
                start={0}
                end={recovered.value}
                separation=","
                duration={2.5}
              ></CountUp>
              <Typography variant="body2">Recovered cases</Typography>
              <Typography variant="body2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Grid>
          <Grid>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <CountUp
                start={0}
                end={deaths.value}
                separation=","
                duration={2.5}
              ></CountUp>
              <Typography variant="body2">Total Number of deaths</Typography>
              <Typography variant="body2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Grid> */}
        </Grid>
      </div>
    );
}

