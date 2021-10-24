import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { getConvo, setConversation } from "../../Servers/appi";
import { AcccountContext } from "../../store/AcccountContext";
import { UserContext } from "../../store/UserContext";

const useStyles = makeStyles({
    dpp: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: '0 14px',
    },
    comp: {
        display: 'flex',
        height: 40,
        cursor: 'pointer',
        padding: '13px 0px'
    },
    timestamp: {
        fontSize: 12,
        marginLeft: 'auto',
        marginRight: 20,
        color: "#00000099"
    },
    text: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
    }
})

export const ConversationItem = ({ user }) => {
    const myStyles = useStyles();
    const { acc, msgFlag } = useContext(AcccountContext);
    const { setPerson } = useContext(UserContext);
    const [convMess, setConvMess] = useState({ text: null, timestamp: null });

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConvo({ sender: acc.googleId, reciever: user.googleId });
            setConvMess({ text: data.message, timestamp: data.updatedAt });
        }
        getConversationMessage()
    }, [msgFlag])

    const setPeeps = async () => {
        setPerson(user);
        await setConversation({
            senderId: acc.googleId,
            recieverId: user.googleId
        })
    }

    const getTime = (time) => {
        return time < 10 ? '0' + time : time;
    }

    return (
        <Box className={myStyles.comp} onClick={setPeeps}>
            <Box>
                <img className={myStyles.dpp} src={user.imageUrl} alt="DPP" />
            </Box>
            <Box style={{ width: '100%' }}>
                <Box style={{ display: 'flex' }} >
                    <Typography style={{ paddingTop: '7px' }}>{user.name}</Typography>
                    {
                        convMess.text && <Typography className={myStyles.timestamp}>
                            {getTime(new Date(convMess.timestamp).getHours())}:{getTime(new Date(convMess.timestamp).getMinutes())}
                        </Typography>
                    }
                </Box>
                <Box>
                    <Typography className={myStyles.txt}>{convMess.text}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
