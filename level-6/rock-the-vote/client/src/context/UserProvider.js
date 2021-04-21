import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        // comment: [],
        errMsg: ""
    }

    const [ userState, setUserState ] = useState(initState)
    const [ allIssues, setAllIssues ] = useState([])

    function signup(credentials){
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token,
                    issues: []
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                // getAllIssues()
                getUserIssues()
                // getComments()
                setUserState(prevUserState => ({
                 ...prevUserState,
                    user,
                    token,
                    issues: [],
                    // comment: []
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: ""
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getUserIssues(){
        userAxios.get("/api/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //  None of these seemed to work, or at least implementing them was wrong.

    // function getAllIssues(){
    //     userAxios.get("/api/issue")
    //         .then(res => setAllIssues(res.data))
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    function getAllIssues(){
        userAxios.get("/api/issue")
            .then(res => {
                setAllIssues(prevState => ({
                    ...prevState,
                    allIssues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // function getAllIssues(){
    //     userAxios.get("/api/issue")
    //         .then(res => {
    //             setAllIssues(...allIssues, res.data)
    //         })
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setAllIssues(prevIssues => [...prevIssues, res.data])
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //  These might work but need to be implemented

    // function getComments(){
    //     userAxios.post('api/comment')
    //     .then(res => {
    //         setUserState(prevState => ({
    //             ...prevState,
    //             comment: res.data
    //         }))
    //     })
    //     .catch(err => console.log(err.response.data.errMsg))
    // }

    // function addComment(newComment){
    //     userAxios.post("/api/comment/", newComment)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
                getUserIssues,
                getAllIssues,
                addIssue,
                // addComment,
            }}>
            { props.children }
        </UserContext.Provider>
    )
}