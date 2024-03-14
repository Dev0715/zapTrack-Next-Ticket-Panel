import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { config } from '../api/auth/[...nextauth]/route';

const ProjectLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const session = await getServerSession(config);
    if (session === null) {
        redirect('/login');
    }

    return <>
        {children}
    </>
}

export default ProjectLayout;