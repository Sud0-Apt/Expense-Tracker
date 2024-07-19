const express = require('express');
const router = express.Router();
const {
    register,
    login,
    protectedRoute,
    updateUser,
    deleteUser,
    checkSession
} = require('../controllers/userController');

router.post('/register', register);

router.post('/login', login);

router.get('/protected', protectedRoute);

router.put('/update', updateUser);

router.delete('/delete', deleteUser);

router.get('/checkSession', checkSession);

module.exports = router;
