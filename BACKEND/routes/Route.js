import express from 'express';
import { addUser, delUser, getUsers } from '../controller/user.controller.js';
import {getConvo, newConvo} from '../controller/conversation.controller.js'
import { getMessage, newMessage } from '../controller/message.controller.js';
const router = express.Router();

router.post('/add', addUser);
router.delete('/user/:id', delUser);
router.get('/user', getUsers);
router.post('/conversation/add', newConvo);
router.post('/conversation/get', getConvo);
router.post('/message/add', newMessage);
router.get('/message/get/:id', getMessage);

export default router;