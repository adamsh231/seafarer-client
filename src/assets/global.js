export default {
    data(){
        return{
            apiUrl: "http://localhost:3000/authentication/v1/auth",

            tokenCookie: "token",
            refreshTokenCookie: "refresh_token",

            toastSeveritySuccess: "success",
            toastSeverityInfo: "info",
            toastSeverityWarn: "warn",
            toastSeverityError: "error",
            toastDefaultLife: 1000,

            duplicateMessage: "duplicate",
            emailAlreadyTakenMessage: "email is already taken"
        }
    },
    methods: {
        setCookie(name, data){
            document.cookie = `${name}=${data}`
        },
        getCookie(name) {
            const value = `; ${document.cookie}`
            const parts = value.split(`; ${name}=`)
            if (parts.length === 2) return parts.pop().split(';').shift()
        },
        deleteCookie(name){
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`
        },
        showToast(severity, message, life){
            this.$toast.add({severity: severity, summary: `${severity.charAt(0).toUpperCase() + severity.slice(1)}`, detail: message, life: life})
        },
        isHasToken(){
            return this.getCookie(this.tokenCookie) !== undefined;
        }

    }
}
