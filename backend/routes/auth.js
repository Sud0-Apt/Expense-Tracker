const express = require('express');
const router = express.Router();
const {
    register,
    login,
    protectedRoute,
    updateUser,
    deleteUser,
    checkSession,
    getuserProfile
} = require('../controllers/userController');

router.get('/profile', getuserProfile);

router.post('/register', register);

router.post('/login', login);

router.get('/protected', protectedRoute);

router.put('/update', updateUser);

router.delete('/delete', deleteUser);

router.get('/checkSession', checkSession);

module.exports = router;
