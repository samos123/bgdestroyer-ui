import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import { useRouter } from "next/router";

export default function NavItem({url, children, activeClassName = 'active'}) {
    const router = useRouter();
    return (
        <Nav.Item>
            <Link href={url} passHref>
                <a
                    className={
                        router.pathname == url ? "nav-link "+activeClassName : "nav-link"
                    }
                    aria-current="page"
                >
                    {children}
                </a>
            </Link>
        </Nav.Item>
    );
}
