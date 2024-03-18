interface ContainerDboardProps {
    title: string,
    descBold: string,
    descNormal: string
}

const ContainerDboard = ({ title, descBold, descNormal }: ContainerDboardProps) => {
    return <>
        <header>
            <h1 className="text-[1.1rem] flex bg-[#f1f1f4] mb-2 py-2 px-4 text-[#008aa8]">{title}</h1>
        </header>
        <div className="mb-16">
            <p className='mx-8 mt-8 mb-4'>
                <strong>{descBold}</strong> {descNormal}
            </p>
            <div className="border-b border-b-[#e2e3e9] py-4 flex">
                <div className="bg-[#d4d5d3] h-[48px] w-[4px] mr-4 basis-12" />
                <div className="flex flex-col">
                    <div className="w-[30vw] bg-[#f1f1f4] h-[1rem] mb-4" />
                    <div className="w-[30vw] bg-[#f1f1f4] h-[1rem] mb-4" />
                </div>
            </div>
            <div className="flex pt-4">
                <div className="bg-[#d4d5d3] h-[48px] w-[4px] mr-4 basis-12" />
                <div className="flex flex-col">
                    <div className="w-[30vw] bg-[#f1f1f4] h-[1rem] mb-4" />
                    <div className="w-[30vw] bg-[#f1f1f4] h-[1rem] mb-4" />
                </div>
            </div>
        </div>
    </>
}

export default ContainerDboard;