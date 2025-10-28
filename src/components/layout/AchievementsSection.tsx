
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { SectionTitle } from "../shared/section-title";
import { TimelineIcon, FdaSubmissionIcon, LightbulbIcon, EfficiencyIcon } from "../icons/achievements-icons";
import { useEffect, useState } from "react";

const achievements = [
  {
    icon: TimelineIcon,
    value: 15,
    unit: "%",
    label: "Reduction in Study Timelines",
  },
  {
    icon: FdaSubmissionIcon,
    value: 80,
    unit: "%",
    label: "FDA Submissions",
  },
  {
    icon: LightbulbIcon,
    value: 30,
    unit: "%",
    label: "Savings in IT Solutions",
  },
  {
    icon: EfficiencyIcon,
    value: 25,
    unit: "%",
    label: "Resource Efficiency Gain",
  },
];

const AnimatedCounter = ({ to }: { to: number }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        let frame: number;
        const animate = (timestamp: number) => {
            if (count < to) {
                setCount(prevCount => {
                    const nextCount = Math.min(to, prevCount + (to / 60)); // Animate over ~1 second
                    return nextCount;
                });
                frame = requestAnimationFrame(animate);
            }
        }
        frame = requestAnimationFrame(animate);
  
        return () => cancelAnimationFrame(frame);
    }, [to, count]);
  
    return <span>{Math.round(count)}</span>;
};

export function AchievementsSection() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  return (
    <section className="bg-background">
      <div className="container">
        <SectionTitle
          title="Our Achievements"
          className="mb-16"
        />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative flex-shrink-0">
                <item.icon className="h-20 w-20 text-primary" />
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground">
                  <AnimatedCounter to={item.value} />
                  {item.unit}
                </p>
                <p className="text-muted-foreground mt-1">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
