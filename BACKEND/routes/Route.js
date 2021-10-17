import express from 'express';
import { addUser, delUser, getUsers } from '../controller/user.controller.js';
import {newConvo} from '../controller/conversation.controller.js'
const router = express.Router();

router.post('/add', addUser);
router.delete('/user/:id', delUser);
router.get('/user', getUsers);
router.post('/conversation/add', newConvo);

export default router;