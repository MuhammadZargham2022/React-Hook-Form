import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import FormSchema from './RegistrationFormSchema';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(FormSchema), });

    return (
        <>
            <div className="container">
                <div className="title">
                    <p>Registration Form</p>
                </div>

                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="user_details">

                        <div className="input_box">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                {...register('fullname')} />
                            {errors.fullname && <p className='errormsg'>{errors.fullname.message}</p>}
                        </div>

                        <div className="input_box">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                {...register('username')} />
                            {errors.username && <p className='errormsg'>{errors.username.message}</p>}
                        </div>

                        <div className="input_box">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register('email')} />
                            {errors.email && <p className='errormsg'>{errors.email.message}</p>}
                        </div>

                        <div className="input_box">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="number"
                                placeholder="Enter your number"
                                {...register('phone')} />
                            {errors.phone && <p className='errormsg'>{errors.phone.message}</p>}
                        </div>

                        <div className="input_box">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                {...register('password')} />
                            {errors.password && <p className='errormsg'>{errors.password.message}</p>}
                        </div>

                        <div className="input_box">
                            <label htmlFor="confirmPass">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                {...register('confirmPass')} />
                            {errors.confirmPass && <p className='errormsg'>{errors.confirmPass.message}</p>}
                        </div>

                    </div>
                    <div className="gender">
                        <span className="gender_title">Gender</span>
                        <input
                            type="radio"
                            name="gender"
                            id="radio_1"
                            value="male"
                            {...register("gender")} />
                        <input
                            type="radio"
                            name="gender"
                            id="radio_2"
                            value="female"
                            {...register("gender")} />
                        <input
                            type="radio"
                            name="gender"
                            id="radio_3"
                            value="other"
                            {...register("gender")} />
                        
                        <div className="category">
                            <label htmlFor="radio_1">
                                <span className="dot one"></span>
                                <span>Male</span>
                            </label>
                            <label htmlFor="radio_2">
                                <span className="dot two"></span>
                                <span>Female</span>
                            </label>
                            <label htmlFor="radio_3">
                                <span className="dot three"></span>
                                <span>Other</span>
                            </label>
                        </div>
                        {errors.gender && <p className='errormsg'>{errors.gender.message}</p>}
                    </div>
                    <div className="reg_btn">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegistrationForm