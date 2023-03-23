const API_URL = "http://localhost:8080/api/auth/"

class AuthService {
    register(id, pw, email) {
        return axios.post(
            API_URL + "signup",
            {
                id,
                pw,
                email
            }
        );
    }

    login(id, pw, email) {
        return axios.post(
            API_URL + "signin",
            {
                id,
                pw
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            }
        );
    }
}