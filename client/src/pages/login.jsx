import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userContext } from '../context/userContextProvider';
import { BASE_URL, doApiMethod } from '../utils/apiService'
import styles from './userForm.module.css';


const Login = () => {

  const nav = useNavigate();
  const {setUser} = useContext(userContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => doApi(data);

  const doApi = async (_bodyData) => {
    try {
      const url = BASE_URL + "/users/login";
      const data = await doApiMethod(url, "POST", _bodyData);
      if (data) {
        toast.success(`hello ${data.name}`)
        setUser(data)
        nav('/dashboard');
      }
    }
    catch (err) {
      let message = err.response.data.err;
      toast.error(message)
      console.log(err);
    }
  }

  return (
    <div className={styles.pageContainer}>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className={styles.input}
        />
        {errors.email && <span className={styles.error}>Email is required</span>}
        <input
          type="password"
          {...register("password", { required: true, minLength: 6, maxLength: 50 })}
          placeholder="Password"
          className={styles.input}
        />
        {errors.password && <span className={styles.error}>Password must be 6 characters long</span>}
        <input type="submit" className={styles.submit} />
      </form>
    </div>
  </div>
  )
}

export default Login