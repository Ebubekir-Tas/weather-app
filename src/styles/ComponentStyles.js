import { makeStyles } from '@material-ui/core';

export const ComponentStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    margin: theme.spacing(1)
  },
  formStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperContainer: {
    padding: theme.spacing(3),
    background: 'linear-gradient(to right bottom, rgb(000,000,000, .1), rgb(255,255,255, 0.2))'
  },
  textField: {
    color: theme.palette.secondary.main,
  },
  weatherCard: {
    padding: theme.spacing(2),
    background: 'linear-gradient(to right bottom, rgb(255,255,255, .05), rgb(255,255,255, 0.15))'
  },
  weatherContainer: {
    display: 'flex',
    justifyContent: 'space-between',
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
}))
