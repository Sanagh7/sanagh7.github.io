const makeIcon = (paths) => {
  const Icon = ({ className = "", size, ...props }) => {
    const iconSize = size ?? "1em";
    const style = {
      display: "inline-block",
      flexShrink: 0,
      verticalAlign: "middle",
      ...props.style,
    };

    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        height={iconSize}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={style}
        viewBox="0 0 24 24"
        width={iconSize}
        {...props}
      >
        {paths}
      </svg>
    );
  };

  return Icon;
};

const code = (
  <>
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
  </>
);
const server = (
  <>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01" />
  </>
);
const user = (
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </>
);
const briefcase = (
  <>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5h8v2M3 12h18" />
  </>
);
const calendar = (
  <>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 11h18" />
  </>
);
const graduation = (
  <>
    <path d="M3 8l9-4 9 4-9 4-9-4Z" />
    <path d="M7 11v5c3 2 7 2 10 0v-5" />
  </>
);
const envelope = (
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 7 9-7" />
  </>
);
const phone = (
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5.2 13 19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
);
const mapPin = (
  <>
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
);
const github = (
  <>
    <path d="M9 19c-5 1.5-5-2.5-7-3" />
    <path d="M15 22v-4a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19 3.8 5.4 5.4 0 0 0 18.9 0S17.7-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A5.4 5.4 0 0 0 4 3.8 5.8 5.8 0 0 0 2.2 8c0 5.8 3.5 7 6.8 7.4A3.4 3.4 0 0 0 8 18v4" />
  </>
);
const linkedin = (
  <>
    <rect x="3" y="9" width="4" height="12" />
    <circle cx="5" cy="5" r="2" />
    <path d="M11 21v-7a4 4 0 0 1 8 0v7M11 9h4" />
  </>
);
const check = (
  <path d="M20 6 9 17l-5-5" />
);
const arrowDown = (
  <path d="M12 5v14M5 12l7 7 7-7" />
);
const external = (
  <>
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </>
);
const shield = (
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
);
const database = (
  <>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </>
);
const rocket = (
  <>
    <path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5" />
    <path d="M9 15 4 10l6-2 6-6 6 6-6 6-2 6-5-5Z" />
  </>
);
const quote = (
  <>
    <path d="M8 12H5a4 4 0 0 1 4-4v8" />
    <path d="M19 12h-3a4 4 0 0 1 4-4v8" />
  </>
);
const heart = (
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
);
const simpleCircle = (
  <circle cx="12" cy="12" r="8" />
);

