import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userContext } from '../../context/userContextProvider';
import { BASE_URL, doApiMethod } from '../../utils/apiService'
import styles from '../css/userForm.module.css';


const SignUp = () => {

  const nav = useNavigate();
  const {setUser} = useContext(userContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => doApi(data);

  const doApi = async (_bodyData) => {
    try {
      const url = BASE_URL + "/users/signUp";
      const data = await doApiMethod(url, "POST", _bodyData);
      if (data._id) {
        toast.success("user added")
        setUser(data);
        console.log(data);
        nav('/dashboard');
      }
    }
    catch (err) {
      let message = err.response.data.msg;
      toast.error(message)
      console.log(err);
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            type="text"
            {...register("name", { required: true, minLength: 2 })}
            placeholder="Name"
            className={styles.input}
          />
          {errors.name && <span className={styles.error}>Name is required. It should be at least 2 characters</span>}

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

export default SignUp