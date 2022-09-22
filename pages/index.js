import Head from "next/head";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import UploadButton from "../components/UploadButton.js";
import demo from "../public/demo.jpg";
import demo_removed from "../public/demo-removed.jpg";

export default function Home() {
    return (
        <>
            <div className="row g-5 py-5">
                <div className="col-lg-7">
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                        Remove Image Background
                    </h1>
                    <p className="lead">
                        Free online tool to remove the background from your image automatically. See example of the tool in action:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            {" "}
                            <Image priority layout="responsive" src={demo} />
                        </div>
                        <div className="col-6">
                            <Image priority layout="responsive" src={demo_removed} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 text-center">
                    <h2 className="pb-3">Try it now for <b>free</b></h2>
                    <UploadButton />
                </div>
            </div>
        </>
    );
}
