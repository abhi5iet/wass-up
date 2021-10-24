import { Box } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { getConvo } from '../../Servers/appi';
import { AcccountContext } from '../../store/AcccountContext';
import { UserContext } from '../../store/UserContext';
import { ChatHeader } from './ChatHeader'
import { Messages } from './Messages'

export const Chat = () => {
    const { person } = useContext(UserContext);
    const { acc } = useContext(AcccountContext);

    const [conversation, setConversation] = useState({});
    useEffect(() => {
        const getConvoDetail = async () => {
            let data = await getConvo({ sender: acc.googleId, reciever: person.googleId });
            setConversation(data);
        }
        getConvoDetail()
    }, [acc.googleId, person.googleId]);
    return (
        <Box>
            <ChatHeader person={person} />
            <Messages conversation={conversation} person={person} />
        </Box>
    )
}