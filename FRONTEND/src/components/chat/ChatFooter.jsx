import { AttachFile, EmojiEmotionsOutlined, Mic } from '@mui/icons-material'
import { InputBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
    footer: {
        height: '55px',
        background: '#EDEDED',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 'opx 15px',
        '& > *': {
            margin: 5,
            color: '#919191',
        }
    },
    clipIcon: {
        transform: 'rotate(40deg)',
    },
    searchbox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        width: `calc(95% - 100px)`,
    },
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 25,
        fontSize: 14,
        width: '100%',
        height: 20
    },
}));

export const ChatFooter = ({sendText, setMess, mess}) => {
    const myStyles = useStyles();
    return (
        <Box className={myStyles.footer}>
            <EmojiEmotionsOutlined />
            <AttachFile className={myStyles.clipIcon} />
            <Box className={myStyles.searchbox}>
                <StyledInputBase
                    placeholder="Type a message"
                    onKeyPress={(e) => sendText(e)}
                    value={mess}
                    onChange={(e) => setMess(e.target.value )}
                    inputProps={{ 'aria-label': 'search' }} />
            </Box>
            <Mic/>
        </Box>
    )
}
