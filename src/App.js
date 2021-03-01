import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "lightBlue"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Material-UI Review</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.container} maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              An Example Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              odio neque, veritatis praesentium, omnis eius nisi eveniet
              voluptatem itaque distinctio consectetur pariatur animi magnam
              doloribus, dignissimos repellat quaerat maxime quos!
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    View Examples
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
