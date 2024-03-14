const PanelContact = () => {
    return <>
        <div className="flex relative flex-row items-center justify-center w-full h-auto max-w-full bg-[#F1F1F4] min-w-0 p-2">
            <div className="flex w-full h-auto items-stretch shrink flex-row flex-nowrap bg-[#F1F1F4] max-w-[1260px] min-w-0 p-2">
                <div className="flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 py-8 px-2">
                    <h2 className="relative w-full h-auto max-w-none font-bold text-[#4C566A] pb-[30px] tracking-tight min-w-0 text-4xl">Don't want to miss Taiga next releases and features?</h2>
                    <div className="relative w-full h-auto max-w-none text-[#70728F] text-lg">We'll keep in touch with useful information and resources about Taiga, agile and project management.</div>
                </div>
                <div className="flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-2" style={{ width: `calc((100% - 2 * 0px) * 7 / 12)` }}>
                    <div className="sendinblue-form-wrapper">
                        <iframe className="" loading="lazy" width={1200} height={350} src="https://b60b136b.sibforms.com/serve/MUIEANJUdlNXDSvqNoM1pnbnIqfIlwED5Lumus_J0gTNLi0VrNGfIt9Q4uJzLA3mH20gcTzA56kG9RbfWlu5nTFY8VITOQlUV-Xe2o8nvm7WWPmywYiVKOOsb_IhXU_2Vy1yOuWhR25j4miJDMZ2bJ6ToCKkMMwhXMGnV19C6uCOh9Qr1sIeBLke9Fi5AQcQZxqRloFEDl-n4dbm" frameBorder={0} scrolling="auto" allowFullScreen />
                        <style dangerouslySetInnerHTML={{ __html: "\n    .sendinblue-form-wrapper iframe {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        max-width: 100%;\n    }\n" }} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PanelContact;