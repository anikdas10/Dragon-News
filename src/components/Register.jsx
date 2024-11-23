import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const {createNewUser,setUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = new FormData(event.target);
        const name = form.get('name');
        const photoURL = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
       
        createNewUser(email,password)
        .then(result =>{
            setUser(result.user);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="min-h-[500px] flex items-center justify-center">
       
          <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
             <div className="text-center font-bold text-xl p-4">
            <h2>Register your account</h2>
             </div>
             <hr />
      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
          <input type="text" 
          name="name"
          placeholder="Enter your Name" className="input bg-gray-100" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input type="text" 
          name="photoUrl"
          placeholder="Enter your photoURL" className="input bg-gray-100" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email Address</span>
          </label>
          <input type="email" 
          name="email"
          placeholder="Enter your email" className="input bg-gray-100" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" 
          name="password"
          placeholder="Enter your password" className="input bg-gray-100" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] text-white hover:text-black">Register</button>
          <h2 className="text-center font-semibold text-lg">Already have an account? <Link to='/auth/login' className="text-red-500">Login</Link> </h2>
        </div>
      </form>
    </div>
     </div>
    );
};

export default Register;