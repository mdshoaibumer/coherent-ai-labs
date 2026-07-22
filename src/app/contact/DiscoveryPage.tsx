'use client';
import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Building2,
  Briefcase,
  Globe,
  MessageSquare,
  Clock,
  DollarSign,
  Paperclip,
  Search,
  FileText,
  Rocket,
  Code,
  CheckCircle2,
  Phone,
  Mail,
} from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { Grid } from '../../components/ui/Grid';
import { Input, Textarea } from '../../components/ui/Input';
import { FormField } from '../../components/ui/FormField';
import { FormWizard, WizardStep } from '../../components/ui/FormWizard';
import { Accordion } from '../../components/ui/Accordion';
import { MagneticButton } from '../../components/animations/MagneticButton';
import { SplitText } from '../../components/animations/SplitText';
import { Reveal, RevealStagger, RevealItem } from '../../components/animations/Reveal';
import { AmbientGlow, NoiseTexture } from '../../components/animations/AmbientGlow';
import { SectionTransition } from '../../components/animations/SectionTransition';
import { EASE_OUT_EXPO } from '../../lib/motion';
import { m } from 'motion/react';
import { cn } from '../../lib/utils';

/* ═══════════════════════════════════════════════════════════
   WIZARD STEPS DEFINITION
═══════════════════════════════════════════════════════════ */

const WIZARD_STEPS: WizardStep[] = [
  { id: 'company', title: 'Company', description: 'Tell us about your organization.' },
  {
    id: 'maturity',
    title: 'AI Maturity',
    description: 'Your current AI and automation readiness.',
  },
  { id: 'project', title: 'Project Type', description: 'What would you like to build?' },
  { id: 'challenge', title: 'Challenge', description: 'Describe the problem you are solving.' },
  { id: 'technical', title: 'Technical', description: 'Your current technical environment.' },
  { id: 'timeline', title: 'Timeline & Budget', description: 'When and how much?' },
  { id: 'additional', title: 'Details', description: 'Anything else we should know.' },
];

const PROJECT_TYPES = [
  'AI Agents',
  'Workflow Automation',
  'Enterprise Software',
  'Web Application',
  'Mobile Application',
  'Desktop Application',
  'Cloud Engineering',
  'LLM Integration',
  'RAG Systems',
  'Custom Solution',
];

const INDUSTRIES = [
  'Healthcare',
  'Finance & Insurance',
  'Retail & E-Commerce',
  'Manufacturing',
  'Logistics & Supply Chain',
  'Construction & Real Estate',
  'Education',
  'Professional Services',
  'Technology',
  'Other',
];

const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-1000 employees',
  '1000+ employees',
];

const AI_MATURITY = [
  { label: 'Exploring', desc: 'No AI in production yet' },
  { label: 'Experimenting', desc: 'Proof-of-concepts or pilots' },
  { label: 'Implementing', desc: 'First AI features in production' },
  { label: 'Scaling', desc: 'Multiple AI systems running' },
  { label: 'Optimizing', desc: 'Mature AI operations' },
];

const AUTOMATION_LEVEL = [
  { label: 'Mostly Manual', desc: 'Processes rely on human execution' },
  { label: 'Some Automation', desc: 'Basic scripts or rule-based tools' },
  { label: 'Partial Automation', desc: 'Some workflows are automated' },
  { label: 'Highly Automated', desc: 'Most repeatable work is automated' },
];

const TIMELINES = [
  { label: 'Immediately', desc: 'Ready to start now' },
  { label: '1 Month', desc: 'Starting within 4 weeks' },
  { label: '3 Months', desc: 'Planning phase' },
  { label: '6 Months', desc: 'Future initiative' },
  { label: 'Flexible', desc: 'No fixed timeline' },
];

const BUDGETS = [
  { label: '$10K – $25K', desc: 'MVP or pilot' },
  { label: '$25K – $75K', desc: 'Full feature application' },
  { label: '$75K – $150K', desc: 'Enterprise platform' },
  { label: '$150K – $500K', desc: 'Large-scale system' },
  { label: '$500K+', desc: 'Enterprise transformation' },
  { label: 'Need Consultation', desc: 'Help me scope this' },
];

