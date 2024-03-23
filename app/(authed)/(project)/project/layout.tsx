"use client"

const ProjectLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return <>
        <div>
            <div className="h-full min-h-full relative">
                {children}
            </div>
        </div>
    </>
}

export default ProjectLayout;