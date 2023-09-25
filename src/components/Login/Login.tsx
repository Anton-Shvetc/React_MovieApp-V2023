import { useForm, Controller } from "react-hook-form";
import { TextField, Grid, Container, Button, Typography } from "@mui/material";
// import { yupResolver } from "@hookform/resolvers/yup";
// import validationSchema from "./validation";
// import api from "../../sevices/api/index";
// import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { createTheme, ThemeProvider } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme : any) => ({
//   root: {
//     padding: theme.spacing(3),
//   },
//   buttonSpacing: {
//     marginLeft: theme.spacing(1),
//   },
//   button: {
//     backgroundColor: "#000000",
//     "&:hover": {
//       backgroundColor: "#ffa500",
//       color: "#000000",
//     },
//   },
// }));

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#000000",
//     },
//     secondary: {
//       main: "#ffa500",
//     },
//   },
// });

function Login() {
  // const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  // const auth = useAuth();

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  //   setError,
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    // try {
    //   setIsLoading(true);
    //   const { data: loginData } = await api.auth.login(data);

    //   auth.setToken(loginData.token);
    //   auth.setUser(loginData.user);
    // } catch (err) {
    //   console.log(err);
    //   if (e.response.status === 422) {
    //     Object.keys(e.response.data.errors).forEach((key) => {
    //       setError(key, {
    //         type: "manual",
    //         message: e.response.data.errors[key],
    //       });
    //     });
    //   }
    // } finally {
    //   setIsLoading(false);
    // }
    try {}
    catch {}
    finally {}
  };

  return (
    <Container maxWidth="xs">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Авторизация</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  // error={Boolean(errors.email?.message)}
                  fullWidth={true}
                  type="email"
                  label="Email"
                  variant="filled"
                  // helperText={errors.email?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  // error={Boolean(errors.password?.message)}
                  type="password"
                  fullWidth={true}
                  color="primary"
                  label="Пароль"
                  variant="filled"
                  // helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
            >
              Вход
            </Button>
            <Button
              color="inherit"
              type="submit"
              component={Link}
              to="/registration"
            >
              Создать аккаунт
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
