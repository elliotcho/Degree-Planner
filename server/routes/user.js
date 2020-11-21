import express from 'express';
import { 
    changePassword,
    forgotPassword,
    getMe,
    login, 
    logout, 
    register 
} from '../controllers/user';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgot_password', forgotPassword);
router.post('/change_password', changePassword);
router.get('/me', getMe);

export default router;