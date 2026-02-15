import { resumeData } from '../data/resumeData';

export default function ResumeMarkdown() {
    const { personalInfo, summary, experience, skills, systemProjects, education } = resumeData;

    const downloadPDF = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white text-black font-mono p-8 md:p-12 max-w-[1000px] mx-auto print:p-0">
            {/* Controls - Hidden in print */}
            <div className="mb-8 flex justify-end print:hidden">
                <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors font-sans text-sm"
                >
                    Download PDF
                </button>
            </div>

            <div className="markdown-body space-y-6 text-sm md:text-base leading-relaxed">
                {/* Header */}
                <section>
                    <h1 className="text-3xl font-bold mb-2 uppercase border-b-2 border-black pb-2">
                        {personalInfo.name}
                    </h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-4">
                        <span>{personalInfo.location}</span>
                        <span>•</span>
                        <span>{personalInfo.phone}</span>
                        <span>•</span>
                        <span>{personalInfo.email}</span>
                        <span>•</span>
                        <a href={`https://${personalInfo.github}`} className="underline">github.com/{personalInfo.github}</a>
                        <span>•</span>
                        <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} className="underline">linkedin.com/in/{personalInfo.linkedin}</a>
                    </div>
                </section>

                {/* Summary */}
                <section>
                    <h2 className="text-xl font-bold mb-2 uppercase border-b border-black">Professional Summary</h2>
                    <p>{summary}</p>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-xl font-bold mb-2 uppercase border-b border-black">Technical Skills</h2>
                    <div className="grid grid-cols-1 gap-2">
                        {skills.map((category, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:gap-4">
                                <span className="font-bold sm:w-40 flex-shrink-0">{category.category}:</span>
                                <span>{category.items.join(', ')}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-xl font-bold mb-4 uppercase border-b border-black">Professional Experience</h2>
                    <div className="space-y-6">
                        {experience.map((role, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-lg">{role.company}</h3>
                                    <span className="text-sm">{role.period}</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-2 italic">
                                    <span>{role.role}</span>
                                    <span>{role.location}</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1">
                                    {role.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* System Projects */}
                <section>
                    <h2 className="text-xl font-bold mb-4 uppercase border-b border-black">Key Projects</h2>
                    <div className="space-y-6">
                        {systemProjects.map((project, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-lg">{project.title}</h3>
                                    <span className="text-sm">{project.period}</span>
                                </div>
                                <p className="mb-2 italic text-sm">{project.role} | {project.techStack.slice(0, 6).join(', ')}</p>

                                <div className="mb-2">
                                    <span className="font-bold text-sm underline">Problem:</span> <span className="text-sm">{project.problem}</span>
                                </div>

                                <div className="mb-2">
                                    <span className="font-bold text-sm underline">Solution:</span> <span className="text-sm">{project.solution}</span>
                                </div>

                                <div className="text-sm">
                                    <span className="font-bold underline">Impact:</span>
                                    <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5">
                                        {project.impact.slice(0, 3).map((item, iIdx) => (
                                            <li key={iIdx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-xl font-bold mb-4 uppercase border-b border-black">Education</h2>
                    {education.map((edu, idx) => (
                        <div key={idx} className="flex justify-between items-baseline">
                            <div>
                                <h3 className="font-bold">{edu.institution}</h3>
                                <p>{edu.degree}</p>
                                <p className="text-sm italic">{edu.details}</p>
                            </div>
                            <div className="text-right">
                                <p>{edu.period}</p>
                                <p>{edu.location}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
