import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Verify from "../views/Verify";
import EmailRecover from "../views/recover/EmailRecover";
import OTPRecover from "../views/recover/OTPRecover";
import PasswordRecover from "../views/recover/PasswordRecover";
import MainMenu from "../views/dashboard/MainMenu";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/recover/email',
    name: 'EmailRecover',
    component: EmailRecover
  },
  {
    path: '/recover/otp',
    name: 'OTPRecover',
    component: OTPRecover
  },
  {
    path: '/recover/password',
    name: 'PasswordRecover',
    component: PasswordRecover
  },
  {
    path: '/dashboard',
    name: 'MainMenu',
    component: MainMenu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
