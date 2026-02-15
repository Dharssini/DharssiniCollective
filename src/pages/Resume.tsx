import React from 'react';
import { resumeData } from '../data/resumeData';
import CondensedOrganization from '../components/resume/CondensedOrganization';

const Resume: React.FC = () => {
    const { personalInfo, summary, skills, researchEngineering, experience, education, achievements, projects, leadership, systemProjects } = resumeData;

    const handlePrint = () => {
        window.print();
    };

    const IconMapPin = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    );

    const IconPhone = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    );

    const IconMail = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
    );

    const IconGithub = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
    );

    const IconLinkedin = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
    );

    const IconDownload = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
    );

    return (
        <div className="min-h-screen bg-slate-950 py-8 px-4 print:p-0 print:bg-white">
            {/* Interactive Control Panel */}
            <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print:hidden px-4 text-nowrap">
                <div>
                    <h1 className="text-xl font-bold text-white tracking-tight">Interactive Resume</h1>
                    <p className="text-slate-400 text-xs">A4 Fixed · System Dashboard · 2 Pages</p>
                </div>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all font-bold shadow-xl active:scale-95 whitespace-nowrap"
                >
                    <IconDownload />
                    Export PDF
                </button>
            </div>

            {/* Main Resume Container */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none font-sans text-slate-900 overflow-hidden print:w-[210mm]">

                {/* PAGE 1: Core Dashboard */}
                <div className="p-[10mm] min-h-[297mm] h-[297mm] flex flex-col relative print:border-none">

                    <div className="grid grid-cols-[1fr_240px] gap-8 flex-grow overflow-hidden">

                        {/* LEFT COLUMN: Narrative & Anchor */}
                        <div className="flex flex-col border-r border-slate-100 pr-8">
                            <header className="mb-6">
                                <h1 className="text-4xl font-black tracking-tighter text-slate-950 leading-tight">
                                    {personalInfo.name.split(' ')[0]}<br />
                                    <span className="text-slate-300">{personalInfo.name.split(' ')[1]}</span>
                                </h1>
                                <p className="text-[11pt] font-black text-slate-950 uppercase tracking-[0.3em] mt-2 border-b-4 border-slate-950 inline-block pb-1">
                                    {personalInfo.title}
                                </p>
                            </header>

                            <section className="mb-6">
                                <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Architectural Summary</h2>
                                <p className="text-[9.5pt] leading-[1.3] text-slate-700 font-medium italic">
                                    {summary}
                                </p>
                            </section>

                            <section className="flex-grow">
                                <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    Primary System Impact
                                    <div className="h-px bg-slate-100 flex-grow" />
                                </h2>
                                {(() => {
                                    // Group projects by client
                                    const groupedProjects = systemProjects.reduce((acc: any, project: any) => {
                                        if (!acc[project.client]) {
                                            acc[project.client] = [];
                                        }
                                        acc[project.client].push(project);
                                        return acc;
                                    }, {});

                                    return Object.entries(groupedProjects).map(([client, projects]: [string, any], idx) => (
                                        <CondensedOrganization
                                            key={idx}
                                            organization={client}
                                            role={projects[0].role}
                                            period={projects[0].period}
                                            projects={projects}
                                        />
                                    ));
                                })()}
                            </section>
                        </div>

                        {/* RIGHT COLUMN: Infrastructure & Signal */}
                        <div className="flex flex-col pt-2">
                            <div className="text-[8pt] font-bold text-slate-600 space-y-1.5 mb-6 bg-slate-50 p-4 rounded-sm border border-slate-100">
                                <p className="flex items-center gap-2 tracking-tight"><IconMapPin /> {personalInfo.location}</p>
                                <p className="flex items-center gap-2 tracking-tight"><IconPhone /> {personalInfo.phone}</p>
                                <p className="flex items-center gap-2 tracking-tight"><IconMail /> {personalInfo.email}</p>
                                <p className="flex items-center gap-2 tracking-tight"><IconGithub /> github.com/{personalInfo.github}</p>
                                <p className="flex items-center gap-2 tracking-tight"><IconLinkedin /> linkedin/in/{personalInfo.linkedin}</p>
                            </div>

                            <section className="mb-6">
                                <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Core Signals</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {achievements.map((ach: any, idx: number) => (
                                        <div key={idx} className="bg-slate-950 text-white p-2 rounded-sm flex flex-col justify-center items-center shadow-md">
                                            <p className="text-sm font-black leading-none">{ach.label}</p>
                                            <p className="text-[6pt] font-black uppercase tracking-[0.05em] text-indigo-400 mt-1 text-center leading-none">{ach.company}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-6 p-3 border-2 border-slate-950 rounded-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-slate-950 rotate-45 transform translate-x-4 -translate-y-4" />
                                <h2 className="text-[7pt] font-black text-slate-950 uppercase tracking-[0.2em] mb-2 leading-none">Education</h2>
                                <p className="text-[8.5pt] font-black text-slate-900 leading-tight">{education[0].institution}</p>
                                <p className="text-[7.5pt] font-bold text-slate-500 mt-1">{education[0].degree}</p>
                                <div className="flex justify-between items-center mt-2 text-[6.5pt] font-black text-slate-400 uppercase tracking-tighter bg-slate-100 px-1 py-1 rounded">
                                    <span>2020 - 2025</span>
                                    <span>CGPA: 9.59</span>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Research Focus</h2>
                                <div className="space-y-2">
                                    {researchEngineering.highlights.slice(0, 2).map((h: any, idx: number) => (
                                        <div key={idx} className="border-l-2 border-indigo-200 pl-3">
                                            <p className="text-[8pt] font-black text-slate-900 leading-none mb-1">{h.label}</p>
                                            <p className="text-[7.5pt] text-slate-500 italic leading-tight">{h.description.split('·')[0]}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* NEW: Horizontal Curvy Tech Matrix at Bottom */}
                    <div className="mt-4 pt-6 border-t-[3px] border-slate-950 relative">
                        <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-white px-6">
                            <h2 className="text-[9pt] font-black text-slate-950 uppercase tracking-[0.4em]">Infrastructure Matrix</h2>
                        </div>

                        <div className="flex justify-between items-start gap-4">
                            {skills.slice(0, 4).map((skill: any, idx: number) => (
                                <div key={idx} className="flex-1 relative group">
                                    {/* Curved Visual Decorator */}
                                    <div className="absolute -top-4 left-0 w-full h-1 overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity">
                                        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full fill-indigo-600">
                                            <path d="M0 10 Q 25 0, 50 10 T 100 10 L 100 10 L 0 10 Z" />
                                        </svg>
                                    </div>

                                    <span className="text-[7pt] font-black text-slate-400 uppercase tracking-widest block mb-2">{skill.category}</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {skill.items.slice(0, 6).map((item: string, iIdx: number) => (
                                            <span key={iIdx} className="text-[7.5pt] font-bold text-slate-800 bg-slate-50 px-2 py-0.5 border border-slate-100 rounded-sm hover:bg-white transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <footer className="mt-8 flex justify-between items-end">
                            <div className="text-[6pt] font-black text-slate-300 uppercase tracking-[0.4em]">
                                P.01 / SYSTEM-ARCHITECTURE
                            </div>
                            <div className="text-[10pt] font-black text-slate-100 tracking-[0.1em] uppercase">
                                Dharssini Karthikeyan
                            </div>
                            <div className="text-[6pt] font-black text-slate-300 uppercase tracking-[0.4em]">
                                A4-297-PRINT
                            </div>
                        </footer>
                    </div>
                </div>

                {/* PAGE 2: Professional History & Innovation */}
                <div className="p-[10mm] min-h-[297mm] h-[297mm] flex flex-col relative bg-slate-50/20 border-t print:border-none">

                    <div className="grid grid-cols-1 gap-6 flex-grow">

                        {/* Innovation Pipeline Dashboard */}
                        <section>
                            <h2 className="text-xs font-black text-slate-950 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                <div className="w-4 h-4 bg-indigo-600 rotate-45 flex items-center justify-center text-white text-[10px]">
                                    <span className="rotate-[-45deg] font-black">!</span>
                                </div>
                                Engineering Innovation Pipeline
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                                {researchEngineering.highlights.map((item: any, idx: number) => (
                                    <div key={idx} className="bg-white p-3 border border-slate-200 rounded-sm relative group hover:border-indigo-600 transition-colors shadow-sm">
                                        <div className="absolute -top-2 left-3 bg-slate-950 text-white text-[6pt] px-2 py-0.5 font-black uppercase tracking-widest">
                                            R&D-{idx + 1}
                                        </div>
                                        <p className="text-[8.5pt] font-black text-slate-950 mb-1 mt-1 leading-tight">{item.label}</p>
                                        <p className="text-[7.5pt] text-slate-600 font-medium leading-tight italic">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Professional History Continued - Including Amazon */}
                        <section className="flex-grow">
                            <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                Professional History (System Validation)
                                <div className="h-px bg-slate-200 flex-grow" />
                            </h2>
                            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                                {experience.filter((exp: any) => !['Improva', 'CyberTranscend'].includes(exp.company)).map((exp: any, idx: number) => (
                                    <div key={idx} className="space-y-1.5 relative">
                                        <div className="absolute -left-4 top-1 bottom-0 w-px bg-slate-100" />
                                        <div className="flex justify-between items-baseline mb-0.5">
                                            <h3 className="text-[10pt] font-black text-slate-950 tracking-tight leading-none">{exp.role}</h3>
                                            <span className="text-[7.5pt] font-bold text-slate-400 tabular-nums uppercase tracking-tighter">{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <p className="text-[8pt] font-black text-indigo-600 uppercase tracking-widest">{exp.company}</p>
                                            <div className="h-px bg-slate-100 flex-grow" />
                                        </div>
                                        <ul className="space-y-1.5">
                                            {exp.bullets.slice(0, 3).map((bullet: string, bIdx: number) => (
                                                <li key={bIdx} className="text-[8.2pt] text-slate-600 leading-[1.3] flex gap-2">
                                                    <span className="text-slate-300 font-bold shrink-0">•</span>
                                                    <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>') }} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects, Open Source & Community */}
                        <div className="mt-auto grid grid-cols-[1fr_1fr_1.1fr] gap-8 pt-6 border-t border-slate-100">
                            {/* Projects */}
                            <section>
                                <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Project Nodes</h2>
                                <div className="space-y-3">
                                    {projects.map((project: any, idx: number) => (
                                        <div key={idx} className="flex gap-3">
                                            <div className="text-[10pt] font-black text-slate-200">0{idx + 1}</div>
                                            <div>
                                                <h3 className="text-[9pt] font-black text-slate-950 leading-none mb-1">{project.name}</h3>
                                                <p className="text-[7.5pt] text-slate-500 font-medium leading-tight">{project.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Open Source */}
                            <section>
                                <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    OS Contribution
                                </h2>
                                <div className="space-y-3">
                                    {resumeData.openSource?.map((os: any, idx: number) => (
                                        <div key={idx} className="bg-indigo-50/50 border border-indigo-100 p-2.5 rounded-sm">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="text-[9pt] font-black text-slate-950">{os.project}</h3>
                                                <span className="text-[6pt] font-black text-indigo-600 uppercase tracking-widest">{os.role}</span>
                                            </div>
                                            <p className="text-[7.5pt] text-slate-600 font-medium leading-tight">{os.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Leadership */}
                            <section>
                                <h2 className="text-[8pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Leadership Ecosystem</h2>
                                <div className="space-y-3">
                                    {leadership.map((item: any, idx: number) => (
                                        <div key={idx} className="relative pl-3 border-l-2 border-slate-950">
                                            <p className="text-[8.5pt] font-black text-slate-900 leading-tight mb-0.5">{item.role}</p>
                                            <p className="text-[7pt] font-bold text-slate-400 uppercase tracking-widest leading-none">
                                                {item.org} <span className="mx-1 opacity-30">/</span> {item.period}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    <footer className="mt-8 pt-4 flex justify-between items-end border-t border-slate-100">
                        <div className="text-[6pt] font-black text-slate-300 uppercase tracking-[0.4em]">
                            P.02 / SYSTEM-VALIDATION
                        </div>
                        <div className="text-[9pt] font-black text-slate-100 tracking-[0.05em] uppercase">
                            Dharssini Karthikeyan
                        </div>
                    </footer>
                </div>

            </div>
        </div >
    );
};

export default Resume;
