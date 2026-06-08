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
        "Yes. Your journal content is encrypted on your device. Data is only transmitted when required for features such as account synchronization or AI-powered analysis."
    },
    {
      question: "Does MindLogs use my journal to train AI models?",
      answer:
        "No. Journal content processed for AI feedback is used only to generate the requested analysis and is not used by MindLogs to train AI models."
    },
    {
      question: "Who processes payments?",
      answer:
        "All subscription payments are processed through Apple App Store or Google Play. MindLogs does not receive or store your payment card details."
    },
    {
      question: "Can I delete my data?",
      answer:
        "Yes. You can delete your account and request removal of your personal data at any time by contacting hello@mindlogs.app or through available account settings."
    },
    {
      question: "Are AI features optional?",
      answer:
        "Yes. AI-generated feedback and analysis are only provided when you choose to use those features."
    },
    {
      question: "Do you sell my personal data?",
      answer:
        "No. MindLogs does not sell personal data to third parties."
    }
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
          className="text-4xl sm:text-5xl font-sans font-bold text-gray-900 mb-3"
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
                  <h3 className="font-sans text-lg font-bold text-gray-900 mb-2">
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
          <p className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 text-center leading-relaxed italic">
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
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At MindLogs we take your privacy very seriously. This Privacy
              Policy explains what personal data we process when you use the{" "}
              <strong>MindLogs</strong> application and the{" "}
              <a
                href="https://mindlogs.app"
                className="text-[#9B87F5] font-medium hover:underline"
              >
                mindlogs.app
              </a>{" "}
              website (the &quot;Service&quot;), for what purposes, on what
              legal basis and what rights you have, in accordance with
              Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018
              (LOPDGDD).
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              1. Data controller
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Evergreen Projects S.L.</strong>
              <br />
              Tax ID (CIF): B67516815
              <br />
              Address: Avenida Roma 43, 08029 Barcelona, Spain
              <br />
              Privacy contact:{" "}
              <a
                href="mailto:hello@mindlogs.app"
                className="text-[#9B87F5] font-medium hover:underline"
              >
                hello@mindlogs.app
              </a>
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              2. Data we process
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Depending on how you use the Service, we may process the
              following categories of data:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Account data:</strong> email address and authentication
                  data needed to create and access your account.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Journal content:</strong> the emotions, sensations,
                  thoughts, reflections and other information you record in your
                  entries. This information may reveal data about your mood and
                  emotional wellbeing (see section 4).
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Subscription and payment data:</strong> information
                  about your plan, subscription status and purchases. Payments are
                  processed through the App Store or Google Play;{" "}
                  <strong>we do not receive or store your card details</strong>.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Usage and technical data:</strong> information about how
                  the application works, device identifiers, diagnostic data and
                  aggregated usage statistics that help us improve the Service.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Communications:</strong> the data you provide when you
                  contact support.
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              3. Where your journal is stored
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The content of your journal is stored{" "}
              <strong>encrypted on your device</strong>. When you use features
              that require a connection —such as syncing your account or
              artificial intelligence feedback and analysis— the strictly
              necessary data is transmitted securely to our providers in order
              to deliver those features (see sections 5 and 6).
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              4. Special category data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The content you record in MindLogs may include sensitive
              information relating to your emotional or mental health,
              considered a &quot;special category&quot; of data under the GDPR.
              We process this information{" "}
              <strong>on the basis of your explicit consent</strong>, which you
              give by using the Service to record your entries and, where
              applicable, by activating the artificial intelligence features.
              You may withdraw your consent at any time by ceasing to use the
              Service and deleting your data.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              5. Purposes and legal bases
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#9B87F5]/30">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-[#9B87F5]/30 bg-[#f3f0ff]/50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      Legal basis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#9B87F5]/20">
                    <td className="px-4 py-3">
                      Create and manage your account and provide the Service
                    </td>
                    <td className="px-4 py-3">
                      Performance of the contract (these Terms of Use)
                    </td>
                  </tr>
                  <tr className="border-b border-[#9B87F5]/20">
                    <td className="px-4 py-3">
                      Record and display your journal content
                    </td>
                    <td className="px-4 py-3">
                      Explicit consent (special category data)
                    </td>
                  </tr>
                  <tr className="border-b border-[#9B87F5]/20">
                    <td className="px-4 py-3">
                      Generate artificial intelligence feedback and analysis
                    </td>
                    <td className="px-4 py-3">Explicit consent</td>
                  </tr>
                  <tr className="border-b border-[#9B87F5]/20">
                    <td className="px-4 py-3">
                      Manage subscriptions, payments and the referral program
                    </td>
                    <td className="px-4 py-3">Performance of the contract</td>
                  </tr>
                  <tr className="border-b border-[#9B87F5]/20">
                    <td className="px-4 py-3">
                      Maintain security and improve the Service
                    </td>
                    <td className="px-4 py-3">Legitimate interest</td>
                  </tr>
                  <tr className="border-b border-[#9B87F5]/20">
                    <td className="px-4 py-3">Handle your support queries</td>
                    <td className="px-4 py-3">
                      Performance of the contract / Legitimate interest
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      Comply with legal obligations (e.g. tax)
                    </td>
                    <td className="px-4 py-3">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              6. Providers and recipients
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal data. To provide the Service we rely
              on providers who act as data processors, under contracts that
              guarantee the protection of your data:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Supabase:</strong> authentication infrastructure,
                  account management, subscriptions and referrals.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>RevenueCat:</strong> technical management of
                  subscription status.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>OpenAI:</strong> processing of the text needed to
                  generate artificial intelligence feedback and analysis, when
                  you activate these features.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Apple App Store and Google Play:</strong> processing of
                  payments and subscriptions.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Web hosting provider:</strong> hosting of the
                  mindlogs.app website.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We may also disclose data to public authorities where there is a
              legal obligation to do so.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              7. International transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Some of our providers may process data outside the European
              Economic Area. In those cases, we ensure that the transfer is
              covered by valid mechanisms under the GDPR, such as European
              Commission adequacy decisions or Standard Contractual Clauses.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              8. Retention period
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We keep your data for as long as you maintain an active account
              and use the Service. When you delete your account or withdraw
              your consent, we will delete or anonymise your data, except for
              data we are required to keep in order to comply with legal
              obligations or to handle possible liabilities, for the periods
              legally required.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              9. Your rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may exercise the following rights at any time:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Access</strong> to your personal data.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Rectification</strong> of inaccurate or incomplete
                  data.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Erasure</strong> of your data (&quot;right to be
                  forgotten&quot;).
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Restriction</strong> of processing.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Objection</strong> to processing.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Portability</strong> of your data.
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-[#9B87F5] font-bold">•</span>
                <span>
                  <strong>Withdrawal of consent</strong> given, without
                  affecting the lawfulness of prior processing.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise them, write to us at{" "}
              <a
                href="mailto:hello@mindlogs.app"
                className="text-[#9B87F5] font-medium hover:underline"
              >
                hello@mindlogs.app
              </a>
              . If you believe we have not handled your request properly, you
              have the right to lodge a complaint with the Spanish Data
              Protection Agency (
              <a
                href="https://www.aepd.es"
                rel="nofollow noopener"
                className="text-[#9B87F5] font-medium hover:underline"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              10. Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We apply appropriate technical and organisational measures to
              protect your data, including{" "}
              <strong>encryption of the journal content on your device</strong>{" "}
              and the use of secure connections. No system is completely
              infallible, but we work to maintain a level of security
              commensurate with the sensitivity of the information processed.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              11. Minors
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Service is intended for people over{" "}
              <strong>16 years of age</strong>. We do not knowingly collect data
              from minors under that age. If we become aware that we have
              processed data of a minor under 16 without the appropriate legal
              basis, we will delete it.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              12. Cookies and similar technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The mindlogs.app website uses only the technical cookies necessary
              for its operation. Should we incorporate analytics or third-party
              cookies in the future, we will inform you and, where appropriate,
              obtain your prior consent.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              13. Changes to this Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy to reflect legal or Service
              changes. We will publish the current version on this page
              indicating the date of the last update and, where the changes are
              substantial, we will notify you by reasonable means.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              14. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or about the
              processing of your data, contact us at{" "}
              <a
                href="mailto:hello@mindlogs.app"
                className="text-[#9B87F5] font-medium hover:underline"
              >
                hello@mindlogs.app
              </a>
              .
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
        <h2 className="font-sans text-3xl font-bold text-gray-900 text-center mb-12">
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
                <span className="font-sans text-lg font-semibold text-gray-900 text-left">
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
