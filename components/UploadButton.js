import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
const axios = require("axios");
import Card from "react-bootstrap/Card";
import { Upload, Download } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FileUploader } from "react-drag-drop-files";
import apiUpload from "../lib/api-upload";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function UploadButton() {
    const [key, setKey] = useState(1);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const handleChange = (file) => {
        setImage(null);
        setFile(file);
        const formData = new FormData();
        formData.append("file", file, file.name);
        window.gtag("event", "uploading", {
            event_category: "engagement",
            event_label: file.filename,
        });
        setLoading(file.name);
        setError("");
        apiUpload(formData)
            .then((response) => {
                setImage(response);
                setLoading("");
                window.gtag("event", "upload", {
                    event_category: "engagement",
                    event_label: file.filename,
                });
            })
            .catch((error) => {
                console.log(error);
                let errorMsg = error.message;
                if (error.response && error.response.data) {
                    const res = JSON.parse(
                        Buffer.from(error.response.data).toString("utf8")
                    );
                    errorMsg += ": " + res.error;
                }
                gtag("event", "exception", {
                    description: errorMsg,
                    fatal: false,
                });
                setError(errorMsg);
                setLoading("");
                setKey(key + 1);
            });
    };

    return (
        <Card bg="light" border="primary" className="text-center">
            <FileUploader
                handleChange={handleChange}
                key={key}
                classes="mt-3 pb-3"
                name="file"
                types={fileTypes}
            >
                <Button variant="primary" size="lg">
                    <Upload /> Upload
                </Button>{" "}
                <br />
                or drop file here
            </FileUploader>
            {error && <Alert variant="danger">{error}</Alert>}

            {loading && (
                <div id="loading" className="m-4">
                    <FontAwesomeIcon
                        className="text-success"
                        icon={faSpinner}
                        size="2xl"
                        spin
                    />
                    <p>
                        <br />
                        Removing background from {loading}. This takes about 1
                        minute.
                    </p>
                </div>
            )}
            {image && (
                <a
                    download={file.name + "-bgdestroyer.png"}
                    href={`data:image/png;base64,${image}`}
                >
                    <img
                        className="img-fluid"
                        alt="background removed image"
                        src={`data:image/png;base64,${image}`}
                    />
                    <Button className="mt-3 mb-3" variant="success" size="lg">
                        <Download /> Download
                    </Button>
                </a>
            )}
        </Card>
    );
}
