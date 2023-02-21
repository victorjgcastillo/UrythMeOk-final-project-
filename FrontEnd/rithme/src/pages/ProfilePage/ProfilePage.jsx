import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import LogOut from '../../components/LogOut/LogOut';
import Navbar from '../../components/Navbar/Navbar';
import './ProfilePage.scss';

export default function ProfilePage() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='ProfilePage'>
            <div className='header'>
                <HeaderAndBack back_url={'/'} name={'Usuario'}/>
            </div>
            <div className='main'>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <h4>{user.createdAt.slice(0, 10)}</h4>
                <LogOut/>
            </div>
            <div className='footer'>
                <Navbar/>
            </div>
        </div>
    );
}
