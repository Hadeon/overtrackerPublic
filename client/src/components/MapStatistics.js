import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

import PieChart from './PieChart';

const styles = theme => ({
  root: {
    margin: '10px',
    zIndex: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 'bold'
  },
  panelTheme: {

  },
  chartContainer: {
    display: 'inline-block',
    padding: '5px',
    marginLeft: '5px',
    width: '32%'
  },
  chartHeader: {
    marginLeft: '10px',
  },
  chartPaper: {
    margin: '10px',
    padding: '10px'
  }
});

function MapStatistics(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panelTheme}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.mapName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.chartHeader}>
            Track the efficiency of specific team comps paired against enemy team comps. Additionally, track the most common reasons for losses as well as the team's most efficient heroes overall (regarding win rate). Eventually I'd like to track final blows and include statistics for the highest final blows on both teams to see which heroes make a large impact beyond W/L ratios.
          </Typography>
        </ExpansionPanelDetails>
        <Paper className={classes.chartPaper}>
          <ExpansionPanelDetails className={classes.chartContainer}>
            <Typography className={classes.chartHeader} variant="title">
              % Wins With Hero
            </Typography>
            <ExpansionPanelDetails>
              <PieChart/>
            </ExpansionPanelDetails>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails className={classes.chartContainer}>
            <Typography className={classes.chartHeader} variant="title">
              % Losses Against Hero
            </Typography>
            <ExpansionPanelDetails>
              <PieChart/>
            </ExpansionPanelDetails>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails className={classes.chartContainer}>
            <Typography className={classes.chartHeader} variant="title">
              W/L % Against Teams
            </Typography>
            <ExpansionPanelDetails>
              <PieChart/>
            </ExpansionPanelDetails>
          </ExpansionPanelDetails>
        </Paper>
      </ExpansionPanel>
    </div>
  );
}

MapStatistics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapStatistics);