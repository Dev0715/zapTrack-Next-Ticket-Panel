"use client"

import { useEffect } from 'react';
import { getSession } from 'next-auth/react'

import ContainerDboard from '../_components/ContainerDboard/page';
import CardProject from '../_components/CardProject/page';
import BtnBgGreen from '../_components/BtnBgGreen/page';

import { getUserByEmail } from '@/app/actions/auth';
import { setItem, LS_USER } from '@/app/utils/localstore';

const Dashboard = () => {
    useEffect(() => {
        getSession().then((session: any) => {
            getUserByEmail({
                email: session.user.email
            }).then((res: any) => {
                const data = res.data;
                if (data.status) {
                    setItem(LS_USER, JSON.stringify(data.user));
                }
            }).catch(err => { })
        })
    }, []);

    return <>
        <div>
            <div>
                <div className='flex justify-center items-center h-full min-h-full relative'>
                    <div className="flex my-4 px-5 max-w-[1200px] w-full">
                        <div className="flex-1">
                            <h1 className='font-medium text-[1.4rem] text-[#008aa8] mb-4'>Projects Dashboard</h1>
                            <div className='flex flex-row mr-6'>
                                <section className="flex-1 mr-8">
                                    <ContainerDboard
                                        title={`Working on`}
                                        descBold={`It feels empty, doesn't it?`}
                                        descNormal={`Start working with Taiga and you'll see here the stories, tasks and issues you are working on.`}
                                    />
                                </section>
                                <section className="flex-1">
                                    <ContainerDboard
                                        title={`Watching`}
                                        descBold={`Follow`}
                                        descNormal={`user stories, tasks, issues in your projects and be notified about their changes :)`}
                                    />
                                </section>
                            </div>
                        </div>
                        <aside className="basis-[300px] grow-0 shrink-0">
                            <section>
                                <CardProject />
                                <BtnBgGreen title='Manage projects' label='Manage projects' />
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard;