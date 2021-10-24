import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useContext, useEffect, useRef, useState } from 'react';
import { getMessages, newMessage } from '../../Servers/appi';
import { AcccountContext } from '../../store/AcccountContext';
import { ChatFooter } from './ChatFooter';
import { MessageItem } from './MessageItem';


const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize: '50%'
    },
    container: {
        height: '79vh',
        overflow: 'scroll'
    },
    messItem: {
        padding: '1px 80px'
    }
})

export const Messages = ({ conversation, person }) => {
    const myStyles = useStyles();
    const [mess, setMess] = useState();
    const [allMess, setAllMess] = useState([]);
    const { acc, socket, msgFlag, setMsgFlag } = useContext(AcccountContext);
    const scrollRef = useRef();
    const [incomingMessage, setIncomingMessage] = useState(null);

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [allMess])

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.sender) && setAllMess(prev => [...prev, incomingMessage])
    }, [incomingMessage, conversation])

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setAllMess(data);
        }
        getMessageDetails();
    }, [conversation?._id, person?._id, msgFlag]);

    const recieverId = conversation?.members?.find(member => member !== acc.googleId);

    const sendText = async (e) => {
        if (!mess || mess === '') return;

        let code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                sender: acc.googleId,
                conversationId: conversation?._id,
                text: mess
            }
            socket.current.emit('sendMessage', {
                senderId: acc.googleId,
                recieverId,
                text: mess,
            })
            await newMessage(message);
            setMess('');
            setMsgFlag(prev => !prev)
        }
    }

    return (
        <Box className={myStyles.wrapper}>
            <Box className={myStyles.container} >
                {allMess && allMess.map(item => (
                    <Box key={Date.now() + item.text + (Math.random() * 1E9)} className={myStyles.messItem} ref={scrollRef}><MessageItem message={item} /></Box>
                ))}
            </Box>
            <ChatFooter mess={mess} setMess={setMess} sendText={sendText} />
        </Box>
    )
}