"use client"

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { FiFolder, FiCompass, FiHelpCircle, FiBell, FiChevronDown, FiPlus, FiLifeBuoy, FiCommand, FiMessageSquare } from "react-icons/fi";
import { useState } from 'react';

const Dashboard = () => {
    const [projectPopShow, setProjectPopShow] = useState(false);
    const [helpPopShow, setHelpPopShow] = useState(false);
    const [profilePopShow, setProfilePopShow] = useState(false);

    return <>
        <nav className="bg-[#d8dee9] flex h-12 justify-between relative" >
            <div className="items-center flex">
                <Link title="Homepage" className="py-[4.8px] px-[6.4px] text-[#d8dee9]" href={`/`}>
                    <svg id="logo-svg" xmlns="http://www.w3.org/2000/svg" className='w-[2.2rem] h-[2.2rem] fill-[#4c566a]'>
                        <style dangerouslySetInnerHTML={{ __html: "\n        #logo-svg path {}\n    " }} />
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.3221 0L22.0675 6.27912L29.9148 5.66929L29.163 13.603L35 18.4588L29.1617 22.9624L29.914 31.5991L22.0591 30.3782L17.3216 37L13.0084 30.3801L4.99987 31.599L5.9196 22.9601L0 18.4589L5.918 13.6061L4.99873 5.66924L13.0011 6.27816L17.3221 0ZM17.3735 2.38866L13.6697 7.76999L6.56649 7.22948L7.37806 14.2365L2.28158 18.4157L7.37646 22.2897L6.56535 29.9084L13.6624 28.8282L17.374 34.5247L21.4481 28.8302L28.3841 29.9083L27.7202 22.2873L32.7391 18.4158L27.7189 14.2396L28.3833 7.22943L21.4397 7.76902L17.3735 2.38866Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.0083 18.4784L17.5052 15.866L15.002 18.4784L17.5052 21.0908L20.0083 18.4784ZM17.5052 13.8335L13.0546 18.4784L17.5052 23.1232L21.9557 18.4784L17.5052 13.8335Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.07437 11.0381L15.4042 16.0588L14.571 17.203L9.09955 12.8632L7.08025 14.5627L6.21582 13.4441L9.07437 11.0381Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.2111 6.65541L24.8491 10.073L20.9314 14.9113L25.8477 10.9591L28.7862 13.355L27.9384 14.4875L25.8417 12.778L20.4429 17.1181L19.8238 16.2792L19.7619 16.3556L18.7101 15.428L23.0639 10.0511L21.1388 7.55697L22.2111 6.65541ZM11.9434 10.055L13.8716 7.55697L12.7992 6.65541L10.1642 10.0691L15.1661 16.3511L16.2252 15.4326L11.9434 10.055Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.936 25.6926L19.6061 20.6719L20.4394 19.5278L25.9108 23.8676L27.9301 22.168L28.7945 23.2867L25.936 25.6926Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7992 30.0753L10.1613 26.6577L14.0789 21.8194L9.16265 25.7716L6.22416 23.3757L7.07192 22.2432L9.16862 23.9528L14.5674 19.6127L15.1865 20.4515L15.2484 20.3751L16.3002 21.3027L11.9464 26.6796L13.8716 29.1738L12.7992 30.0753ZM23.0669 26.6757L21.1388 29.1738L22.2111 30.0753L24.8461 26.6616L19.8442 20.3796L18.7852 21.2981L23.0669 26.6757Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.4723 30.0493L17.4308 22.1281L18.795 21.9327L19.6896 28.7366L22.2686 29.0166L22.1261 30.446L18.4723 30.0493Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.6846 28.636L12.6304 28.9892L12.782 30.4176L16.9574 29.9348L17.6086 22.2177L16.2369 22.0916L15.6846 28.636ZM5.97041 23.258L6.56964 19.1271L13.2368 18.5092L6.43558 17.7788L5.96805 13.904L7.33429 13.7245L7.66509 16.4661L14.0775 17.1547L13.9505 18.443L14.1247 18.4269L14.2465 19.8584L7.76919 20.4587L7.33192 23.4732L5.97041 23.258Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.1417 13.3798L28.5389 17.5975L22.306 18.1693L28.5531 18.9599L29.0256 22.8223L27.6597 23.0043L27.3229 20.2519L21.0061 19.4524L21.1428 18.276L20.5901 18.3267L20.4695 16.8951L27.3371 16.2651L27.7797 13.1678L29.1417 13.3798ZM19.284 8.10801L22.3383 7.74924L22.1842 6.32112L18.0103 6.81141L17.3284 14.9482L18.7002 15.0734L19.284 8.10801Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4835 6.246L16.691 6.48023L17.6635 14.6779L16.297 14.8545L15.4661 7.85122L12.4101 7.68109L12.4835 6.246Z" />
                    </svg>
                </Link>
                <div className="relative h-full "
                    onMouseEnter={() => setProjectPopShow(true)}
                    onMouseLeave={() => setProjectPopShow(false)}>
                    <div className="items-center flex h-full">
                        <Link href="projects" title="Projects" className="text-[#008aa8] flex items-center py-1 px-2">
                            <FiFolder className="w-[0.9rem] h-[0.9rem] mt-[1.6px] mr-1" />
                            <span className='text-[#008aa8] text-[.9rem]'>Projects</span>
                        </Link>
                        <div className={`rounded min-w-[260px] absolute top-[3rem] z-[10] w-[275px] bg-[#f9f9fb] p-4 ${projectPopShow ? `block` : `hidden`}`} style={{ boxShadow: '4px 4px 8px rgba(46,52,64,.1)' }}>
                            <div  >
                                <ul className="list-none border-b border-b-[#83eede] mb-0 pb-[12.8px]">
                                    {/* <li className='baseline m-0 p-0'>
                                        <Link href="project/sacreddevking-aaa/timeline" className="text-[#4c566a] flex items-center px-2 py-[12.8px]">
                                            <img alt="AAA" src="v-1708969004480/images/project-logos/project-logo-03.png" style={{ background: 'rgb(153, 214, 220)' }} />
                                            <span>AAA</span>
                                        </Link>
                                    </li>
                                    <li className='baseline m-0 p-0'>
                                        <Link href="project/sacreddevking-taiga/timeline" className="text-[#4c566a] flex items-center px-2 py-[12.8px]">
                                            <img alt="Taiga" src="v-1708969004480/images/project-logos/project-logo-04.png" style={{ background: 'rgb(164, 162, 219)' }} />
                                            <span>Taiga</span>
                                        </Link>
                                    </li> */}
                                </ul>
                                <Link href="projects" title="View all projects" className="text-[#008aa8] px-2 py-[12.8px] block">View all projects</Link>
                                <div className="flex flex-row baseline">
                                    <Link href="project/new" title="New project" className="flex flex-1 py-[5.6px] block text-center text-[.875rem] text-[#008aa8] bg-[#83eede] rounded-[4px] justify-center items-center">
                                        <FiPlus className="w-[1.3rem] h-[1.3rem]" />
                                        <span className='text-[#4c566a] text-center'>New project</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center flex baseline">
                <Link title="Discover trending projects" href="#" className='inline-block h-full px-4 py-2 text-[.875rem] text-[#008aa8] baseline' style={{ transition: 'all .2s linear' }}>
                    <FiCompass className="w-[1.3rem] h-[1.3rem] mt-1 " style={{ transition: 'all .2s linear' }} />
                </Link>
                <div className="relative h-full"
                    onMouseEnter={() => setHelpPopShow(true)}
                    onMouseLeave={() => setHelpPopShow(false)}>
                    <Link href="https://community.taiga.io/" target="_blank" title="Help" className='h-full m-0 px-4 py-2 inline-block text-[#008aa8]'>
                        <FiHelpCircle className="w-[1.3rem] h-[1.3rem] mt-1 " style={{ transition: 'all .2s linear' }} />
                    </Link>
                    <div className={`px-4 py-2 rounded-2 ${helpPopShow ? 'block' : 'hidden'} min-w-[260px] absolute top-[3rem] z-[10] bg-[#f9f9fb]`} style={{ boxShadow: '4px 4px 8px rgba(46,52,64,.1)' }}>
                        <ul className='mb-0 p-0'>
                            <li >
                                <Link href="#" title="Help center" className="flex items-center px-2 py-[12.8px] text-[#4c566a]">
                                    <FiLifeBuoy className='pr-4 flex justify-center items-center w-[1.3rem] h-[1.3rem]' />
                                    <span className='align-baseline'>Help center</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://community.taiga.io/" target="_blank" title="Go to Taiga Community" className='text-[#4c566a] flex items-center px-2 py-[12.8px]'>
                                    <FiCommand className='pr-4 w-[1.3rem] h-[1.3rem]' />
                                    <span>Taiga Community</span>
                                </Link>
                            </li>
                            <li>
                                <Link title="Write to us with your feedback" className="hidden" href={`/`}>
                                    <FiMessageSquare className='flex items-center justify-center pr-4 w-[1.3rem] h-[1.3rem]' />
                                    <span>Ask a question</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative h-full ">
                    <Link href="#" title="Events" className='h-full px-4 py-2 text-[#008aa8] inline-block' style={{ transition: `all .2s linear` }} >
                        <FiBell className="w-[1.3rem] h-[1.3rem] mt-1 " style={{ transition: 'all .2s linear' }} />
                    </Link>
                    <div className="bg-[#f9f9fb] rounded-2 hidden -left-[355px] p-[1rem] absolute top-[3rem] w-[400px] z-[9]" style={{ boxShadow: `0 0 3px 3px rgba(169,170,188,.2)` }}>
                        <div className="header">
                            <Link className="action disabled" href={``}>Dismiss all</Link>
                        </div>
                        <div className="notifications-wrapper">
                            <div className="empty" style={{}}><span>No new events</span></div>
                            <section className="notifications-list">
                                <div style={{}}>
                                </div>
                            </section>
                        </div>
                        <div className="notifications-bottom">
                            <Link className="action" href="#">View all notifications</Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center h-full ml-4 pr-4 pl-2'
                    onMouseEnter={() => setProfilePopShow(true)}
                    onMouseLeave={() => setProfilePopShow(false)}>
                    <div className="border-l relative border-l-[#f9f9fb]">
                        <div className="flex items-center baseline">
                            <Link title="DevKing" className="flex items-center m-0 pl-4 text-[#008aa8]" href="profile">
                                <img alt="DevKing" src="https://www.gravatar.com/avatar/da2797ae8a31569b03809648a66cf9a9?s=200&d=https%3A%2F%2Ftree.taiga.io%2Fv-1708969004480%2Fimages%2Fuser-avatars%2Fuser-avatar-01.png" title="DevKing" className='bg-[#D2C68B] text-[.6em] max-h-[2rem] max-w-[2rem] min-h-[2rem] min-w-[2rem] overflow-hidden border-4 border-[#83eede] rounded-full p-0 align-middle w-[65px] h-[65px]' />
                            </Link>
                            <button className="bg-transparent px-[6px] py-[1px] text-[#008aa8]">
                                <FiChevronDown className="w-[1.3rem] h-[1.3rem]  mt-1 overflow-hidden" />
                            </button>
                        </div>
                        <div className={`-left-[200px] top-[40px] w-[290px] rounded ${profilePopShow ? 'block' : 'hidden'} min-w-[26px] absolute z-[10] bg-[#f9f9fb] p-4`} style={{ boxShadow: `4px 4px 8px rgba(46,52,64,.1)`, animation: 'dropdownFade .2s cubic-bezier(.09,0,.99,.01) both' }}>
                            <div className="flex mb-2 pb-3 border-b border-b-[#83eede]">
                                <Link href="profile" className="px-2 py-[12.8px] text-[#2e3440]">
                                    <img alt="DevKing" src="https://www.gravatar.com/avatar/da2797ae8a31569b03809648a66cf9a9?s=200&d=https%3A%2F%2Ftree.taiga.io%2Fv-1708969004480%2Fimages%2Fuser-avatars%2Fuser-avatar-01.png" title="DevKing" style={{ background: 'rgb(210, 198, 139)' }} className="h-[65px] w-[65px] rounded-full border-[2px] border-[#fff]" />
                                </Link>
                                <div className="pl-2 pt-2">
                                    <Link href="profile" className="text-[#2e3440] mb-1 p-0">DevKing</Link>
                                    <div className="mb-2 p-0 text-[.875rem] text-[#70728f] overflow-hidden w-full">sacreddevking@gmail.com</div>
                                    <p className='mb-2 leading-normal'>
                                        <Link href="user-settings/user-profile" title="Edit profile" className="p-0 text-[#008aa8]">Edit profile</Link>
                                    </p>
                                </div>
                            </div>
                            <ul className='mb-0'>
                                <li className="h-full p-0">
                                    <Link href="user-settings/contrib/subscriptions" className="text-[#4c566a] px-2 py-[12.8px] block">
                                        <span className='m-0 p-0 align-baseline text-[#4c566a]'>Paid Plans</span>
                                    </Link>
                                </li>
                                <li className="align-baseline m-0 p-0 border-none">
                                    <Link href="user-settings/user-change-password" title="Account settings" className="px-2 py-[12.8px] text-[#4c566a] block">Account settings</Link>
                                </li>
                                <li className="align-baseline m-0 p-0 border-none">
                                    <Link href="user-settings/mail-notifications" title="Edit your notification settings" className="px-2 py-[12.8px] text-[#4c566a] block">Notifications</Link>
                                </li>
                                <li className="border-t border-t-[#83eede] mt-2">
                                    <Link href="#" title="Logout" className='px-2 py-[12.8px] text-[#008aa8] block' onClick={() => signOut()}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Dashboard;