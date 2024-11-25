import { Icon } from '@iconify/react';
import TextInput from '../componenets/shared/textInput';
import PasswordInput from '../componenets/shared/passwordInput';
import { Link } from 'react-router-dom'; //default react file

const LogInComponent = () => {
    return <div className="w-full h-full flex flex-col items-center">
        
                <div className = "logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                    <Icon icon="logos:spotify" width ="160" />
                </div>
                <div className='InputRegion w-1/3 py-5 flex items-center justify-center flex-col' >
                    <div className='font-bold mb-12'>To Continue , Log in to spotify</div>
                    {/* will make all the login part over here */}
                    <TextInput label="Email address or UserName" placeHolder ="Email ddress or UserName" className="my-6"/>
                    <PasswordInput
                    label="Password"
                    placeHolder="Password"/>
                    <div className=' w-full flex items-center justify-end my-6'>
                        <button className='bg-green-400 font-semibold p-3 px-10 rounded-full'>LOG IN</button>
                    </div>
                    
                    <div className='w-full border border-solid border-gray-300'>

                    </div>
                    <div className='my-6 font-semibold text-lg'>Don't Have an account</div>
                    <div className='border border-gray-500  text-gray-500 font-bold w-full rounded-full flex items-center justify-center py-4'>
                        <Link to ="/signup">SIGN UP FOR SPOTIFY</Link>
                        
                    </div>

                </div>
                
                
        
        
        {/* flex is used for positioning here */}
    </div>;
};

export default LogInComponent;