import { Link } from "react-router-dom";

/* Icones */
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
  User,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import "./SkillTree.css";

type Position =
  | "top"
  | "top-right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "top-left";

type TreeNode = {
  label: string;
  to: string;
  Icon: LucideIcon;
  tag: string;
  pos: Position;
};

const nodes: TreeNode[] = [
  {
    label: "Sobre mim",
    to: "/AboutMe",
    Icon: User,
    tag: "AR7F1 01A1T1",
    pos: "top",
  },
  {
    label: "Experiência",
    to: "/experiencia",
    Icon: Briefcase,
    tag: "AR7F1 02A1T1",
    pos: "top-right",
  },
  {
    label: "Projetos",
    to: "/projetos",
    Icon: FolderGit2,
    tag: "AR7F1 03A1T1",
    pos: "bottom-right",
  },
  {
    label: "Certificados e Cursos",
    to: "/certificados",
    Icon: GraduationCap,
    tag: "AR7F1 04A1T1",
    pos: "bottom",
  },
  {
    label: "Ferramentas",
    to: "/ferramentas",
    Icon: Wrench,
    tag: "AR7F1 05A1T1",
    pos: "bottom-left",
  },
  {
    label: "Contato",
    to: "/contato",
    Icon: Mail,
    tag: "AR7F1 06A1T1",
    pos: "top-left",
  },
];

export default function SkillTree() {
  return (
    <section className="skill-tree-section">
      <nav className="skill-tree" aria-label="Seções do portfólio">
        <svg className="tree-bg" viewBox="0 0 845 849" aria-hidden="true">
          <defs>
            <g id="tree-traces-left">
              <path d="M285 332 L335 382 L380 382" />
              <path d="M299 332 L349 382" />
              <path d="M313 332 L350 369" />
              <path d="M285 515 L335 465 L380 465" />
              <path d="M299 515 L349 465" />
              <path d="M313 515 L350 478" />
            </g>
          </defs>

          <g className="tree-traces">
            <use href="#tree-traces-left" />
            <use
              href="#tree-traces-left"
              transform="translate(844 0) scale(-1 1)"
            />
            {[396, 409, 422, 435, 448].map((x) => (
              <g key={x}>
                <path d={`M${x} 222 V322`} />
                <path d={`M${x} 548 V628`} />
              </g>
            ))}
          </g>

          <polygon
            className="tree-core-half"
            points="418,326 278,433 418,540"
          />
          <polygon
            className="tree-core-half"
            points="426,326 566,433 426,540"
          />
        </svg>

        {nodes.map(({ label, to, Icon, tag, pos }) => (
          <Link key={to} to={to} className={`tree-node tree-node--${pos}`}>
            <span className="tree-node-tag" aria-hidden="true">
              {tag}
            </span>
            <span className="tree-node-title">{label}</span>
            <Icon
              className="tree-node-icon"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Link>
        ))}

        <span className="tree-core-tag tree-core-tag--top">PORTFÓLIO</span>
        <span className="tree-core-tag tree-core-tag--bottom">JOÃO PAULO</span>
      </nav>
    </section>
  );
}
