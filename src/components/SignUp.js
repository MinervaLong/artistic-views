import React, {useState} from 'react' 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Form, Image, Heading, FormField, TextInput, CheckBox, Box, Button, Text} from 'grommet'
import signUpImg from '../assets/signUpImg.svg'
import { Link } from 'react-router-dom'
import  NavLayout  from './NavLayout'

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
        <NavLayout isNav={true}>
          <Box
            as='main'
            direction='row'
            wrap='reverse'
            justify='center'
            alignContent='center'
            style={{alignItems:'center', padding:'7rem 0 7rem 0'}} 
            overflow='hidden'           
          >
              <Box
                size='medium'
                direction='column'
                justify='center'
                alignContent='center'
                pad='small'
                animation='slideDown'
                border='all'
                elevation='medium'
                responsive={true}
                overflow='hidden'
                style={{alignItems:'center'}}
                round
              >
                                
                <Heading level='2'>Create an Account</Heading>
                <Form onSubmit={handleSubmit(signUpSubmit)}>
                    <FormField label="Complete Name">
                        <TextInput 
                        type='text'
                        name='completeName'
                        placeholder='Type your complete name...'
                        {...register('completeName')} 
                        />
                    </FormField>            
                    <Text color='status-critical' size='small'>{errors.completeName?.message}</Text>

                    <FormField label="Email">
                        <TextInput
                            type='email'
                            name='email'
                            placeholder='Type here your email...'
                            {...register('email')}  
                         />
                    </FormField>
                    <Text color='status-critical' size='small'>{errors.email?.message}</Text>

                    <FormField label="Password">
                        <TextInput
                            type='password'
                            name='password'
                            placeholder='Password...'
                            {...register('password')}  
                        />
                    </FormField>
                    <Text color='status-critical' size='small'>{errors.password?.message}</Text>
                    
                    <FormField label="Confirm Password">
                        <TextInput
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirm Password...'
                            {...register('confirmPassword')}   
                        />
                    </FormField>
                    <Text color='status-critical' size='small'>{errors.confirmPassword?.message}</Text>

                    <CheckBox
                        pad='medium'
                        id='policy'
                        name='policy'
                        type='checkbox'
                        checked={checked}                        
                        label="I agree with the Privacy Policy" 
                        {...register("checked")}
                        onChange={(event) => setChecked(event.target.checked)}                      
                    />
                   <Text color='status-critical' size='small'>{errors.checked && 'The Privacy Policy must be accepted'}</Text>
                    
                    <Box direction="row" justify='evenly' margin='small'>
                        <Link to='/dashboard'>
                            <Button type="submit" id='submit' color='primary' label="Sign-Up" />
                        </Link>
                        
                        <Button type="reset" label="Reset" />
                    </Box>
                </Form>
            </Box>
            <Box width='35rem' ><Image fit='contain' src={signUpImg}></Image></Box> 
        </Box>
    </NavLayout>
    )
}

export default SignUp;