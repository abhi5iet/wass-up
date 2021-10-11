import express from 'express';
import { addUser, delUser, getUsers } from '../controller/user.controller.js';
const router = express.Router();

router.post('/add', addUser);
router.delete('/user/:id', delUser);
router.get('/user', getUsers);

export default router;