/* ═══════════════════════════════════════════════════════════
   SELECTABLE CHIP
═══════════════════════════════════════════════════════════ */

function SelectableChip({
  label,
  description,
  selected,
  onClick,
}: {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'focus-visible:ring-ring rounded-xl border p-4 text-left transition-all duration-300 outline-none focus-visible:ring-2',
        selected
          ? 'border-white/30 bg-white/[0.08] shadow-[0_0_16px_rgba(255,255,255,0.04)]'
          : 'bg-accent border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04]',
      )}
      aria-pressed={selected}
    >
      <span
        className={cn(
          'block text-sm font-medium',
          selected ? 'text-foreground' : 'text-muted-foreground',
        )}
      >
        {label}
      </span>
      {description && (
        <span className="text-muted-foreground/70 mt-0.5 block text-[11px]">{description}</span>
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════
   DISCOVERY PAGE
═══════════════════════════════════════════════════════════ */

export function DiscoveryPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    companySize: '',
    role: '',
    aiMaturity: '',
    automationLevel: '',
    projectTypes: [] as string[],
    challenge: '',
    currentProcess: '',
    expectedOutcomes: '',
    currentSystems: '',
    cloudProvider: '',
    securityRequirements: '',
    timeline: '',
    budget: '',
    additionalNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleProjectType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  const handleComplete = () => {
    // Future: POST to API, Calendly, HubSpot, etc.
    setSubmitted(true);
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden pt-32 pb-16">
        <AmbientGlow
          position="top-center"
          size="xl"
          intensity={0.03}
          animate
          animationDuration={6}
        />
        <NoiseTexture opacity={0.015} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <span className="text-muted-foreground/60 border-border bg-accent mb-6 inline-block rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">
                AI Readiness Assessment
              </span>
            </m.div>
            <h1 className="font-display text-foreground mb-6 text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-6xl">
              <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={6} yOffset={16}>
                Assess your AI readiness in 3 minutes.
              </SplitText>
            </h1>
            <m.div
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT_EXPO }}
            >
              <Text size="lg" className="max-w-xl">
                Answer 7 questions about your organization. Receive a personalized AI readiness
                assessment with recommended solutions, estimated timeline, and engagement complexity
                — instantly.
              </Text>
            </m.div>
          </div>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ WIZARD ═══ */}
      <section className="relative overflow-hidden py-24">
        <AmbientGlow position="center" size="lg" intensity={0.015} />
        <Container size="md" className="relative z-10">
          {submitted ? (
            <Reveal variant="scaleUp">
              <GlassPanel variant="default" gradient className="p-8 md:p-14">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <CheckCircle2 className="text-foreground h-7 w-7" />
                </div>
                <Heading level={2} className="mb-3 text-center">
                  Your AI Readiness Assessment
                </Heading>
                <Text
                  size="sm"
                  className="text-muted-foreground mx-auto mb-10 max-w-lg text-center"
                >
                  Based on your answers, here is our initial assessment. Our engineering team will
                  follow up within 48 hours with a detailed technical review.
                </Text>

                {/* Personalized Assessment */}
                <div className="mx-auto max-w-2xl space-y-6">
                  {/* Readiness summary */}
                  <div className="bg-accent border-border rounded-xl border p-5">
                    <h3 className="text-muted-foreground/60 mb-3 font-mono text-sm tracking-widest uppercase">
                      Assessment Summary
                    </h3>
                    <p className="text-foreground/80 text-base leading-relaxed">
                      {formData.aiMaturity === 'Exploring' ||
                      formData.aiMaturity === 'Experimenting'
                        ? `Your organization appears to be in the early stages of AI adoption. Based on your interest in ${formData.projectTypes.slice(0, 2).join(' and ') || 'AI solutions'}, we recommend starting with a focused pilot that demonstrates measurable ROI within 6-8 weeks.`
                        : formData.aiMaturity === 'Implementing'
                          ? `Your organization has initial AI systems in production. Given your interest in ${formData.projectTypes.slice(0, 2).join(' and ') || 'expanding AI capabilities'}, we recommend a platform consolidation approach that unifies your AI infrastructure.`
                          : `Your organization has mature AI operations. Based on your requirements for ${formData.projectTypes.slice(0, 2).join(' and ') || 'advanced AI systems'}, we recommend an enterprise orchestration architecture that scales your existing capabilities.`}
                    </p>
                  </div>

                  {/* Recommended solutions */}
                  <div className="bg-accent border-border rounded-xl border p-5">
                    <h3 className="text-muted-foreground/60 mb-3 font-mono text-sm tracking-widest uppercase">
                      Recommended Solutions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(formData.projectTypes.length > 0
                        ? formData.projectTypes
                        : ['AI Strategy Consultation']
                      ).map((t) => (
                        <span
                          key={t}
                          className="border-border text-foreground rounded-md border bg-white/[0.06] px-3 py-1.5 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engagement complexity */}
                  <div className="bg-accent border-border rounded-xl border p-5">
                    <h3 className="text-muted-foreground/60 mb-3 font-mono text-sm tracking-widest uppercase">
                      Estimated Engagement
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-foreground mb-1 text-lg font-bold">
                          {formData.projectTypes.length <= 1
                            ? '4-8 weeks'
                            : formData.projectTypes.length <= 3
                              ? '8-16 weeks'
                              : '16-24 weeks'}
                        </div>
                        <div className="text-muted-foreground/70 font-mono text-[10px] uppercase">
                          Timeline
                        </div>
                      </div>
                      <div>
                        <div className="text-foreground mb-1 text-lg font-bold">
                          {formData.projectTypes.length <= 1
                            ? 'Standard'
                            : formData.projectTypes.length <= 3
                              ? 'Moderate'
                              : 'Complex'}
                        </div>
                        <div className="text-muted-foreground/70 font-mono text-[10px] uppercase">
                          Complexity
                        </div>
                      </div>
                      <div>
                        <div className="text-foreground mb-1 text-lg font-bold">
                          {formData.companySize === '1000+ employees' ||
                          formData.companySize === '201-1000 employees'
                            ? 'Enterprise'
                            : 'Growth'}
                        </div>
                        <div className="text-muted-foreground/70 font-mono text-[10px] uppercase">
                          Tier
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next steps */}
                  <div className="bg-accent border-border rounded-xl border p-5">
                    <h3 className="text-muted-foreground/60 mb-3 font-mono text-sm tracking-widest uppercase">
                      Next Steps
                    </h3>
                    <div className="text-muted-foreground space-y-2 text-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-mono text-xs">01</span> Engineering
                        team reviews your requirements (24h)
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-mono text-xs">02</span> Discovery call
                        scheduled with Solution Architect (48h)
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-mono text-xs">03</span> Technical
                        architecture proposal delivered (1 week)
                      </div>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </Reveal>
          ) : (
            <GlassPanel variant="default" gradient className="p-6 md:p-10">
              <FormWizard
                steps={WIZARD_STEPS}
                onComplete={handleComplete}
                submitLabel="Get Your AI Readiness Assessment"
              >
                {(step) => (
                  <>
                    {/* Step 1: Company */}
                    {step === 0 && (
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <FormField label="Your Name" required htmlFor="name">
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => updateField('name', e.target.value)}
                              placeholder="Full name"
                            />
                          </FormField>
                          <FormField label="Work Email" required htmlFor="email">
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => updateField('email', e.target.value)}
                              placeholder="you@company.com"
                            />
                          </FormField>
                        </div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <FormField label="Company" htmlFor="company">
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => updateField('company', e.target.value)}
                              placeholder="Company name"
                            />
                          </FormField>
                          <FormField label="Your Role" htmlFor="role">
                            <Input
                              id="role"
                              value={formData.role}
                              onChange={(e) => updateField('role', e.target.value)}
                              placeholder="e.g. CTO, VP Engineering"
                            />
                          </FormField>
                        </div>
                        <FormField label="Industry">
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {INDUSTRIES.map((ind) => (
                              <SelectableChip
                                key={ind}
                                label={ind}
                                selected={formData.industry === ind}
                                onClick={() => updateField('industry', ind)}
                              />
                            ))}
                          </div>
                        </FormField>
                        <FormField label="Company Size">
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {COMPANY_SIZES.map((size) => (
                              <SelectableChip
                                key={size}
                                label={size}
                                selected={formData.companySize === size}
                                onClick={() => updateField('companySize', size)}
                              />
                            ))}
                          </div>
                        </FormField>
                      </div>
                    )}

                    {/* Step 2: AI Maturity */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <FormField
                          label="AI Maturity Level"
                          description="Where is your organization on the AI adoption journey?"
                        >
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {AI_MATURITY.map((level) => (
                              <SelectableChip
                                key={level.label}
                                label={level.label}
                                description={level.desc}
                                selected={formData.aiMaturity === level.label}
                                onClick={() => updateField('aiMaturity', level.label)}
                              />
                            ))}
                          </div>
                        </FormField>
                        <FormField
                          label="Current Automation Level"
                          description="How automated are your business processes today?"
                        >
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {AUTOMATION_LEVEL.map((level) => (
                              <SelectableChip
                                key={level.label}
                                label={level.label}
                                description={level.desc}
                                selected={formData.automationLevel === level.label}
                                onClick={() => updateField('automationLevel', level.label)}
                              />
                            ))}
                          </div>
                        </FormField>
                      </div>
                    )}

                    {/* Step 3: Project Type */}
                    {step === 2 && (
                      <div>
                        <p className="text-muted-foreground mb-5 text-sm">Select all that apply:</p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {PROJECT_TYPES.map((type) => (
                            <SelectableChip
                              key={type}
                              label={type}
                              selected={formData.projectTypes.includes(type)}
                              onClick={() => toggleProjectType(type)}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 4: Business Challenge */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <FormField
                          label="What problem are you trying to solve?"
                          required
                          htmlFor="challenge"
                        >
                          <Textarea
                            id="challenge"
                            value={formData.challenge}
                            onChange={(e) => updateField('challenge', e.target.value)}
                            placeholder="Describe the business challenge or opportunity..."
                            inputSize="lg"
                          />
                        </FormField>
                        <FormField
                          label="Current Process"
                          htmlFor="currentProcess"
                          description="How is this handled today?"
                        >
                          <Textarea
                            id="currentProcess"
                            value={formData.currentProcess}
                            onChange={(e) => updateField('currentProcess', e.target.value)}
                            placeholder="Manual steps, existing tools, workarounds..."
                          />
                        </FormField>
                        <FormField
                          label="Expected Outcomes"
                          htmlFor="outcomes"
                          description="What does success look like?"
                        >
                          <Textarea
                            id="outcomes"
                            value={formData.expectedOutcomes}
                            onChange={(e) => updateField('expectedOutcomes', e.target.value)}
                            placeholder="Reduced processing time, higher accuracy, cost savings..."
                          />
                        </FormField>
                      </div>
                    )}

                    {/* Step 5: Technical Environment */}
                    {step === 4 && (
                      <div className="space-y-5">
                        <FormField
                          label="Current Systems & Integrations"
                          htmlFor="systems"
                          description="What software/platforms do you currently use?"
                        >
                          <Textarea
                            id="systems"
                            value={formData.currentSystems}
                            onChange={(e) => updateField('currentSystems', e.target.value)}
                            placeholder="e.g. Salesforce, SAP, AWS, custom ERP, internal tools..."
                          />
                        </FormField>
                        <FormField label="Cloud Provider" htmlFor="cloud">
                          <Input
                            id="cloud"
                            value={formData.cloudProvider}
                            onChange={(e) => updateField('cloudProvider', e.target.value)}
                            placeholder="e.g. AWS, Azure, GCP, On-premise, None yet"
                          />
                        </FormField>
                        <FormField label="Security & Compliance Requirements" htmlFor="security">
                          <Input
                            id="security"
                            value={formData.securityRequirements}
                            onChange={(e) => updateField('securityRequirements', e.target.value)}
                            placeholder="e.g. HIPAA, SOC 2, GDPR, PCI DSS, Private VPC..."
                          />
                        </FormField>
                      </div>
                    )}

                    {/* Step 6: Timeline & Budget */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <FormField label="Timeline" description="When do you need this delivered?">
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {TIMELINES.map((t) => (
                              <SelectableChip
                                key={t.label}
                                label={t.label}
                                description={t.desc}
                                selected={formData.timeline === t.label}
                                onClick={() => updateField('timeline', t.label)}
                              />
                            ))}
                          </div>
                        </FormField>
                        <FormField
                          label="Investment Range"
                          description="Approximate budget for this initiative."
                        >
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {BUDGETS.map((b) => (
                              <SelectableChip
                                key={b.label}
                                label={b.label}
                                description={b.desc}
                                selected={formData.budget === b.label}
                                onClick={() => updateField('budget', b.label)}
                              />
                            ))}
                          </div>
                        </FormField>
                      </div>
                    )}

                    {/* Step 7: Additional */}
                    {step === 6 && (
                      <div className="space-y-5">
                        <FormField
                          label="Additional Notes"
                          htmlFor="notes"
                          description="Architecture diagrams, links, context — anything helpful."
                        >
                          <Textarea
                            id="notes"
                            value={formData.additionalNotes}
                            onChange={(e) => updateField('additionalNotes', e.target.value)}
                            placeholder="Share any additional context, links to documents, or specific questions..."
                            inputSize="lg"
                          />
                        </FormField>
                        <div className="bg-accent rounded-xl border border-white/[0.06] p-4">
                          <div className="text-muted-foreground flex items-center gap-3 text-sm">
                            <Paperclip className="text-muted-foreground/60 h-4 w-4" />
                            <span>
                              File attachments available after submission via email reply.
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </FormWizard>
            </GlassPanel>
          )}
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ WHAT HAPPENS NEXT ═══ */}
      <section className="relative overflow-hidden py-32">
        <AmbientGlow position="center" size="lg" intensity={0.02} />
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Reveal variant="fadeUp">
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
                What Happens Next
              </span>
              <Heading level={2}>From Submission to Production</Heading>
              <Text size="lg">
                A structured path from initial conversation through architecture design to
                production deployment.
              </Text>
            </Reveal>
          </div>

          <RevealStagger stagger={0.1}>
            <Grid cols={3} gap="sm" className="relative mx-auto max-w-4xl">
              <div className="absolute top-10 right-[15%] left-[15%] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
              {[
                {
                  step: '01',
                  title: 'Discovery Call',
                  desc: '30-minute focused conversation about your goals, constraints, and technical landscape.',
                  icon: Phone,
                },
                {
                  step: '02',
                  title: 'Technical Review',
                  desc: 'Our architects analyze requirements, evaluate feasibility, and identify integration points.',
                  icon: Search,
                },
                {
                  step: '03',
                  title: 'Solution Architecture',
                  desc: 'Detailed technical proposal with system design, technology choices, and implementation roadmap.',
                  icon: Code,
                },
                {
                  step: '04',
                  title: 'Proposal & Agreement',
                  desc: 'Clear scope, timeline, milestones, and investment breakdown. No hidden fees.',
                  icon: FileText,
                },
                {
                  step: '05',
                  title: 'Development',
                  desc: 'Iterative sprints with working software delivered every two weeks. Continuous collaboration.',
                  icon: Rocket,
                },
                {
                  step: '06',
                  title: 'Launch & Support',
                  desc: 'Production deployment, monitoring setup, knowledge transfer, and ongoing engineering partnership.',
                  icon: CheckCircle2,
                },
              ].map((phase) => (
                <RevealItem key={phase.step}>
                  <GlassPanel
                    variant="default"
                    className="group hover:bg-muted relative z-10 h-full p-6 transition-colors"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="bg-accent border-border flex h-8 w-8 items-center justify-center rounded-lg border transition-colors group-hover:border-white/20">
                        <phase.icon
                          className="text-muted-foreground/70 group-hover:text-foreground h-4 w-4 transition-colors"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-muted-foreground/60 font-mono text-[10px]">
                        {phase.step}
                      </span>
                    </div>
                    <h4 className="font-display text-foreground mb-2 text-base font-medium">
                      {phase.title}
                    </h4>
                    <Text size="sm" className="text-muted-foreground text-xs">
                      {phase.desc}
                    </Text>
                  </GlassPanel>
                </RevealItem>
              ))}
            </Grid>
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ FAQ ═══ */}
      <section className="relative overflow-hidden py-32">
        <NoiseTexture opacity={0.012} />
        <Container size="md" className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Reveal variant="fadeUp">
              <Heading level={2}>Frequently Asked Questions</Heading>
            </Reveal>
          </div>
          <Reveal variant="fade" delay={0.1}>
            <GlassPanel variant="dark" className="p-6 md:p-8">
              <Accordion
                items={[
                  {
                    id: 'faq-1',
                    title: 'How long does a typical project take?',
                    content:
                      'It depends on scope. A focused AI agent pilot: 4-6 weeks. A full enterprise platform: 4-6 months. We deliver incrementally — you see working software within the first two weeks of development.',
                  },
                  {
                    id: 'faq-2',
                    title: 'Can you modernize our existing software?',
                    content:
                      'Yes. We use strangler fig patterns to progressively extract and replace legacy modules without disrupting ongoing operations. Your systems continue running while we modernize underneath.',
                  },
                  {
                    id: 'faq-3',
                    title: 'Can you integrate AI into our current systems?',
                    content:
                      'Absolutely. Our API-first approach means AI capabilities (agents, RAG, automation) can be integrated into existing software via secure APIs without requiring a rewrite of your core systems.',
                  },
                  {
                    id: 'faq-4',
                    title: 'Do you provide ongoing maintenance?',
                    content:
                      'Yes. We offer engineering partnerships with dedicated support, monitoring, security patching, performance optimization, and quarterly architecture reviews.',
                  },
                  {
                    id: 'faq-5',
                    title: 'Can you work alongside our engineering team?',
                    content:
                      'Yes. We frequently embed with client engineering teams — pair programming, shared repositories, joint architecture sessions, and knowledge transfer are standard practice.',
                  },
                  {
                    id: 'faq-6',
                    title: "What if I'm not sure what I need?",
                    content:
                      "That's exactly what the discovery process is for. Select 'Need Consultation' for budget and 'Flexible' for timeline. Our architects will help you scope the right solution during the discovery call.",
                  },
                ]}
              />
            </GlassPanel>
          </Reveal>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden py-32">
        <AmbientGlow position="center" size="lg" intensity={0.025} animate animationDuration={7} />
        <Container size="sm" className="relative z-10">
          <Reveal variant="perspective">
            <div className="text-center">
              <Heading level={3} className="mb-4">
                Prefer a Direct Conversation?
              </Heading>
              <Text size="lg" className="text-muted-foreground mx-auto mb-8 max-w-md">
                Skip the form. Email us directly or schedule a call at your convenience.
              </Text>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="mailto:contact@coherentailabs.com">
                  <MagneticButton
                    strength={20}
                    className="focus-visible:ring-ring text-foreground border-border flex w-full items-center justify-center gap-3 rounded-xl border bg-white/5 px-6 py-3 text-sm font-medium transition-all duration-300 outline-none hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                  >
                    <Mail className="text-muted-foreground h-4 w-4" />
                    contact@coherentailabs.com
                  </MagneticButton>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
