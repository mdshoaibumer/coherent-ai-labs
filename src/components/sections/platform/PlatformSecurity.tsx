"use client";
import React from "react";
import { Shield, Key, Lock, FileText, Eye, Server } from "lucide-react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { GlassPanel } from "../../ui/GlassPanel";
import { IconWrapper } from "../../ui/IconWrapper";
import { Reveal, RevealStagger, RevealItem } from "../../animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../../animations/AmbientGlow";

const SECURITY_FEATURES = [
  {
    icon: Key,
    title: "Authentication & SSO",
    desc: "SAML 2.0, OAuth 2.0, and OpenID Connect with MFA enforcement across all access points.",
  },
  {
    icon: Lock,
    title: "Encryption",
    desc: "AES-256 at rest, TLS 1.3 in transit. Customer-managed keys via AWS KMS or Azure Key Vault.",
  },
  {
    icon: FileText,
    title: "Audit Logging",
    desc: "Immutable audit trails for every API call, model invocation, and data access event.",
  },
  {
    icon: Shield,
    title: "RBAC & Permissions",
    desc: "Granular role-based access with project-level isolation and principle of least privilege.",
  },
  {
    icon: Eye,
    title: "Compliance",
    desc: "SOC 2 Type II, HIPAA-ready, GDPR-compliant. Regular third-party penetration testing.",
  },
  {
    icon: Server,
    title: "Private Deployments",
    desc: "Deploy within your VPC for complete data sovereignty. Zero data leaves your perimeter.",
  },
];

export function PlatformSecurity() {
  return (
    <Section padding="default" backgroundElement={
      <>
        <NoiseTexture opacity={0.015} />
        <AmbientGlow position="top-center" size="lg" intensity={0.02} />
      </>
    }>
      <Container>
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Enterprise Security
            </span>
            <Heading level={2}>
              Security Architecture. Not an Afterthought.
            </Heading>
            <Text size="lg">
              Every layer of the platform enforces enterprise-grade security — from authentication through data processing to model outputs.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECURITY_FEATURES.map((feature) => (
            <RevealItem key={feature.title}>
              <GlassPanel variant="dark" className="p-6 h-full group hover:border-white/15 transition-all duration-500">
                <IconWrapper variant="default" size="sm" className="mb-5 group-hover:border-white/20 transition-colors duration-500">
                  <feature.icon className="w-5 h-5 text-[#888] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </IconWrapper>
                <h3 className="font-display text-lg font-medium text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors">
                  {feature.desc}
                </Text>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Compliance badges */}
        <Reveal variant="fade" delay={0.3}>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {["SOC 2 Type II", "HIPAA Ready", "GDPR Compliant", "ISO 27001", "PCI DSS"].map(badge => (
              <div key={badge} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#777] uppercase tracking-widest">
                {badge}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
