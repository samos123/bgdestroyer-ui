import dynamic from "next/dynamic";
import axios from "axios";
import { auth } from "../lib/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import TokenButton from "../components/TokenButton";

const SwaggerUI = dynamic(import("swagger-ui-react"), { ssr: false });
import "swagger-ui-react/swagger-ui.css";

const OpenAPIDocs = ({ doc }) => {
    const [user, loading, error] = useAuthState(auth);

    if (user) {
        return (
            <div>
                <p>
                    Hello {user.email}. Generate a JWT token below so you can
                    call the API
                </p>
                <TokenButton className="mt-2" />
                <SwaggerUI spec={doc} docExpansion="full" />
            </div>
        );
    } else {
        return <SwaggerUI spec={doc} docExpansion="full" />;
    }
};
export default OpenAPIDocs;

export async function getStaticProps(context) {
    const result = await axios(
        "https://raw.githubusercontent.com/samos123/bgdestroyer/main/openapi.yml"
    );
    return {
        props: { doc: result.data },
    };
}
