import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useContext } from "react";
import { setConversation } from "../../Servers/appi";
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
})

export const ConversationItem = ({ user }) => {
    const myStyles = useStyles();
    const { acc } = useContext(AcccountContext);
    const { setPerson } = useContext(UserContext);

    const setPeeps = async () => {
        setPerson(user);
        await setConversation({
            senderId: acc.googleId,
            recieverId: user.googleId
        })
    }

    return (
        <Box className={myStyles.comp} onClick={setPeeps}>
            <Box>
                <img className={myStyles.dpp} src={user.imageUrl} alt="DPP" />
            </Box>
            <Box>
                <Typography style={{ paddingTop: '7px' }}>{user.name}</Typography>
            </Box>
        </Box>
    )
}
