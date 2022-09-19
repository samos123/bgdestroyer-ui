import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({url, children, activeClassName = 'active'}) {
    const router = useRouter();
    return (
        <li className="nav-item">
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
        </li>
    );
}
