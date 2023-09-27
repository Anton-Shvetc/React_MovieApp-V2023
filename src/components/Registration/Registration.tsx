import { useForm, Controller } from "react-hook-form";
import { TextField, Grid, Container, Button, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../sevices/api/index";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";

// const useStyles = makeStyles((theme) => ({
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
//     // color: "#000000",
//   },
// }));

function Registration() {
  // const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data : any) => {
    console.log('click')
    // try {
    //   setIsLoading(true);
    //   await api.auth.registration(data);
    //   const { data: loginData } = await api.auth.login(data);
    //   auth.setToken(loginData.token);
    //   auth.setUser(loginData.user);
    // } catch (e) {
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
  };

  return (
    <Container maxWidth="xs">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Создать новый аккаунт</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.firstName?.message)}
                  fullWidth={true}
                  label="Имя"
                  variant="filled"
                  // helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.lastName?.message)}
                  fullWidth={true}
                  label="Фамилия"
                  variant="filled"
                  // helperText={errors.lastName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.email?.message)}
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
                  error={Boolean(errors.password?.message)}
                  type="password"
                  fullWidth={true}
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
              Регистрация
            </Button>
            <Button
              color="inherit"
              type="submit"
      
              component={Link}
              to="/login"
            >
              Уже зарегистрированы?
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Registration;
