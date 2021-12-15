import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import UpdateProfile from '../UpdateProfile/UpdateProfile';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProfileDetails></ProfileDetails>
            <UpdateProfile></UpdateProfile>
            <Footer></Footer>
        </div>
    );
};

export default Home;