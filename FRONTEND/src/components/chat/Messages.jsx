import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { getMessages, newMessage } from '../../Servers/appi'
import { AcccountContext } from '../../store/AcccountContext'
import { ChatFooter } from './ChatFooter'
import { MessageItem } from './MessageItem'


const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize: '50%'
    },
    container: {
        height: '79vh'
    },
    messItem: {
        padding: '1px 80px'
    }
})

export const Messages = ({conversation}) => {
    const myStyles = useStyles();
    const [mess, setMess] = useState("");
    const [allMess, setAllMess] = useState([]);
    const {acc} = useContext(AcccountContext);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setAllMess(data.data);
        }
        getMessageDetails();
    }, [conversation?._id])

    const sendText = async (e) => {
        if(!mess || mess === '') return;

        let code = e.keyCode || e.which;
        if(code === 13){
            let message = {
                sender: acc.googleId,
                conversationId: conversation?._id,
                text: mess
            }
            await newMessage(message);
            setMess('');
        }
    }

    return (
        <Box className={myStyles.wrapper}>
            <Box className={myStyles.container}>
                {allMess && allMess.map(item => (
                    <Box className={myStyles.messItem}><MessageItem message={item}/></Box>
                ))}
            </Box>
            <ChatFooter mess={mess} setMess={setMess} sendText={sendText} />
        </Box>
    )
}