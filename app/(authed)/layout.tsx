import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { config } from '../api/auth/[...nextauth]/route';
import Navbar from './_components/Navbar/page';

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
        <Navbar />
        {children}
    </>
}

export default ProjectLayout;