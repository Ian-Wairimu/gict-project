import axios from "axios";


const client = axios.create({
    baseURL: "/api/dummy/submit"
});
export const create = (newObject) => {
    const request =  client.post(newObject);
    return request.then(res => res.data);
};

export default {
    create
}
