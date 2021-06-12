import React from 'react' 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Form, Image, Heading, FormField,TextInput, CheckBox, Box, Button, Anchor, Text} from 'grommet'
import signInImg from '../assets/signInImg.svg'
import { login } from '../auth/auth'
import  NavLayout  from './NavLayout'

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

    const [checked, setChecked] = React.useState(true);

    /*const signUpSubmit = (data) => {
        console.log(data)
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    }*/

    // LOGIN SUCCESS
    const onFinish = values => {
        console.log('Success:', values.value);
        login(props, values.value);
    };

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
                width='medium'
                direction='column'
                justify='center'
                alignContent='center'
                pad='small'
                animation='slideUp'
                border='all'
                elevation='medium'
                responsive={true}
                overflow='hidden'
                style={{alignItems:'center'}}
                round
              >
                                
                <Heading level='2'>Login</Heading>
                <Form 
                    name='form'
                    onSubmit={onFinish}
                >
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

                    <CheckBox
                        id='remember'
                        name='remember'
                        type='checkbox'
                        checked={checked}                        
                        label="Remember" 
                        {...register("remember")} 
                        onChange={(event) => setChecked(event.target.checked)}                     
                    />

                    <Box direction="row" justify='center' margin='small'>
                        <Button type="submit" color='primary' label="Sign-In" />
                    </Box>
                    <Anchor href='#' label='Forgot your passwod?'/>
                </Form>
            </Box>
            <Box width='32rem' ><Image fit='contain' src={signInImg}></Image></Box> 
        </Box>
    </NavLayout>
    )
}

export default SignIn;