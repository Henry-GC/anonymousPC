import { Box, Spinner } from "@chakra-ui/react";
import "./Assets/Styles/UserDashboard.css"

function UserDashboard (props){

    const userData = props.user.userData

    if (!userData) return <Spinner>...</Spinner>

    return (
        <Box className="user-dashboard-container">
            <div className="user-data-dashboard-container">
                <div className="user-avatar-dashboard-container">
                    <img src="/multimedia/avatar_1.jpg" alt="avatar"/>
                </div>
                <div className="user-title-dashboard-container">
                    <h1>{userData.nickname || `Sin registro`}</h1>
                    <div className="user-range-container">
                        <div className="user-icon-range">
                            <img src="/multimedia/range_0.png" alt="insignia"/>
                        </div>
                        <p>Novato</p>
                    </div>
                </div>
            </div>
            <div className="banner-temp">
                <img src="/multimedia/proximamente.png" alt="proximamente" width="100%"/>
            </div>
            <div className="user-achiev-dashboard-container">
                <div className="achievment-container">

                </div>
                <div className="achievment-container">

                </div>
                <div className="achievment-container">

                </div>
                <div className="achievment-container">

                </div>
                <div className="achievment-container">

                </div>
                <div className="achievment-container">

                </div>
            </div>
        </Box>
    )
}

export default UserDashboard;