import axios from "axios";
import { axiosConfig } from "../config";

export default () => {
    const instance = axios.create(axiosConfig);
    instance.defaults.headers.post["Content-Type"] = "application/json";

    return instance;
};
