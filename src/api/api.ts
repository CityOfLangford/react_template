import axios from "axios";
import config from "../config";

export default () => {
	const instance = axios.create(config.axiosConfig);
	instance.defaults.headers.post["Content-Type"] = "application/json";

	return instance;
};
