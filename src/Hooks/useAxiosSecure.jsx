import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({ baseURL: 'https://studdy-buddy-server.vercel.app', withCredentials: true })
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use((res) => {
            return res
        }, (err) => {
            console.log('Err Tracked', err.response)
            if (err.response.status === 401 || err.response.status === 403) {
                console.log('LogOut')
                logOut()
                    .then(() => { navigate("/login") })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
    }, [logOut, navigate])
    return axiosSecure
}
export default useAxiosSecure;