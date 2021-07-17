import axios from "axios";

export default {
    data() {
        return {
            apiUrl: "http://localhost:3000/authentication/v1/auth",

            tokenCookie: "token",
            refreshTokenCookie: "refresh_token",

            toastSeveritySuccess: "success",
            toastSeverityInfo: "info",
            toastSeverityWarn: "warn",
            toastSeverityError: "error",
            toastDefaultLife: 1000,

            duplicateMessage: "duplicate",
            verifiedMessage: "already verified",
            notVerifiedMessage: "not verified",
            emailAlreadyTakenMessage: "email is already taken",
            incompleteFormMessage: "Please check form condition"
        }
    },
    methods: {
        setCookie(name, data) {
            document.cookie = `${name}=${data}`
        },
        getCookie(name) {
            const value = `; ${document.cookie}`
            const parts = value.split(`; ${name}=`)
            if (parts.length === 2) return parts.pop().split(';').shift()
        },
        deleteCookie(name) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`
        },
        showToast(severity, message, life) {
            this.$toast.add({severity: severity, summary: `${severity.charAt(0).toUpperCase() + severity.slice(1)}`, detail: message, life: life})
        },
        noTokenOnlyArea() {
            if (this.getCookie(this.tokenCookie) !== undefined) {
                this.tokenOnlyArea()
            }
        },
        tokenOnlyArea() {
            if (this.getCookie(this.tokenCookie) !== undefined) {
                // verify token
                const context = this
                let header = {headers: {Authorization: `Bearer ${context.getCookie(context.tokenCookie)}`}}
                axios.post(`${context.apiUrl}/verified/current`, {}, header).then(function (response) {
                    console.log(response.data)
                }).catch(function (error) {
                    try {
                        if (error.response.data.message.includes(context.verifiedMessage)) {
                            context.$router.push('/dashboard')
                        } else if (error.response.data.message.includes(context.notVerifiedMessage)) {
                            context.$router.push('/verify')
                        } else {
                            context.deleteCookie(context.tokenCookie)
                            context.deleteCookie(context.refreshTokenCookie)
                            context.$router.push('/')
                        }
                    } catch (e) {
                        context.$router.push('/error')
                        context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)
                    }
                })
            }else{
                this.$router.push('/')
            }
        }

    }
}
