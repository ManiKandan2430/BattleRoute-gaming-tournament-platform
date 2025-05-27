import express from 'express'
import { LoginUser, Logout, RegisterUser } from '../controller/auth.Controller.js'

const router = express.Router()

router.post('/register',RegisterUser)
router.post('/login',LoginUser)
router.post('/logout',Logout)

export default router