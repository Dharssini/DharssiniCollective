import React, { useState } from 'react';
import type { IntentContext, IntentType, RoleType, TimeConstraint, RoleSignal, BackgroundType } from '../../types/intent';
import { motion, AnimatePresence } from 'framer-motion';

interface IntentGatewayProps {
    onComplete: (context: IntentContext) => void;
    onSkip: () => void;
}

const steps = [
    'intent',
    'role',
    'signals',
    'time',
    'background'
] as const;

// type Step = typeof steps[number];

const IntentGateway: React.FC<IntentGatewayProps> = ({ onComplete, onSkip }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [context, setContext] = useState<Partial<IntentContext>>({});

    const nextStep = (nextIndex?: number) => {
        const idx = nextIndex ?? currentStep + 1;
        if (idx >= steps.length) {
            onComplete(context as IntentContext);
        } else {
            setCurrentStep(idx);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            // Logic to skip role/signals if going back from time
            if (steps[currentStep] === 'time' && context.intent !== 'role-fit') {
                setCurrentStep(0);
            } else {
                setCurrentStep(currentStep - 1);
            }
        }
    };

    const updateContext = (updates: Partial<IntentContext>) => {
        setContext(prev => ({ ...prev, ...updates }));
    };

    const handleIntentSelect = (intent: IntentType) => {
        updateContext({ intent });
        if (intent === 'role-fit') {
            nextStep(1); // Go to role step
        } else {
            nextStep(3); // Skip to time step
        }
    };

    const handleRoleSelect = (roleType: RoleType) => {
        updateContext({ roleType });
        nextStep();
    };

    const handleSignalsToggle = (signal: RoleSignal) => {
        const current = context.roleSignals || [];
        const updated = current.includes(signal)
            ? current.filter(s => s !== signal)
            : [...current, signal];
        updateContext({ roleSignals: updated });
    };

    const handleTimeSelect = (timeConstraint: TimeConstraint) => {
        updateContext({ timeConstraint });
        nextStep();
    };

    const handleBackgroundSelect = (background: BackgroundType) => {
        updateContext({ background });
        onComplete({ ...context, background } as IntentContext);
    };

    const renderIntentStep = () => (
        <div className="space-y-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold gradient-text mb-4">Why are you here?</h2>
                <p className="text-dark-300">Select your primary reason for visiting to get a personalized experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { id: 'role-fit', title: 'Evaluating for a Role', desc: 'Recruiting or hiring? Get a deep fit report.', icon: '🎯' },
                    { id: 'depth-understanding', title: 'Technical Depth', desc: 'See the engineering details and research.', icon: '🧬' },
                    { id: 'build-systems', title: 'System Building', desc: 'Focus on production and deployment.', icon: '🏗️' },
                    { id: 'research-mindset', title: 'Research Mindset', desc: 'Novel approaches and experimentation.', icon: '🧪' },
                    { id: 'quick-signal', title: 'Quick Signal', desc: 'Just the highlights, 5 minutes or less.', icon: '⚡' },
                ].map(item => (
                    <button
                        key={item.id}
                        onClick={() => handleIntentSelect(item.id as IntentType)}
                        className="card text-left hover:scale-[1.02] active:scale-95 transition-all p-6 group"
                    >
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-dark-400 text-sm leading-relaxed">{item.desc}</p>
                    </button>
                ))}
            </div>
            <div className="text-center pt-8">
                <button onClick={onSkip} className="text-dark-400 hover:text-primary-400 transition-colors underline-offset-4 hover:underline">
                    I'd rather just explore freely
                </button>
            </div>
        </div>
    );

    const renderRoleStep = () => (
        <div className="space-y-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold gradient-text mb-4">Select the Role</h2>
                <p className="text-dark-300">I'll curate technical signals most relevant to this position.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { id: 'ml-engineer', title: 'ML Engineer', desc: 'Production AI, pipelines, and infrastructure.' },
                    { id: 'research-engineer', title: 'Research Engineer', desc: 'Applied research and novel implementations.' },
                    { id: 'ai-product-engineer', title: 'AI Product Engineer', desc: 'Full-stack AI apps & user-facing systems.' },
                    { id: 'founding-engineer', title: 'Founding Engineer', desc: 'High-speed, end-to-end prototyping.' },
                    { id: 'research-scientist', title: 'Research Scientist', desc: 'Deep research and theoretical depth.' },
                    { id: 'other', title: 'Other / Custom', desc: 'General AI/Software Engineering fit.' },
                ].map(role => (
                    <button
                        key={role.id}
                        onClick={() => handleRoleSelect(role.id as RoleType)}
                        className="card text-left hover:border-primary-500/50 p-5 group"
                    >
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                            {role.title}
                        </h3>
                        <p className="text-dark-400 text-xs">{role.desc}</p>
                    </button>
                ))}
            </div>
            <div className="flex justify-between mt-10">
                <button onClick={prevStep} className="btn-secondary">Back</button>
            </div>
        </div>
    );

    const renderSignalsStep = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-4">Focus Areas</h2>
                <p className="text-dark-300">Any specific signals you care most about? (Select many or skip)</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {[
                    { id: 'deep-learning-fundamentals', title: 'DL Fundamentals' },
                    { id: 'system-design', title: 'System Design' },
                    { id: 'research-depth', title: 'Research Depth' },
                    { id: 'shipping-speed', title: 'Shipping Speed' },
                    { id: 'communication', title: 'Communication' },
                    { id: 'debugging-resilience', title: 'Resilience' },
                ].map(signal => {
                    const isSelected = context.roleSignals?.includes(signal.id as RoleSignal);
                    return (
                        <button
                            key={signal.id}
                            onClick={() => handleSignalsToggle(signal.id as RoleSignal)}
                            className={`p-4 rounded-lg border transition-all text-sm font-bold ${isSelected
                                ? 'bg-primary-500/20 border-primary-500 text-primary-400'
                                : 'bg-dark-800 border-dark-700 text-dark-400 hover:border-dark-600'
                                }`}
                        >
                            {signal.title}
                        </button>
                    );
                })}
            </div>
            <div className="flex justify-between mt-10">
                <button onClick={prevStep} className="btn-secondary">Back</button>
                <button onClick={() => nextStep()} className="btn-primary px-10">
                    Continue
                </button>
            </div>
        </div>
    );

    const renderTimeStep = () => (
        <div className="space-y-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold gradient-text mb-4">Time Constraint</h2>
                <p className="text-dark-300">How long do you have for this initial evaluation?</p>
            </div>
            <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
                {[
                    { id: '2min', title: '2 Minutes', desc: 'The "elevator pitch" version.' },
                    { id: '5min', title: '5 Minutes', desc: 'The "standard" deep-brief.' },
                    { id: '10min', title: '10 Minutes', desc: 'The "shortlist" comprehensive version.' },
                    { id: '30min', title: '30 Minutes', desc: 'A thorough technical deep-dive.' },
                    { id: 'deep-dive', title: 'No Limit', desc: 'Explore everything at your own pace.' },
                ].map(time => (
                    <button
                        key={time.id}
                        onClick={() => handleTimeSelect(time.id as TimeConstraint)}
                        className="flex items-center gap-4 card hover:border-primary-500/50 text-left p-4 group"
                    >
                        <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center font-bold text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                            {time.title.split(' ')[0]}
                        </div>
                        <div>
                            <h3 className="font-bold text-white leading-tight">{time.title}</h3>
                            <p className="text-dark-400 text-xs">{time.desc}</p>
                        </div>
                    </button>
                ))}
            </div>
            <div className="flex justify-between mt-10">
                <button onClick={prevStep} className="btn-secondary">Back</button>
            </div>
        </div>
    );

    const renderBackgroundStep = () => (
        <div className="space-y-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold gradient-text mb-4">Finally, your background?</h2>
                <p className="text-dark-300">I'll adjust the technical complexity of my descriptions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { id: 'engineer', title: 'Engineer', icon: '🛠️' },
                    { id: 'researcher', title: 'Researcher', icon: '🔬' },
                    { id: 'founder', title: 'Founder / Executive', icon: '💡' },
                    { id: 'recruiter', title: 'Recruiter', icon: '🤝' },
                    { id: 'student', title: 'Student', icon: '🎓' },
                ].map(bg => (
                    <button
                        key={bg.id}
                        onClick={() => handleBackgroundSelect(bg.id as BackgroundType)}
                        className="card flex items-center gap-4 hover:scale-[1.02] p-5 group"
                    >
                        <span className="text-2xl">{bg.icon}</span>
                        <span className="font-bold text-white group-hover:text-primary-400 transition-colors">{bg.title}</span>
                    </button>
                ))}
            </div>
            <div className="flex justify-between mt-10">
                <button onClick={prevStep} className="btn-secondary">Back</button>
                <button
                    onClick={() => handleBackgroundSelect('engineer')}
                    className="text-dark-400 hover:text-white transition-colors"
                >
                    Skip this step
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen pt-8 pb-12 px-4 bg-dark-950 font-sans">
            <div className="section-container max-w-4xl pt-0">

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between text-[10px] text-dark-400 uppercase tracking-widest mb-2 font-black">
                        <span>Experience Loading</span>
                        <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-[400px]"
                    >
                        {currentStep === 0 && renderIntentStep()}
                        {currentStep === 1 && renderRoleStep()}
                        {currentStep === 2 && renderSignalsStep()}
                        {currentStep === 3 && renderTimeStep()}
                        {currentStep === 4 && renderBackgroundStep()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default IntentGateway;
