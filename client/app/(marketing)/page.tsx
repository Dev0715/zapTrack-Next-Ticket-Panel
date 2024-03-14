import PanelIntro from "./_components/PanelIntro";
import PanelCompany from "./_components/PanelCompany";
import PanelCoolminds from "./_components/PanelCoolminds";
import PanelBrands from "./_components/PanelBrands";
import PanelAgile from "./_components/PanelAgile/page";
import PanelAbout from "./_components/PanelAbout";
import PanelFeatures from "./_components/PanelFeatures/page";
import PanelContact from "./_components/PanelContact";

const MarketingPage = () => {
    return <>
        <div className="flex flex-col relative items-center justify-center w-full p-0">
            <PanelIntro />
            <PanelCompany />
            <PanelCoolminds />
            <PanelBrands />
            <PanelAgile />
            <PanelAbout />
            <PanelFeatures />
            <PanelContact />
        </div>
    </>;
}

export default MarketingPage;

