import { SolutionItem } from '../types';

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'infraestructura-nube',
    title: 'Infraestructura & Nube',
    shortDesc: 'Migración, servidores, respaldo y arquitectura cloud altamente disponible.',
    fullDesc: 'Diseñamos e implementamos ecosistemas de computación en la nube optimizados para alta concurrencia, resiliencia ante desastres y máxima eficiencia de costos.',
    iconName: 'cloud',
    features: [
      'Migración de infraestructura on-premise a AWS, Azure y Google Cloud',
      'Arquitecturas de Alta Disponibilidad (HA) y Recuperación ante Desastres (DR)',
      'Gestión y monitoreo de servidores Linux/Windows con automatización Ansible/Terraform',
      'Copias de seguridad automatizadas con cifrado de grado militar y retención programada',
      'Optimización de costos cloud (FinOps) con reducciones promedio del 30%'
    ],
    sla: '99.95% de disponibilidad garantizada',
    techStack: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    startingPrice: 'Desde $450.000 CLP/mes'
  },
  {
    id: 'soporte-tecnico',
    title: 'Soporte Técnico 24/7',
    shortDesc: 'Mantenimiento preventivo, asistencia remota y resolución rápida de incidentes.',
    fullDesc: 'Mesa de ayuda y soporte técnico ininterrumpido 24 horas al día, 7 días a la semana, para mantener la productividad continua de tu equipo y sistemas operativos.',
    iconName: 'support',
    features: [
      'Help Desk multi-canal (tickets, chat directo, teléfono de guardia)',
      'Tiempo de primera respuesta < 15 minutos para incidentes críticos',
      'Mantenimiento preventivo mensual y parches de seguridad de estaciones de trabajo',
      'Gestión de inventario de hardware, licencias y garantías corporativas',
      'Soporte presencial programado o de emergencia para infraestructura crítica'
    ],
    sla: 'Respuesta < 15 min en incidentes críticos',
    techStack: ['Jira Service Management', 'Zendesk', 'AnyDesk Enterprise', 'TeamViewer', 'Datadog'],
    startingPrice: 'Desde $350.000 CLP/mes'
  },
  {
    id: 'ciberseguridad',
    title: 'Ciberseguridad Empresarial',
    shortDesc: 'Auditorías, implementación de antivirus corporativos, firewall y protección de datos.',
    fullDesc: 'Estrategia integral de ciberdefensa basada en el marco NIST e ISO 27001 para resguardar tus activos digitales contra ransomware, phishing y fugas de datos.',
    iconName: 'shield',
    features: [
      'Auditorías de vulnerabilidades y pruebas de penetración (Pen-testing)',
      'Implementación de Firewalls de Próxima Generación (NGFW) y políticas Zero-Trust',
      'EDR/XDR y Antivirus corporativo centralizado con IA contra amenazas Zero-Day',
      'Capacitación y simulacros de phishing anti-ingeniería social para colaboradores',
      'Cumplimiento normativo y planes de continuidad de negocio (BCP)'
    ],
    sla: 'Monitoreo SOC 24/7 con detección proactiva',
    techStack: ['Fortinet', 'CrowdStrike', 'Sophos', 'Cloudflare', 'SentinelOne', 'Palo Alto'],
    startingPrice: 'Desde $500.000 CLP/mes'
  },
  {
    id: 'desarrollo-software',
    title: 'Desarrollo Web & Software',
    shortDesc: 'Sitios corporativos optimizados, plataformas a medida e integraciones API.',
    fullDesc: 'Construimos aplicaciones web, portales corporativos y sistemas de gestión empresarial escalables, modernos y con rendimiento excepcional.',
    iconName: 'code',
    features: [
      'Desarrollo de portales web corporativos optimizados para SEO y conversión',
      'Sistemas a medida (ERP, CRM, Dashboards de métricas empresariales)',
      'Integración fluida de APIs de pago, facturación electrónica y servicios cloud',
      'Desarrollo Frontend React/Next.js y Backend Node.js / Python robusto',
      'Pruebas automatizadas (CI/CD) y despliegues sin interrupciones'
    ],
    sla: 'Garantía de código y soporte evolutivo post-lanzamiento',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    startingPrice: 'Cotización por proyecto o sprint'
  },
  {
    id: 'redes-cableado',
    title: 'Redes & Cableado Estructurado',
    shortDesc: 'Instalación certificada, optimización de Wi-Fi empresarial y monitoreo de red.',
    fullDesc: 'Infraestructura física y lógica de telecomunicaciones certificada Cat 6A / Fibra Óptica y redes Wi-Fi de alta densidad para entornos de oficina e industriales.',
    iconName: 'router',
    features: [
      'Cableado estructurado certificado con reporte Fluke Networks',
      'Redes Wi-Fi empresariales con roaming transparente y portal cautivo',
      'Segmentación de redes por VLANs y priorización de tráfico (QoS para VoIP)',
      'Instalación de racks de servidores, switches gestionables y sistemas UPS',
      'Monitoreo en tiempo real de ancho de banda y latencia'
    ],
    sla: 'Certificación física por hasta 15-25 años',
    techStack: ['Ubiquiti UniFi', 'Cisco Meraki', 'MikroTik', 'Panduit', 'CommScope'],
    startingPrice: 'Desde $350.000 CLP por proyecto'
  },
  {
    id: 'consultoria-tecnologica',
    title: 'Consultoría Tecnológica',
    shortDesc: 'Asesoría estratégica para alineación tecnológica, reducción de costos y transformación.',
    fullDesc: 'Acompañamos a directores y gerentes en la toma de decisiones tecnológicas estratégicas, optimización del presupuesto de TI y hojas de ruta de transformación digital.',
    iconName: 'lightbulb',
    features: [
      'Diagnóstico y auditoría del estado actual de la infraestructura TI (As-Is)',
      'Diseño del Blueprint Tecnológico objetivo (To-Be) y Roadmap de adopción',
      'Evaluación y selección de proveedores de software y servicios tecnológicos',
      'Servicio de vCIO (Chief Information Officer virtual) para comités directivos',
      'Estrategias de adopción de Inteligencia Artificial aplicada a operaciones'
    ],
    sla: 'Entregables ejecutivos y sesiones estratégicas directivas',
    techStack: ['TOGAF', 'ITIL v4', 'COBIT', 'Lean IT', 'Agile Architecture'],
    startingPrice: 'Planes mensuales o paquetes por consultoría'
  }
];

export const METRICS_DATA = [
  { value: '+10', label: 'AÑOS DE EXPERIENCIA', highlight: false },
  { value: '99.9%', label: 'UPTIME', highlight: false },
  { value: '24/7', label: 'SOPORTE ACTIVO', highlight: true },
  { value: '+200', label: 'CLIENTES SATISFECHOS', highlight: false }
];
