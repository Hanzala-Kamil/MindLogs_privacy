"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Users, ChevronDown, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { renderWithEmphasis } from "@/lib/render-emphasis";
import {
  getStoredLanguage,
  translations,
  type Language,
} from "@/lib/translations";

const highlightIcons = [Lock, Heart, Users, Shield];

function renderIntro(text: string) {
  const linkParts = text.split("mindlogs.app");

  const renderPart = (part: string, keyPrefix: string) => {
    const appParts = part.split("MindLogs");
    return appParts.map((segment, index) => (
      <span key={`${keyPrefix}-${index}`}>
        {segment}
        {index < appParts.length - 1 && <strong>MindLogs</strong>}
      </span>
    ));
  };

  return (
    <>
      {renderPart(linkParts[0], "before")}
      <a
        href="https://mindlogs.app"
        className="text-[#9B87F5] font-medium hover:underline"
      >
        mindlogs.app
      </a>
      {renderPart(linkParts[1], "after")}
    </>
  );
}

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<Language>("en");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    setLanguage(getStoredLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("mindlogs-lang", language);
  }, [language]);

  const t = translations[language];
  const policy = t.policy.sections;

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

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-[#f3f0ff] to-[#ede9fe]"
      style={{ "--color-primary": "#9B87F5" } as React.CSSProperties}
    >
      <LanguageSwitcher language={language} onChange={setLanguage} />

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
          {t.hero.title}{" "}
          <span className="bg-gradient-to-r from-[#9B87F5] to-[#7c6ed4] bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          {t.hero.subtitle}
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
          {t.hero.readPolicy}
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.highlightCards.map((card, index) => {
            const Icon = highlightIcons[index];
            return (
              <div
                key={index}
                className="relative group transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9B87F5] to-[#7c6ed4] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                <div className="relative bg-white/60 backdrop-blur-sm border border-[#9B87F5]/30 rounded-2xl p-6 hover:border-[#9B87F5]/60 transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#f3f0ff] to-[#ede9fe] rounded-full mb-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-6 h-6 text-[#9B87F5]" />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="relative bg-gradient-to-br from-white/80 to-[#f3f0ff]/80 backdrop-blur-xl border border-[#9B87F5]/40 rounded-3xl p-8 sm:p-12 shadow-lg shadow-[#9B87F5]/20">
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-[#9B87F5] to-[#7c6ed4] rounded-full opacity-30" />
          <p className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 text-center leading-relaxed italic">
            {t.trustQuote}
          </p>
        </div>
      </motion.section>

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
              {renderIntro(t.policy.intro)}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.controller.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>{policy.controller.company}</strong>
              <br />
              {policy.controller.taxId}
              <br />
              {policy.controller.address}
              <br />
              {policy.controller.contact}{" "}
              <a
                href={`mailto:${t.contactEmail}`}
                className="text-[#9B87F5] font-medium hover:underline"
              >
                {t.contactEmail}
              </a>
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.dataWeProcess.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.dataWeProcess.intro}
            </p>
            <ul className="space-y-3 ml-4">
              {policy.dataWeProcess.items.map((item) => (
                <li key={item.label} className="flex gap-3 text-gray-700">
                  <span className="text-[#9B87F5] font-bold">•</span>
                  <span>
                    <strong>{item.label}</strong> {item.text}
                    {"emphasis" in item && item.emphasis ? (
                      <>
                        {" "}
                        <strong>{item.emphasis}</strong>.
                      </>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.journalStorage.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {renderWithEmphasis(
                policy.journalStorage.text,
                policy.journalStorage.emphasis
              )}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.specialCategory.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {renderWithEmphasis(
                policy.specialCategory.text,
                policy.specialCategory.emphasis
              )}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.purposes.title}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#9B87F5]/30">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-[#9B87F5]/30 bg-[#f3f0ff]/50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      {policy.purposes.purposeHeader}
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      {policy.purposes.legalBasisHeader}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {policy.purposes.rows.map((row) => (
                    <tr
                      key={row.purpose}
                      className="border-b border-[#9B87F5]/20 last:border-b-0"
                    >
                      <td className="px-4 py-3">{row.purpose}</td>
                      <td className="px-4 py-3">{row.legalBasis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.providers.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.providers.intro}
            </p>
            <ul className="space-y-3 ml-4">
              {policy.providers.items.map((item) => (
                <li key={item.label} className="flex gap-3 text-gray-700">
                  <span className="text-[#9B87F5] font-bold">•</span>
                  <span>
                    <strong>{item.label}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              {policy.providers.outro}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.transfers.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.transfers.text}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.retention.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.retention.text}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.rights.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.rights.intro}
            </p>
            <ul className="space-y-3 ml-4">
              {policy.rights.items.map((item) => (
                <li key={item.label} className="flex gap-3 text-gray-700">
                  <span className="text-[#9B87F5] font-bold">•</span>
                  <span>
                    <strong>{item.label}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              {policy.rights.outroBefore}{" "}
              <a
                href={`mailto:${t.contactEmail}`}
                className="text-[#9B87F5] font-medium hover:underline"
              >
                {t.contactEmail}
              </a>
              {policy.rights.outroMiddle}
              <a
                href="https://www.aepd.es"
                rel="nofollow noopener"
                className="text-[#9B87F5] font-medium hover:underline"
              >
                www.aepd.es
              </a>
              {policy.rights.outroAfter}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.security.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {renderWithEmphasis(
                policy.security.text,
                policy.security.emphasis
              )}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.minors.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {renderWithEmphasis(policy.minors.text, policy.minors.emphasis)}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.cookies.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.cookies.text}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.changes.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.changes.text}
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9B87F5]/30 to-transparent" />

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              {policy.contact.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.contact.textBefore}{" "}
              <a
                href={`mailto:${t.contactEmail}`}
                className="text-[#9B87F5] font-medium hover:underline"
              >
                {t.contactEmail}
              </a>
              {policy.contact.textAfter}
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24"
      >
        <h2 className="font-sans text-3xl font-bold text-gray-900 text-center mb-12">
          {t.faq.title}
        </h2>
        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={item.question}
              initial={false}
              className="border border-[#9B87F5]/30 rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm hover:border-[#9B87F5]/60 transition-all"
            >
              <button
                type="button"
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
