
import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-2 py-2'>
           <div className='logo'>
            <img className='w-72 ' src={logo} alt="" />
           </div>
           <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
          <p>
             {
           moment().format('dddd,LL')
           }
          </p>
        </div>
    );
};

export default Header;