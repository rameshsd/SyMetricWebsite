"use client";

import React, { FC } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Archive, ClipboardList, Container, Handshake, LayoutGrid, Mail, TestTube, FileText, Package } from 'lucide-react';

const icons = {
  ctms: (props: any) => <LayoutGrid {...props} />,
  cdms: (props: any) => <Container {...props} />,
  portal: (props: any) => <Mail {...props} />,
  scms: (props: any) => <Package {...props} />,
  irt: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24z" fill="#FFB340" />
        <path d="M24.5 32a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.5 32v-5.5a3 3 0 00-3-3h-1.5M28.25 21a3 3 0 00-3-3h-1.5m3 3h-1.5a3 3 0 00-3 3v1.5m10.25-6v-1.5a3 3 0 00-3-3H28m-7 14.5h-1.5a3 3 0 01-3-3v-1.5m15 3h1.5a3 3 0 003-3v-1.5" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  edc: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 10H2V2h12v8zM10 14H2v8h8v-8zM22 2H12v4h10V2zM12 8h10v4H12V8zM12 14h10v4H12v-4zM12 20h10v2H12v-2z" fill="currentColor"/>
    </svg>
  ),
  delivery: (props: any) => <Archive {...props} />,
  econsent: (props: any) => <Handshake {...props} />,
  ecoa: (props: any) => <ClipboardList {...props} />,
};

interface NodeProps {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof icons;
  colorClass: string;
  position: { top: string; left: string };
  delay: number;
}

const Node: FC<NodeProps> = ({ id, title, subtitle, icon, colorClass, position, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5, delay } });
    }
  }, [inView, controls, delay]);

  const IconComponent = icons[icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className="absolute flex flex-col items-center text-center"
      style={{ top: position.top, left: position.left, transform: 'translate(-50%, -50%)', width: 140 }}
    >
      <div className={cn("w-20 h-20 rounded-lg flex items-center justify-center text-white mb-2 shadow-lg", colorClass)}>
        <IconComponent className="w-10 h-10" />
      </div>
      <h3 className="text-xs font-bold text-gray-700">{title}</h3>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </motion.div>
  );
};

interface LineProps {
  path: string;
  colorClass: string;
  label?: string;
  labelPos: { x: number; y: number };
  particleDur: number;
  delay: number;
}

const Line: FC<LineProps> = ({ path, colorClass, label, labelPos, particleDur, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ pathLength: 1, transition: { duration: 1, delay: delay + 0.5 } });
    }
  }, [inView, controls, delay]);

  const pathId = React.useId();

  return (
    <>
      <motion.path
        d={path}
        initial={{ pathLength: 0 }}
        animate={controls}
        className={cn("stroke-[2]", colorClass)}
        markerEnd={`url(#arrow-${colorClass})`}
      />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 1 }}>
        <circle r="3" className={cn("fill-current", colorClass)}>
          <animateMotion dur={`${particleDur}s`} repeatCount="indefinite" rotate="auto">
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      </motion.g>
      {label && (
         <motion.foreignObject
            x={labelPos.x - 75}
            y={labelPos.y - 15}
            width="150"
            height="30"
            initial={{ opacity: 0, y: labelPos.y + 10 }}
            animate={{ opacity: 1, y: labelPos.y - 15, transition: { delay: delay + 1 } }}
         >
          <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-center text-[10px] text-gray-600 shadow-sm">{label}</div>
         </motion.foreignObject>
      )}
      <path d={path} id={pathId} fill="none" stroke="none" />
    </>
  );
};


