"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, Shield, Users, ChevronDown, Heart } from "lucide-react";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const highlightCards = [
    {
      icon: Lock,
      title: "End-to-End Security",
      description: "Your data is encrypted and secured",
    },
    {
      icon: Heart,
      title: "Your Data Stays Private",
      description: "We never share your information",
    },
    {
      icon: Users,
      title: "No Selling Personal Data",
      description: "Your privacy is never commodified",
    },
    {
      icon: Shield,
      title: "AI Conversations Protected",
      description: "All AI insights remain private",
    },
  ];

  const faqItems = [
    {
      question: "Is my journal private?",
      answer:
        "Yes, absolutely. Your journal entries are encrypted and stored securely. Only you have access to your personal journal unless you explicitly choose to share entries.",
    },
    {
      question: "Can MindLogs read my entries?",
      answer:
        "MindLogs uses AI only to provide insights and support when you opt-in for AI-powered features. These analyses are generated on secure servers and never used to train models or shared with third parties.",
    },
    {
      question: "Why does MindLogs need microphone permission?",
      answer:
        "Microphone access is only used when you choose voice journaling or voice-to-text features. MindLogs does not secretly record users. Audio access is permission-based and fully user-controlled.",
    },
    {
      question: "How do I delete my data?",
      answer:
        "You can request permanent deletion of your account and all associated data from your account settings. We permanently remove all your data from our active systems within 30 days of your request.",
    },
    {
      question: "Is my backend data secure?",
      answer:
        "Yes. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our servers are hosted with secure infrastructure providers with SOC 2 compliance.",
    },
    {
      question: "Is payment information stored?",
      answer:
        "No. Payment processing is handled by secure third-party providers. MindLogs never stores credit card information. Only billing receipts are retained for accounting purposes.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-[#f3f0ff] to-[#ede9fe]"
      style={{ "--color-primary": "#9B87F5" } as React.CSSProperties}
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center pt-4 pb-8 sm:pb-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-4"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_20px_50px_-15px_rgba(155,135,245,0.45),0_8px_24px_-8px_rgba(15,23,42,0.12)] ring-0 ring-[#9B87F5]/15">
              <img
                src="/mindlogs-logo.png"
                alt="MindLogs"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </div>
          </motion.div>
          <p className="mt-3 text-center font-sans text-2xl font-bold tracking-tight text-[#9B87F5] sm:text-3xl">
            MindLogs
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-3"
        >
          Your Privacy,{" "}
          <span className="bg-gradient-to-r from-[#9B87F5] to-[#7c6ed4] bg-clip-text text-transparent">
            Our Promise
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          Your thoughts, emotions, and journal entries stay protected and
          secure. At MindLogs, we believe privacy is fundamental to emotional
          wellness.
        </motion.p>

        <motion.button
          type="button"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("privacy")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9B87F5] to-[#7c6ed4] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#9B87F5]/30 transition-all"
        >
          Read Policy
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.section>

      {/* Highlight Cards */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9B87F5] to-[#7c6ed4] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                <div className="relative bg-white/60 backdrop-blur-sm border border-[#9B87F5]/30 rounded-2xl p-6 hover:border-[#9B87F5]/60 transition-all">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#f3f0ff] to-[#ede9fe] rounded-full mb-4"
                  >
                    <Icon className="w-6 h-6 text-[#9B87F5]" />
                  </motion.div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Trust Quote */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="relative bg-gradient-to-br from-white/80 to-[#f3f0ff]/80 backdrop-blur-xl border border-[#9B87F5]/40 rounded-3xl p-8 sm:p-12 shadow-lg shadow-[#9B87F5]/20">
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-[#9B87F5] to-[#7c6ed4] rounded-full opacity-30" />
          <p className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 text-center leading-relaxed italic">
            MindLogs is built to help you reflect safely, privately, and without
            judgment.
          </p>
        </div>
      </motion.section>

      {/* Main Privacy Content */}
      <motion.section
        id="privacy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="space-y-12">
          {/* Introduction */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to MindLogs. We are committed to protecting your privacy
              and ensuring you have a positive experience on our platform. This
              Privacy Policy explains our information practices, how we collect,
              use, and protect your data, and your rights as a user.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using MindLogs, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Information We Collect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              When you use MindLogs, we collect the following information:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Account Information:</strong> Your name, email
                  address, and password (encrypted)
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Journal Entries:</strong> All content you write in
                  your journal
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Voice Data:</strong> Audio recordings only when you
                  explicitly use voice journaling
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Usage Data:</strong> Interaction patterns and feature
                  usage (anonymized)
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Device Information:</strong> Browser type, IP address,
                  and device identifiers
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Why We Collect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Why We Collect Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We collect your information to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  Provide, maintain, and improve our journaling platform
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  Personalize your experience and deliver relevant features
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  Provide customer support and respond to your inquiries
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>Prevent fraud and ensure platform security</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>Comply with legal obligations and enforce our terms</span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* AI Analysis */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              AI Journal Analysis & Emotional Insights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MindLogs offers optional AI-powered insights to help you
              understand your emotional patterns and wellness trends.
              Here&apos;s how it works:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Opt-In Analysis:</strong> AI insights are only
                  generated when you explicitly enable this feature
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Secure Processing:</strong> Your journal entries are
                  analyzed on secure, encrypted servers
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>No Model Training:</strong> Your data is never used to
                  train AI models or shared with AI providers
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Permanent Privacy:</strong> AI insights are stored
                  securely and remain completely private
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Voice Permissions */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Voice & Microphone Permissions
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MindLogs may request microphone access for voice journaling
              features. Here&apos;s how we handle voice data:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Permission-Based:</strong> Microphone access is only
                  requested when you choose to use voice features
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>No Secret Recording:</strong> MindLogs never records
                  audio without explicit user action
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Full Control:</strong> You can revoke microphone
                  permissions at any time through your device settings
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Encrypted Storage:</strong> Voice recordings are
                  encrypted and stored securely
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Transcription Privacy:</strong> Voice-to-text
                  conversions are processed securely and never shared
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Cookies & Analytics */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Cookies & Analytics
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and analytics tools to improve user experience.
              These help us understand how you use MindLogs and identify areas
              for improvement. You can control cookie preferences in your
              browser settings, though some functionality may be limited if you
              disable cookies.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Third-Party Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MindLogs integrates with select third-party services only for
              essential functionality:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Payment Processing:</strong> Secure providers for
                  subscription management (PCI-DSS compliant)
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Cloud Storage:</strong> Encrypted infrastructure for
                  data backup and recovery
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Authentication:</strong> Optional social login
                  providers (data minimized)
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We have strict data processing agreements with all third parties
              ensuring they follow our privacy standards.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Data Protection */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Data Protection & Encryption
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your security is our highest priority. MindLogs employs
              industry-leading encryption standards:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Data at Rest:</strong> AES-256 encryption for all
                  stored data
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Data in Transit:</strong> TLS 1.3 for all data
                  transmission
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Password Security:</strong> Passwords are hashed using
                  industry-standard algorithms
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Backend Security */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Data Storage & Backend Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MindLogs securely stores user data using encrypted backend systems
              with the following protections:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Redundant Systems:</strong> Automatic backups across
                  geographically distributed data centers
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Access Controls:</strong> Role-based access with
                  strict authentication requirements
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Monitoring:</strong> 24/7 security monitoring and
                  intrusion detection
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Compliance:</strong> SOC 2 Type II certified
                  infrastructure
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* User Rights */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Access Your Data:</strong> Request a copy of all
                  personal data we hold
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Correct Your Data:</strong> Update inaccurate
                  information
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Delete Your Data:</strong> Request permanent deletion
                  of your account and data
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Opt-Out:</strong> Disable optional features like AI
                  analysis or analytics
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Port Your Data:</strong> Export your data in standard
                  formats
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Data Deletion Policy */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Data Deletion Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MindLogs respects your right to privacy even after you leave.
              Here&apos;s our data deletion process:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Account Deletion Request:</strong> You can request
                  account deletion anytime from your settings
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Processing Timeline:</strong> We process deletion
                  requests within 30 days
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Permanent Removal:</strong> All journal entries,
                  account data, and voice recordings are securely deleted
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Backup Deletion:</strong> Data is removed from backup
                  systems within 90 days
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Confirmation:</strong> We send confirmation once
                  deletion is complete
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          {/* Account Deletion */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Account Deletion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To delete your MindLogs account and all associated personal data:
            </p>
            <ol className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">1.</span>
                <span>Log in to your MindLogs account</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">2.</span>
                <span>
                  Go to Settings &gt; Privacy & Security &gt; Delete Account
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-purple-500 font-bold">3.</span>
                <span>Review what will be deleted</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-purple-500 font-bold">4.</span>
                <span>Confirm deletion (this cannot be undone)</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-purple-500 font-bold">5.</span>
                <span>
                  Receive confirmation email when deletion is complete
                </span>
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you cannot access your account, email us at{" "}
              <span className="text-[#9B87F5] font-medium">
                privacy@mindlogs.app
              </span>{" "}
              with proof of account ownership.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              className="border border-[#9B87F5]/30 rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm hover:border-[#9B87F5]/60 transition-all"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f3f0ff]/30 transition-colors"
              >
                <span className="font-serif text-lg font-semibold text-gray-900 text-left">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#9B87F5] flex-shrink-0" />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: expandedFaq === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
