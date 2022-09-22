import dynamic from "next/dynamic";
import axios from 'axios'

const SwaggerUI = dynamic(import("swagger-ui-react"), { ssr: false });
import "swagger-ui-react/swagger-ui.css";

const OpenAPIDocs = ({ doc }) => {
    return <SwaggerUI spec={doc} />;
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
