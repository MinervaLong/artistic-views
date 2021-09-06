import React, {useState} from 'react' 
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {SignUpImg} from '../../assets/images'



// Yup Schema to validate fields
const SignUpSchema = yup.object().shape({
    completeName: yup.string().required('Complete name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(10,'Password must be max 10 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords should match')
        .required('Confirm password is required'),
    policy: yup.bool().oneOf([true], 'Privacy Policy is required'),
})

const SignUp = () => {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(SignUpSchema), //Connect Yup with react-hooks-form
    });
    const { errors } = formState;

    const [checked, setChecked] = useState(true);
    const signUpSubmit = (data) => {
        console.log(data)
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return(
          <div>
            <div>
                <h2 level='2'>Create an Account</h2>
                <form onSubmit={handleSubmit(signUpSubmit)}>
                    <label label="Complete Name">
                        <input 
                        type='text'
                        name='completeName'
                        placeholder='Type your complete name...'
                        {...register('completeName')} 
                        />
                    </label>            
                    <p color='status-critical'>{errors.completeName?.message}</p>

                    <label label="Email">
                        <input
                            type='email'
                            name='email'
                            placeholder='Type here your email...'
                            {...register('email')}  
                         />
                    </label>
                    <p color='status-critical'>{errors.email?.message}</p>

                    <label label="Password">
                        <input
                            type='password'
                            name='password'
                            placeholder='Password...'
                            {...register('password')}  
                        />
                    </label>
                    <p color='status-critical'>{errors.password?.message}</p>
                    
                    <label label="Confirm Password">
                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirm Password...'
                            {...register('confirmPassword')}   
                        />
                    </label>
                    <p color='status-critical'>{errors.confirmPassword?.message}</p>

                    <input
                        id='policy'
                        name='policy'
                        type='checkbox'
                        checked={checked}                        
                        label="I agree with the Privacy Policy" 
                        {...register("checked")}
                        onChange={(event) => setChecked(event.target.checked)}                      
                    />
                   <p color='status-critical'>{errors.checked && 'The Privacy Policy must be accepted'}</p>
                    
                    <div>
                        <Link to='/dashboard'>
                            <button type="submit" id='submit'>Sign-Up</button>
                        </Link>
                        
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
            <div width='35rem' ><img alt='' src={SignUpImg}></img></div> 
        </div>
    )
}

export default SignUp;