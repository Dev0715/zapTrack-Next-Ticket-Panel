import Footer from "./_components/Footer/page";
import Navbar from "./_components/Navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <Navbar />
            <main className="bg-white">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MarketingLayout;