import { Link } from "react-router-dom";

const Login = () => {
    return (
     <div className="min-h-[500px] flex items-center justify-center">
       
          <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
             <div className="text-center font-bold text-xl p-4">
            <h2>Login your Account</h2>
             </div>
             <hr />
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email Address</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input bg-gray-100" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" placeholder="Enter your password" className="input bg-gray-100" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] text-white">Login</button>
          <h2 className="text-center font-semibold text-lg">Don't have an account? <Link to='/auth/register' className="text-red-500">Register</Link> </h2>
        </div>
      </form>
    </div>
     </div>
    );
};

export default Login;