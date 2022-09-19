const axios = require("axios");
import { auth } from "../lib/initFirebase.js";

export default async (formData) => {
    const user = auth.currentUser;
    if (user) {
        const token = await user.getIdToken();
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios
        .post(process.env.NEXT_PUBLIC_APIURL, formData, {
            responseType: "arraybuffer",
        })

    return Buffer.from(response.data, "binary").toString("base64");
};
