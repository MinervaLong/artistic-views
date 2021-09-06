
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {SignInImg} from '../../assets/images'


// Yup Schema to validate fields
const SignInSchema = yup.object().shape({    
    email: yup.string().email().required(),
    password: yup.string().min(8, 'Password must be at least 8 characters').max(10,'Password must be max 8 characters').required(),
    remember: yup.bool(),
})

const SignIn = (props) => {
    const {register, formState:{errors}} = useForm({
        resolver: yupResolver(SignInSchema), //Connect Yup with react-hooks-form
    });

    //const [checked, setChecked] = React.useState(true);

    /*const signUpSubmit = (data) => {
        console.log(data)
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    }*/

    // LOGIN SUCCESS
    const onFinish = values => {
        console.log('Success:', values.value);
        
    };

    return(
       <div>
              <div
               
              >
                                
                <h2 >Login</h2>
                <form 
                    name='form'
                    onSubmit={onFinish}
                >
                    <label label="Email">
                        <input
                            type='email'
                            name='email'
                            placeholder='Type here your email...'
                            {...register('email')}  
                         />
                    </label>
                    <p color='status-critical' size='small'>{errors.email?.message}</p>

                    <label label="Password">
                        <input
                            type='password'
                            name='password'
                            placeholder='Password...'
                            {...register('password')}  
                        />
                    </label>
                    <p color='status-critical' size='small'>{errors.password?.message}</p>

                    <input
                        id='remember'
                        name='remember'
                        type='checkbox'
                        //checked={checked}                        
                        label="Remember" 
                        {...register("remember")} 
                        //onChange={(event) => setChecked(event.target.checked)}                     
                    />

                    <div direction="row" justify='center' margin='small'>
                        <button type="submit" color='primary' label="Sign-In" />
                    </div>
                    <p>Forgot your password?</p>
                </form>
            </div>
            <div width='32rem' ><img alt='' src={SignInImg}/></div> 
        </div>
  
    )
}

export default SignIn;