export type Language = "en" | "es";

export const translations = {
  en: {
    contactEmail: "hello@mindlogs.app",
    hero: {
      title: "Your Privacy,",
      titleHighlight: "Our Promise",
      subtitle:
        "Your thoughts, emotions, and journal entries stay protected and secure. At MindLogs, we believe privacy is fundamental to emotional wellness.",
      readPolicy: "Read Policy",
    },
    highlightCards: [
      {
        title: "End-to-End Security",
        description: "Your data is encrypted and secured",
      },
      {
        title: "Your Data Stays Private",
        description: "We never share your information",
      },
      {
        title: "No Selling Personal Data",
        description: "Your privacy is never commodified",
      },
      {
        title: "AI Conversations Protected",
        description: "All AI insights remain private",
      },
    ],
    trustQuote:
      "MindLogs is built to help you reflect safely, privately, and without judgment.",
    policy: {
      intro:
        'At MindLogs we take your privacy very seriously. This Privacy Policy explains what personal data we process when you use the MindLogs application and the mindlogs.app website (the "Service"), for what purposes, on what legal basis and what rights you have, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
      sections: {
        controller: {
          title: "1. Data controller",
          company: "Evergreen Projects S.L.",
          taxId: "Tax ID (CIF): B67516815",
          address: "Address: Avenida Roma 43, 08029 Barcelona, Spain",
          contact: "Privacy contact:",
        },
        dataWeProcess: {
          title: "2. Data we process",
          intro:
            "Depending on how you use the Service, we may process the following categories of data:",
          items: [
            {
              label: "Account data:",
              text: "email address and authentication data needed to create and access your account.",
            },
            {
              label: "Journal content:",
              text: "the emotions, sensations, thoughts, reflections and other information you record in your entries. This information may reveal data about your mood and emotional wellbeing (see section 4).",
            },
            {
              label: "Subscription and payment data:",
              text: "information about your plan, subscription status and purchases. Payments are processed through the App Store or Google Play;",
              emphasis: "we do not receive or store your card details",
            },
            {
              label: "Usage and technical data:",
              text: "information about how the application works, device identifiers, diagnostic data and aggregated usage statistics that help us improve the Service.",
            },
            {
              label: "Communications:",
              text: "the data you provide when you contact support.",
            },
          ],
        },
        journalStorage: {
          title: "3. Where your journal is stored",
          text: "The content of your journal is stored encrypted on your device. When you use features that require a connection —such as syncing your account or artificial intelligence feedback and analysis— the strictly necessary data is transmitted securely to our providers in order to deliver those features (see sections 5 and 6).",
          emphasis: "encrypted on your device",
        },
        specialCategory: {
          title: "4. Special category data",
          text: 'The content you record in MindLogs may include sensitive information relating to your emotional or mental health, considered a "special category" of data under the GDPR. We process this information on the basis of your explicit consent, which you give by using the Service to record your entries and, where applicable, by activating the artificial intelligence features. You may withdraw your consent at any time by ceasing to use the Service and deleting your data.',
          emphasis: "on the basis of your explicit consent",
        },
        purposes: {
          title: "5. Purposes and legal bases",
          purposeHeader: "Purpose",
          legalBasisHeader: "Legal basis",
          rows: [
            {
              purpose: "Create and manage your account and provide the Service",
              legalBasis: "Performance of the contract (these Terms of Use)",
            },
            {
              purpose: "Record and display your journal content",
              legalBasis: "Explicit consent (special category data)",
            },
            {
              purpose: "Generate artificial intelligence feedback and analysis",
              legalBasis: "Explicit consent",
            },
            {
              purpose:
                "Manage subscriptions, payments and the referral program",
              legalBasis: "Performance of the contract",
            },
            {
              purpose: "Maintain security and improve the Service",
              legalBasis: "Legitimate interest",
            },
            {
              purpose: "Handle your support queries",
              legalBasis: "Performance of the contract / Legitimate interest",
            },
            {
              purpose: "Comply with legal obligations (e.g. tax)",
              legalBasis: "Legal obligation",
            },
          ],
        },
        providers: {
          title: "6. Providers and recipients",
          intro:
            "We do not sell your personal data. To provide the Service we rely on providers who act as data processors, under contracts that guarantee the protection of your data:",
          items: [
            {
              label: "Supabase:",
              text: "authentication infrastructure, account management, subscriptions and referrals.",
            },
            {
              label: "RevenueCat:",
              text: "technical management of subscription status.",
            },
            {
              label: "OpenAI:",
              text: "processing of the text needed to generate artificial intelligence feedback and analysis, when you activate these features.",
            },
            {
              label: "Apple App Store and Google Play:",
              text: "processing of payments and subscriptions.",
            },
            {
              label: "Web hosting provider:",
              text: "hosting of the mindlogs.app website.",
            },
          ],
          outro:
            "We may also disclose data to public authorities where there is a legal obligation to do so.",
        },
        transfers: {
          title: "7. International transfers",
          text: "Some of our providers may process data outside the European Economic Area. In those cases, we ensure that the transfer is covered by valid mechanisms under the GDPR, such as European Commission adequacy decisions or Standard Contractual Clauses.",
        },
        retention: {
          title: "8. Retention period",
          text: "We keep your data for as long as you maintain an active account and use the Service. When you delete your account or withdraw your consent, we will delete or anonymise your data, except for data we are required to keep in order to comply with legal obligations or to handle possible liabilities, for the periods legally required.",
        },
        rights: {
          title: "9. Your rights",
          intro: "You may exercise the following rights at any time:",
          items: [
            { label: "Access", text: "to your personal data." },
            {
              label: "Rectification",
              text: "of inaccurate or incomplete data.",
            },
            {
              label: "Erasure",
              text: 'of your data ("right to be forgotten").',
            },
            { label: "Restriction", text: "of processing." },
            { label: "Objection", text: "to processing." },
            { label: "Portability", text: "of your data." },
            {
              label: "Withdrawal of consent",
              text: "given, without affecting the lawfulness of prior processing.",
            },
          ],
          outroBefore: "To exercise them, write to us at",
          outroMiddle:
            ". If you believe we have not handled your request properly, you have the right to lodge a complaint with the Spanish Data Protection Agency (",
          outroAfter: ").",
        },
        security: {
          title: "10. Security",
          text: "We apply appropriate technical and organisational measures to protect your data, including encryption of the journal content on your device and the use of secure connections. No system is completely infallible, but we work to maintain a level of security commensurate with the sensitivity of the information processed.",
          emphasis: "encryption of the journal content on your device",
        },
        minors: {
          title: "11. Minors",
          text: "The Service is intended for people over 16 years of age. We do not knowingly collect data from minors under that age. If we become aware that we have processed data of a minor under 16 without the appropriate legal basis, we will delete it.",
          emphasis: "16 years of age",
        },
        cookies: {
          title: "12. Cookies and similar technologies",
          text: "The mindlogs.app website uses only the technical cookies necessary for its operation. Should we incorporate analytics or third-party cookies in the future, we will inform you and, where appropriate, obtain your prior consent.",
        },
        changes: {
          title: "13. Changes to this Policy",
          text: "We may update this Privacy Policy to reflect legal or Service changes. We will publish the current version on this page indicating the date of the last update and, where the changes are substantial, we will notify you by reasonable means.",
        },
        contact: {
          title: "14. Contact",
          textBefore:
            "If you have any questions about this Privacy Policy or about the processing of your data, contact us at",
          textAfter: ".",
        },
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is my journal private?",
          answer:
            "Yes. Your journal content is encrypted on your device. Data is only transmitted when required for features such as account synchronization or AI-powered analysis.",
        },
        {
          question: "Does MindLogs use my journal to train AI models?",
          answer:
            "No. Journal content processed for AI feedback is used only to generate the requested analysis and is not used by MindLogs to train AI models.",
        },
        {
          question: "Who processes payments?",
          answer:
            "All subscription payments are processed through Apple App Store or Google Play. MindLogs does not receive or store your payment card details.",
        },
        {
          question: "Can I delete my data?",
          answer:
            "Yes. You can delete your account and request removal of your personal data at any time by contacting hello@mindlogs.app or through available account settings.",
        },
        // {
        //   question: "Are AI features optional?",
        //   answer:
        //     "Yes. AI-generated feedback and analysis are only provided when you choose to use those features.",
        // },
        {
          question: "Do you sell my personal data?",
          answer: "No. MindLogs does not sell personal data to third parties.",
        },
      ],
    },
  },
  es: {
    contactEmail: "hola@mindlogs.app",
    hero: {
      title: "Tu privacidad,",
      titleHighlight: "nuestra promesa",
      subtitle:
        "Tus pensamientos, emociones y entradas del diario permanecen protegidos y seguros. En MindLogs creemos que la privacidad es fundamental para el bienestar emocional.",
      readPolicy: "Leer la política",
    },
    highlightCards: [
      {
        title: "Seguridad integral",
        description: "Tus datos están cifrados y protegidos",
      },
      {
        title: "Tus datos permanecen privados",
        description: "Nunca compartimos tu información",
      },
      {
        title: "No vendemos datos personales",
        description: "Tu privacidad nunca se comercializa",
      },
      {
        title: "Conversaciones con IA protegidas",
        description: "Todos los análisis de IA permanecen privados",
      },
    ],
    trustQuote:
      "MindLogs está diseñado para ayudarte a reflexionar de forma segura, privada y sin juicios.",
    policy: {
      intro:
        'En MindLogs nos tomamos muy en serio tu privacidad. Esta Política de Privacidad explica qué datos personales tratamos cuando utilizas la aplicación MindLogs y el sitio web mindlogs.app (el "Servicio"), con qué fines, en base a qué legitimación y qué derechos tienes, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
      sections: {
        controller: {
          title: "1. Responsable del tratamiento",
          company: "Evergreen Projects S.L.",
          taxId: "CIF: B67516815",
          address: "Dirección: Avenida Roma 43, 08029 Barcelona, España",
          contact: "Contacto de privacidad:",
        },
        dataWeProcess: {
          title: "2. Datos que tratamos",
          intro:
            "Según cómo utilices el Servicio, podemos tratar las siguientes categorías de datos:",
          items: [
            {
              label: "Datos de cuenta:",
              text: "dirección de correo electrónico y datos de autenticación necesarios para crear y acceder a tu cuenta.",
            },
            {
              label: "Contenido del diario:",
              text: "las emociones, sensaciones, pensamientos, reflexiones y demás información que registras en tus entradas. Esta información puede revelar datos sobre tu estado de ánimo y bienestar emocional (véase la sección 4).",
            },
            {
              label: "Datos de suscripción y pago:",
              text: "información sobre tu plan, estado de la suscripción y compras. Los pagos se procesan a través de App Store o Google Play;",
              emphasis: "no recibimos ni almacenamos los datos de tu tarjeta",
            },
            {
              label: "Datos de uso y técnicos:",
              text: "información sobre el funcionamiento de la aplicación, identificadores del dispositivo, datos de diagnóstico y estadísticas de uso agregadas que nos ayudan a mejorar el Servicio.",
            },
            {
              label: "Comunicaciones:",
              text: "los datos que nos facilitas cuando contactas con soporte.",
            },
          ],
        },
        journalStorage: {
          title: "3. Dónde se almacena tu diario",
          text: "El contenido de tu diario se almacena cifrado en tu dispositivo. Cuando utilizas funciones que requieren conexión —como la sincronización de tu cuenta o los comentarios y análisis de inteligencia artificial—, los datos estrictamente necesarios se transmiten de forma segura a nuestros proveedores para prestar esas funciones (véanse las secciones 5 y 6).",
          emphasis: "cifrado en tu dispositivo",
        },
        specialCategory: {
          title: "4. Datos de categorías especiales",
          text: 'El contenido que registras en MindLogs puede incluir información sensible relativa a tu salud emocional o mental, considerada "categoría especial" de datos según el RGPD. Tratamos esta información sobre la base de tu consentimiento explícito, que otorgas al utilizar el Servicio para registrar tus entradas y, en su caso, al activar las funciones de inteligencia artificial. Puedes retirar tu consentimiento en cualquier momento dejando de utilizar el Servicio y eliminando tus datos.',
          emphasis: "sobre la base de tu consentimiento explícito",
        },
        purposes: {
          title: "5. Finalidades y bases legitimadoras",
          purposeHeader: "Finalidad",
          legalBasisHeader: "Base legitimadora",
          rows: [
            {
              purpose: "Crear y gestionar tu cuenta y prestar el Servicio",
              legalBasis: "Ejecución del contrato (estas Condiciones de uso)",
            },
            {
              purpose: "Registrar y mostrar el contenido de tu diario",
              legalBasis:
                "Consentimiento explícito (datos de categoría especial)",
            },
            {
              purpose:
                "Generar comentarios y análisis de inteligencia artificial",
              legalBasis: "Consentimiento explícito",
            },
            {
              purpose:
                "Gestionar suscripciones, pagos y el programa de referidos",
              legalBasis: "Ejecución del contrato",
            },
            {
              purpose: "Mantener la seguridad y mejorar el Servicio",
              legalBasis: "Interés legítimo",
            },
            {
              purpose: "Atender tus consultas de soporte",
              legalBasis: "Ejecución del contrato / Interés legítimo",
            },
            {
              purpose: "Cumplir obligaciones legales (p. ej. fiscales)",
              legalBasis: "Obligación legal",
            },
          ],
        },
        providers: {
          title: "6. Proveedores y destinatarios",
          intro:
            "No vendemos tus datos personales. Para prestar el Servicio nos apoyamos en proveedores que actúan como encargados del tratamiento, bajo contratos que garantizan la protección de tus datos:",
          items: [
            {
              label: "Supabase:",
              text: "infraestructura de autenticación, gestión de cuentas, suscripciones y referidos.",
            },
            {
              label: "RevenueCat:",
              text: "gestión técnica del estado de las suscripciones.",
            },
            {
              label: "OpenAI:",
              text: "tratamiento del texto necesario para generar comentarios y análisis de inteligencia artificial, cuando activas estas funciones.",
            },
            {
              label: "Apple App Store y Google Play:",
              text: "procesamiento de pagos y suscripciones.",
            },
            {
              label: "Proveedor de alojamiento web:",
              text: "alojamiento del sitio web mindlogs.app.",
            },
          ],
          outro:
            "También podemos comunicar datos a autoridades públicas cuando exista una obligación legal de hacerlo.",
        },
        transfers: {
          title: "7. Transferencias internacionales",
          text: "Algunos de nuestros proveedores pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, nos aseguramos de que la transferencia esté amparada por mecanismos válidos según el RGPD, como decisiones de adecuación de la Comisión Europea o Cláusulas Contractuales Tipo.",
        },
        retention: {
          title: "8. Plazo de conservación",
          text: "Conservamos tus datos mientras mantengas una cuenta activa y utilices el Servicio. Cuando elimines tu cuenta o retires tu consentimiento, suprimiremos o anonimizaremos tus datos, salvo aquellos que debamos conservar para cumplir obligaciones legales o atender posibles responsabilidades, durante los plazos legalmente exigidos.",
        },
        rights: {
          title: "9. Tus derechos",
          intro: "Puedes ejercer los siguientes derechos en cualquier momento:",
          items: [
            { label: "Acceso", text: "a tus datos personales." },
            {
              label: "Rectificación",
              text: "de datos inexactos o incompletos.",
            },
            {
              label: "Supresión",
              text: 'de tus datos ("derecho al olvido").',
            },
            { label: "Limitación", text: "del tratamiento." },
            { label: "Oposición", text: "al tratamiento." },
            { label: "Portabilidad", text: "de tus datos." },
            {
              label: "Retirada del consentimiento",
              text: "otorgado, sin que ello afecte a la licitud del tratamiento previo.",
            },
          ],
          outroBefore: "Para ejercerlos, escríbenos a",
          outroMiddle:
            ". Si consideras que no hemos atendido correctamente tu solicitud, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (",
          outroAfter: ").",
        },
        security: {
          title: "10. Seguridad",
          text: "Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos, incluido el cifrado del contenido del diario en tu dispositivo y el uso de conexiones seguras. Ningún sistema es completamente infalible, pero trabajamos para mantener un nivel de seguridad acorde con la sensibilidad de la información tratada.",
          emphasis: "cifrado del contenido del diario en tu dispositivo",
        },
        minors: {
          title: "11. Menores",
          text: "El Servicio está destinado a personas mayores de 16 años. No recopilamos datos de menores de esa edad de forma consciente. Si tenemos conocimiento de que hemos tratado datos de un menor de 16 años sin la base legal adecuada, los eliminaremos.",
          emphasis: "16 años",
        },
        cookies: {
          title: "12. Cookies y tecnologías similares",
          text: "El sitio web mindlogs.app utiliza únicamente las cookies técnicas necesarias para su funcionamiento. Si incorporamos en el futuro cookies de analítica o de terceros, te informaremos y, en su caso, solicitaremos tu consentimiento previo.",
        },
        changes: {
          title: "13. Cambios en esta Política",
          text: "Podemos actualizar esta Política de Privacidad para reflejar cambios legales o del Servicio. Publicaremos la versión vigente en esta página indicando la fecha de la última actualización y, cuando los cambios sean sustanciales, te notificaremos por medios razonables.",
        },
        contact: {
          title: "14. Contacto",
          textBefore:
            "Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de tus datos, contáctanos en",
          textAfter: ".",
        },
      },
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Mi diario es privado?",
          answer:
            "Sí. El contenido de tu diario está cifrado en tu dispositivo. Los datos solo se transmiten cuando es necesario para funciones como la sincronización de la cuenta o el análisis con IA.",
        },
        {
          question: "¿MindLogs utiliza mi diario para entrenar modelos de IA?",
          answer:
            "No. El contenido del diario procesado para comentarios de IA se utiliza únicamente para generar el análisis solicitado y no se usa por MindLogs para entrenar modelos de IA.",
        },
        {
          question: "¿Quién procesa los pagos?",
          answer:
            "Todos los pagos de suscripción se procesan a través de Apple App Store o Google Play. MindLogs no recibe ni almacena los datos de tu tarjeta de pago.",
        },
        {
          question: "¿Puedo eliminar mis datos?",
          answer:
            "Sí. Puedes eliminar tu cuenta y solicitar la supresión de tus datos personales en cualquier momento contactando con hola@mindlogs.app o a través de la configuración de la cuenta.",
        },
        // {
        //   question: "¿Las funciones de IA son opcionales?",
        //   answer:
        //     "Sí. Los comentarios y análisis generados por IA solo se proporcionan cuando eliges utilizar esas funciones.",
        // },
        {
          question: "¿Venden mis datos personales?",
          answer: "No. MindLogs no vende datos personales a terceros.",
        },
      ],
    },
  },
} as const;

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("mindlogs-lang");
  if (saved === "en" || saved === "es") return saved;
  if (navigator.language.toLowerCase().startsWith("es")) return "es";
  return "en";
}
