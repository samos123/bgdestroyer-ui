const axios = require("axios");
import { auth } from "../lib/initFirebase.js";

export default async (formData) => {
    const user = auth.currentUser
    let config = {responseType: "arraybuffer"}
    if (user) {
        const token = await user.getIdToken();
        config["headers"] = {"Authorization": `Bearer ${token}`};
    }

    const response = await axios.post(process.env.NEXT_PUBLIC_APIURL, formData, config)

    return Buffer.from(response.data, "binary").toString("base64");
};
