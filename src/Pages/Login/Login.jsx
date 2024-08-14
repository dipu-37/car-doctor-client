
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';


const Login = () => {

  const { signIn } = useContext(AuthContext);
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    // sign in user 
    signIn(email, password)
      .then(result => {
        const loggedInuser = result.user;
        console.log(loggedInuser);
        const user ={email};
        // navigate(location?.state ? location?.state : '/')
        // get access token 
        axios.post('http://localhost:5000/jwt',user)
        .then(res=>{
          console.log(res.data)
        })
      })
      .catch(error => console.log(error));

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">

        <div className="mr-12 w-3/4">
          <img src={img} alt="" />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
          </form>
          <p className='mb-4 text-center'>New to cars-doctor? <Link className='text-orange-600 font-bold' to="/signup">SignUp</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;