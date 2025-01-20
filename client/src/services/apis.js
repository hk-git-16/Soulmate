const BASE_URL = "http://localhost:5000/api"

export const authEndpoints = {
    REGISTER_API: BASE_URL + "/auth/register",
    LOGIN_API: BASE_URL + "/auth/login",
} 

export const therapistEndpoints = {
    ADD_THERAPIST_API: BASE_URL + "/therapist/addTherapist",
    EDIT_THERAPIST_API: BASE_URL + "/therapist/editTherapist",
    FETCH_THERAPISTS_API: BASE_URL + "/therapist/fetchTherapists",
}