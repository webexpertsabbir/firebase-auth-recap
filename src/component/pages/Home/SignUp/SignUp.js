import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading";



const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, loading } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handelSignUp = data => {
        console.log(data)
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    if(loading){
        <Loading></Loading>
    }
    
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-[500px] p-8 border rounded-lg'>
                <h2 className='text-4xl text-center py-5'>Register</h2>
                <form onSubmit={handleSubmit(handelSignUp)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>

                
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 carecter or longer' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must be strong" }

                                }
                            )}
                            placeholder="password"
                            className="input input-bordered w-full"
                        />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">Forget Password</span>
                        </label>
                    </div>
                    <input type="submit" value='Sign Up' className='btn btn-primary w-full' />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='py-5'>Already have an account <Link to='/login' className='underline text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
            </div>
        </div>
    );
};

export default SignUp;