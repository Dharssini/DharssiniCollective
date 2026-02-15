import { resumeData } from '../data/resumeData';

export default function ResumeMarkdown() {
    const { personalInfo, summary, experience, skills, systemProjects, education } = resumeData;

    const downloadPDF = () => {
        window.print();
    };

    // Generate Markdown Text
    const markdownContent = `
# ${personalInfo.name}
${personalInfo.title}
${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email}
GitHub: github.com/${personalInfo.github} | LinkedIn: linkedin.com/in/${personalInfo.linkedin}

## SUMMARY
${summary}

## TECHNICAL SKILLS
${skills.map(s => `- **${s.category}**: ${s.items.join(', ')}`).join('\n')}

## EXPERIENCE
${experience.map(role => `### ${role.company} | ${role.role}
${role.period} | ${role.location}
${role.bullets.map(b => `- ${b.replace(/\*\*/g, '')}`).join('\n')}`).join('\n\n')}

## KEY PROJECTS
${systemProjects.map(p => `### ${p.title} (${p.client})
Role: ${p.role} | Tech: ${p.techStack.slice(0, 8).join(', ')}
- **Problem**: ${p.problem}
- **Solution**: ${p.solution}
- **Impact**: ${p.impact.slice(0, 4).map(i => i.replace(/\*\*/g, '')).join('; ')}`).join('\n\n')}

## EDUCATION
${education.map(e => `**${e.institution}** | ${e.degree}
${e.period} | ${e.location} | ${e.details}`).join('\n')}
`.trim();

    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-12 max-w-[210mm] mx-auto print:p-0 print:max-w-none">
            {/* Controls - Hidden in print */}
            <div className="mb-8 flex justify-end print:hidden">
                <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors font-sans text-sm"
                >
                    Download PDF
                </button>
            </div>

            <pre className="whitespace-pre-wrap font-mono text-[10pt] leading-snug">
                {markdownContent}
            </pre>
        </div>
    );
}
