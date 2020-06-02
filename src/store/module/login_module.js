const login = {
    state: {
        userName: "",
        userPassword: ""
    },
    getters: {
        userName: (state) => state.userName,
        userPassword: (state) => state.userPassword
    },
    actions: {
        
    },
    mutation: {
        setUserInfo(state, value) {
            state.userName = value.userName;
            state.userPassword = value.userPassword;
        }
    }
}
export default login