export const BiLogoPostgresql = makeIcon(database);
export const DiRedis = makeIcon(database);
export const DiSass = makeIcon(code);
export const DiTerminal = makeIcon(<path d="m4 7 6 5-6 5M12 19h8" />);
export const FaArrowDown = makeIcon(arrowDown);
export const FaAws = makeIcon(simpleCircle);
export const FaBriefcase = makeIcon(briefcase);
export const FaBuilding = makeIcon(<path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01" />);
export const FaCalendarAlt = makeIcon(calendar);
export const FaCheck = makeIcon(check);
export const FaCheckCircle = makeIcon(<><circle cx="12" cy="12" r="9" />{check}</>);
export const FaClock = makeIcon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const FaCode = makeIcon(code);
export const FaCodeBranch = makeIcon(<><circle cx="6" cy="5" r="2" /><circle cx="18" cy="19" r="2" /><path d="M6 7v6a6 6 0 0 0 6 6h4" /></>);
export const FaDatabase = makeIcon(database);
export const FaDove = makeIcon(<path d="M4 12c5-8 11-8 16-2-4 0-7 2-9 6-2-2-4-3-7-4Z" />);
export const FaDownload = makeIcon(<path d="M12 3v12M7 10l5 5 5-5M5 21h14" />);
export const FaEnvelope = makeIcon(envelope);
export const FaExternalLinkAlt = makeIcon(external);
export const FaFeather = makeIcon(<path d="M20 4C12 4 5 10 4 20c6-1 12-8 16-16ZM4 20l8-8" />);
export const FaFileAlt = makeIcon(<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M8 13h8M8 17h6" />);
export const FaGitAlt = makeIcon(<path d="M15 12 9 6M9 18l6-6M9 6v12" />);
export const FaGithub = makeIcon(github);
export const FaGraduationCap = makeIcon(graduation);
export const FaHeart = makeIcon(heart);
export const FaJenkins = makeIcon(user);
export const FaLightbulb = makeIcon(<><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12c1 1 1 2 1 4h6c0-2 0-3 1-4a7 7 0 0 0-4-12Z" /></>);
export const FaLinkedin = makeIcon(linkedin);
export const FaMapMarkerAlt = makeIcon(mapPin);
export const FaNodeJs = makeIcon(server);
export const FaPaperPlane = makeIcon(<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />);
export const FaPaw = makeIcon(<><circle cx="5" cy="10" r="2" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="6" r="2" /><circle cx="19" cy="10" r="2" /><path d="M8 17c0-3 8-3 8 0 0 2-2 3-4 3s-4-1-4-3Z" /></>);
export const FaProjectDiagram = makeIcon(<><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" /><path d="M8.5 8.5 11 15M15.5 8.5 13 15" /></>);
export const FaQuoteLeft = makeIcon(quote);
export const FaRegCopyright = makeIcon(<><circle cx="12" cy="12" r="9" /><path d="M15 9a4 4 0 1 0 0 6" /></>);
export const FaRocket = makeIcon(rocket);
export const FaServer = makeIcon(server);
export const FaShieldAlt = makeIcon(shield);
export const FaUniversity = makeIcon(<><path d="M3 10h18L12 3 3 10Z" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" /></>);
export const FaUserGraduate = makeIcon(graduation);
export const FaUsers = makeIcon(<><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 21a6 6 0 0 1 12 0M14 21a4 4 0 0 1 7 0" /></>);
export const MdEmail = makeIcon(envelope);
export const MdLocationOn = makeIcon(mapPin);
export const MdPhone = makeIcon(phone);
export const RiReactjsLine = makeIcon(<><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="9" ry="4" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" /></>);
export const RiTerminalLine = makeIcon(<path d="m4 7 6 5-6 5M12 19h8" />);
export const SiDocker = makeIcon(<><path d="M3 13h18c-.5 5-4 8-9 8s-8.5-3-9-8Z" /><path d="M6 10h3v3H6zM10 10h3v3h-3zM14 10h3v3h-3zM10 6h3v3h-3z" /></>);
export const SiExpress = makeIcon(server);
export const SiGithubactions = makeIcon(<path d="M12 3v6l4-4M12 9 8 5M5 14h14M7 21h10" />);
export const SiGraphql = makeIcon(<><path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z" /><path d="M4 8l8 5 8-5M12 13v8" /></>);
export const SiJest = makeIcon(<path d="M8 3h8l-1 8a5 5 0 1 1-6 0L8 3Z" />);
export const SiKubernetes = makeIcon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v10M7 12h10M8.5 8.5l7 7M15.5 8.5l-7 7" /></>);
export const SiLinux = makeIcon(user);
export const SiMongodb = makeIcon(<path d="M12 22s6-5 6-12c0-5-6-8-6-8s-6 3-6 8c0 7 6 12 6 12ZM12 22v-9" />);
export const SiPrisma = makeIcon(<path d="M5 20 13 3l6 18-14-1Z" />);
export const SiRedux = makeIcon(<><circle cx="7" cy="12" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="17" cy="17" r="3" /><path d="M10 11 14 8M10 13l4 3" /></>);
export const SiTerraform = makeIcon(<><path d="M4 4v6l5 3V7L4 4ZM10 7v6l5 3v-6l-5-3ZM16 10v6l5-3V7l-5 3Z" /></>);
export const TbBrandNextjs = makeIcon(<><circle cx="12" cy="12" r="9" /><path d="M9 16V8l6 8V8" /></>);
export const TbBrandTailwind = makeIcon(<path d="M4 13c2-4 5-5 8-3 2 1 3 1 5-1 1-1 2-1 3-1-2 4-5 5-8 3-2-1-3-1-5 1-1 1-2 1-3 1ZM4 19c2-4 5-5 8-3 2 1 3 1 5-1 1-1 2-1 3-1-2 4-5 5-8 3-2-1-3-1-5 1-1 1-2 1-3 1Z" />);
export const TbBrandTypescript = makeIcon(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 8h7M10.5 8v9M15 16c1.5 1 4 1 4-1 0-3-4-1-4-4 0-2 2.5-2 4-1" /></>);
