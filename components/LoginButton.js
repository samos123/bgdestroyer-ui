import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import LoginForm from "./LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function LoginButton() {
    const [show, setShow] = useState(false);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header>
                Login to your account
                <a tabindex="0" onClick={() => document.body.click()}>
                <FontAwesomeIcon
                    className="p-2 float-end"
                    icon={faX}
                    onClick={() => setShow(false)}
                />
        </a>
            </Popover.Header>
            <Popover.Body>
                <LoginForm />
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={popover}
        >
            <Button variant="outline-primary">
                Login
            </Button>
        </OverlayTrigger>
    );
}