export const IrtAnimation: FC = () => {
  const nodes: NodeProps[] = [
    { id: 'ctms', title: 'Clinical trial management system (CTMS)', subtitle: 'Pharmacy operations module', icon: 'ctms', colorClass: 'bg-green-500', position: { top: '10%', left: '20%' }, delay: 0.1 },
    { id: 'cdms', title: 'Clinical data management system (CDMS)', subtitle: '', icon: 'cdms', colorClass: 'bg-blue-500', position: { top: '15%', left: '50%' }, delay: 0.2 },
    { id: 'portal', title: 'Trial participant portal', subtitle: '', icon: 'portal', colorClass: 'bg-blue-500', position: { top: '10%', left: '80%' }, delay: 0.3 },
    { id: 'scms', title: 'Supply chain management software (SCMS)', subtitle: '', icon: 'scms', colorClass: 'bg-blue-500', position: { top: '45%', left: '15%' }, delay: 0.4 },
    { id: 'irt', title: 'Interactive response technology (IRT)', subtitle: '', icon: 'irt', colorClass: 'bg-transparent', position: { top: '50%', left: '50%' }, delay: 0 },
    { id: 'edc', title: 'Electronic data capture (EDC) system', subtitle: '', icon: 'edc', colorClass: 'bg-blue-500', position: { top: '45%', left: '85%' }, delay: 0.5 },
    { id: 'delivery', title: 'Delivery service providers\' systems', subtitle: '', icon: 'delivery', colorClass: 'bg-red-500', position: { top: '80%', left: '25%' }, delay: 0.6 },
    { id: 'econsent', title: 'eConsent solution', subtitle: '', icon: 'econsent', colorClass: 'bg-blue-500', position: { top: '85%', left: '50%' }, delay: 0.7 },
    { id: 'ecoa', title: 'eCOA software', subtitle: '', icon: 'ecoa', colorClass: 'bg-green-500', position: { top: '80%', left: '75%' }, delay: 0.8 },
  ];

  const lines = [
    { from: 'ctms', to: 'irt', color: 'text-yellow-500', label: 'Kit dispensing lists', labelPos: {x: 230, y: 190}, particleDur: 5, path: 'M 140,105 C 160,180 200,210 250,225' },
    { from: 'irt', to: 'ctms', color: 'text-green-500', label: 'Data on the amounts of dispensed and returned medication', labelPos: {x: 230, y: 150}, particleDur: 6, path: 'M 255,220 C 220,180 180,150 140,115' },
    { from: 'cdms', to: 'irt', color: 'text-yellow-500', label: 'Blinded data on treatment assignments', labelPos: {x: 350, y: 150}, particleDur: 4, path: 'M 350,110 C 330,150 290,200 265,220' },
    { from: 'irt', to: 'edc', color: 'text-yellow-500', label: 'Randomization and treatment allocation data', labelPos: {x: 470, y: 200}, particleDur: 7, path: 'M 300,240 C 400,240 500,210 545,195' },
    { from: 'edc', to: 'irt', color: 'text-blue-500', label: 'Screening results, data on completed visits and medication assignments', labelPos: {x: 450, y: 250}, particleDur: 8, path: 'M 545,205 C 500,270 400,280 300,260' },
    { from: 'portal', to: 'irt', color: 'text-yellow-500', label: 'IP delivery status updates', labelPos: {x: 470, y: 130}, particleDur: 5, path: 'M 510,85 C 450,150 350,200 280,225' },
    { from: 'scms', to: 'irt', color: 'text-blue-500', label: 'IP stock and cost data', labelPos: {x: 200, y: 260}, particleDur: 5, path: 'M 110,210 C 150,230 200,240 250,245' },
    { from: 'irt', to: 'scms', color: 'text-yellow-500', label: 'Supply shipment schedules', labelPos: {x: 200, y: 290}, particleDur: 6, path: 'M 250,255 C 200,260 150,270 110,220' },
    { from: 'scms', to: 'delivery', color: 'text-red-500', label: 'IP shipment orders', labelPos: {x: 130, y: 340}, particleDur: 4, path: 'M 100,230 C 100,300 150,330 170,350' },
    { from: 'delivery', to: 'scms', color: 'text-red-500', label: 'Shipment status updates', labelPos: {x: 130, y: 370}, particleDur: 4, path: 'M 175,360 C 150,300 110,280 100,240' },
    { from: 'econsent', to: 'irt', color: 'text-blue-500', label: 'Data on patient recruitment and enrollment', labelPos: {x: 350, y: 350}, particleDur: 6, path: 'M 350,370 C 350,320 300,280 275,260' },
    { from: 'irt', to: 'ecoa', color: 'text-green-500', label: 'Medication intake logs', labelPos: {x: 430, y: 320}, particleDur: 7, path: 'M 290,270 C 350,300 450,320 480,340' },
    { from: 'ecoa', to: 'irt', color: 'text-yellow-500', label: 'Diary updates', labelPos: {x: 430, y: 290}, particleDur: 6, path: 'M 480,350 C 450,290 350,280 290,260' },
  ];

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="w-full h-[500px] relative scale-75 md:scale-100">
      {inView && (
        <>
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 600 450">
            <defs>
              <marker id="arrow-text-green-500" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-green-500" /></marker>
              <marker id="arrow-text-blue-500" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-500" /></marker>
              <marker id="arrow-text-yellow-500" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-yellow-500" /></marker>
              <marker id="arrow-text-red-500" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-red-500" /></marker>
            </defs>
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1, delay: 0.5 }}>
              <path d="M-100,250 Q300,50 700,250 T 1500,250" stroke="#dbeafe" fill="none" strokeWidth="120" strokeDasharray="20 20" className="animate-wave"/>
              <path d="M-100,250 Q300,450 700,250 T 1500,250" stroke="#dbeafe" fill="none" strokeWidth="120" strokeDasharray="20 20" className="animate-wave-reverse"/>
            </motion.g>
            <g>
              {lines.map((line, i) => (
                <Line
                  key={i}
                  path={line.path}
                  colorClass={line.color}
                  label={line.label}
                  labelPos={line.labelPos}
                  particleDur={line.particleDur}
                  delay={i * 0.1}
                />
              ))}
            </g>
          </svg>
          {nodes.map(node => <Node key={node.id} {...node} />)}
        </>
      )}
    </div>
  );
};
