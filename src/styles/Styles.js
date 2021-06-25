import { makeStyles } from '@material-ui/core';

export const Styles = makeStyles((theme) => ({
  formStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperContainer: {
    padding: theme.spacing(3),
    background: 'linear-gradient(to right bottom, rgb(000,000,000, .1), rgb(255,255,255, 0.2))'
  },
  searchIcon: {
    color: theme.palette.secondary.main
  },
  textField: {
    color: theme.palette.secondary.main,
  },
  toggleButton: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(2),
    background: 'linear-gradient(to right bottom, rgb(255,255,255, .1), rgb(255,255,255, 0.2))',
    width: '25%',
    [theme.breakpoints.down('xs')]: {
      width: '50%'
    }
  },
  weatherCard: {
    padding: theme.spacing(2),
    background: 'linear-gradient(to right bottom, rgb(255,255,255, .05), rgb(255,255,255, 0.15))',
    width: '14%',
    [theme.breakpoints.down('sm')]: {
      width: '75vw',
      justifyContent: 'space-between',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  },
  weatherContainer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  weatherHeader: {
    color: theme.palette.secondary.main
  },
  weatherInfo: {
    color: theme.palette.secondary.main,
  },
  weatherInfoDate: {
    color: theme.palette.secondary.main,
    fontWeight: 500
  }
}));
