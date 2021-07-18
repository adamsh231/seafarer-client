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

            otpMessage: "otp",
            duplicateMessage: "duplicate",
            notFoundMessage: "record not",
            credentialMessage: "credential",
            verifiedMessage: "already verified",
            notVerifiedMessage: "not verified",

            emailAlreadyTakenMessage: "email is already taken",
            credentialIsNotMatchMessage: "credential is not match",
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
        tokenOnlyArea(verifiedOnly = false) {
            if (this.getCookie(this.tokenCookie) !== undefined) {

                // current user api
                const context = this
                let url = `${context.apiUrl}/verified/current`
                let header = {
                    headers: {
                        Authorization: `Bearer ${context.getCookie(context.tokenCookie)}`,
                    }
                }

                axios.get(url, header).then(function (response) {

                    // success response means this user is verified
                    // param @verifiedOnly used if any access to outside verified area
                    // will be redirect back to /dashboard
                    // which is root of verified area
                    if (!verifiedOnly) {
                        context.$router.replace('/dashboard')
                    }

                }).catch(function (error) {
                    try {
                        if (error.response.data.message.includes(context.notVerifiedMessage)) {

                            // not verified redirect
                            context.$router.replace('/verify')

                        } else {

                            // false token redirect
                            context.deleteCookie(context.tokenCookie)
                            context.deleteCookie(context.refreshTokenCookie)
                            context.$router.replace('/')

                        }
                    } catch (e) {

                        // unknown redirect
                        context.$router.replace('/error')
                        context.showToast(context.toastSeverityError, error.message, context.toastDefaultLife)

                    }
                })
            } else {

                // redirect direct access without token
                this.$router.replace('/')

            }
        }

    }
}
