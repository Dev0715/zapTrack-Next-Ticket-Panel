import PanelPmPanel from "./_components/PanelPmPlan";
import PanelPmTeam from "./_components/PanelPmTeam";
import PanelPmInsight from "./_components/PanelPmInsight";
import PanelPmEasyuse from "./_components/PanelPmEasyuse";
import PanelPmSelfHosted from "./_components/PanelPmSelfHosted";
import PanelPmRegister from "./_components/PanelPmRegister";

const PanelAgile = () => {
    return <>
        <div className="flex relative flex-col items-center justify-center w-full h-auto max-w-full min-w-0 p-0">
            <h2 className="relative w-full h-auto max-w-[1260px] text-[#008AA8] text-[3rem] font-bold text-center mb-0 bg-none min-w-0 px-[30px] py-[60px]">
                <span className="italic">Agile </span>project management made easy, intuitive and effective
            </h2>
            <PanelPmPanel />
            <PanelPmTeam />
            <PanelPmInsight />
            <PanelPmEasyuse />
            <PanelPmSelfHosted />
            <PanelPmRegister />
        </div>
    </>
}

export default PanelAgile;