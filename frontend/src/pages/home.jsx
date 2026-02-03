import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="navBar">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <h2><span style={{ color: "#FF9839" }}>Video</span>Conf</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap:"1rem" }}>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <IconButton onClick={
                            () => {
                                navigate("/history")
                            }
                        }>
                            <RestoreIcon />
                        </IconButton>
                        <p style={{opacity:"0.7"}}>History</p>
                    </div>
                    <div>
                        <Button sx={{ textTransform: "none" }} onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}>
                            <p>LogOut</p>
                        </Button>
                    </div>
                </div>


            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Join meetings in seconds — just enter the Code</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)