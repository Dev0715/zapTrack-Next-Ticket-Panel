import Links from "./_components/Links";
import Copyright from "./_components/Copyright";

const Footer = () => {
    return <>
        <div className="max-w-full relative flex flex-col items-center justify-center h-auto bg-none min-w-0 p-0">
            <Links />
            <Copyright />
        </div>
    </>
}

export default Footer;