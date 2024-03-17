import PanelFeatureTitle from "./_components/PanelFeatureTitle";
import PanelFeatureKanban from "./_components/PanelFeatureKanban";
import PanelFeatureScrum from "./_components/PanelFeatureScrum";
import PanelFeatureReporting from "./_components/PanelFeatureReporting";
import PanelFeatureIssue from "./_components/PanelFeatureIssue";
import PanelFeatureCustomization from "./_components/PanelFeatureCustomization";
import PanelFeatureMigration from "./_components/PanelFeatureMigration";

const PanelFeatures = () => {
    return <>
        <div className="flex relative flex-col items-center justify-center w-full h-auto max-w-full pl-0 pr-0 pt-[100px] self-end -mt-5 min-w-0">
            <PanelFeatureTitle />
            <PanelFeatureKanban />
            <PanelFeatureScrum />
            <PanelFeatureIssue />
            <PanelFeatureReporting />
            <PanelFeatureCustomization />
            <PanelFeatureMigration />
        </div>
    </>
}

export default PanelFeatures;