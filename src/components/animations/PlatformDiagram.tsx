'use client';

import { motion } from 'framer-motion';
import {
  Gem, Repeat, ClipboardList, Database, TrendingUp, TestTube
} from 'lucide-react';

const modules = [
  { icon: Repeat, title: 'IRT / IWRS', color: 'from-blue-500 to-blue-600' },
  { icon: ClipboardList, title: 'CTM', color: 'from-green-500 to-green-600' },
  { icon: Database, title: 'EDC', color: 'from-purple-500 to-purple-600' },
  { icon: TrendingUp, title: 'Trial Analytics', color: 'from-orange-500 to-orange-600' },
  { icon: TestTube, title: 'Sample Management', color: 'from-pink-500 to-pink-600' },
];

export function PlatformDiagram() {
  return (
    <div className="relative py-20 flex flex-col items-center">

      {/* CENTER PLATFORM */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white rounded-2xl px-8 py-6 shadow-xl text-center"
      >
        <Gem className="mx-auto mb-3 text-blue-600" size={40} />
        <h2 className="text-xl font-bold">SyMetric Clinical Platform</h2>
        <p className="text-sm text-gray-500 mt-1">
          Unified. Intelligent. Compliant.
        </p>
      </motion.div>

      {/* CONNECTOR LINE */}
      <div className="w-full max-w-5xl mt-16 relative">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
        />

        {/* MODULES */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">

          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Vertical Line */}
              <div className="w-[2px] h-6 bg-gray-300 mb-3"></div>

              {/* Card */}
              <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-xl transition">

                <div className={`bg-gradient-to-r ${m.color} p-3 rounded-full w-fit mx-auto mb-3`}>
                  <m.icon className="text-white" size={20} />
                </div>

                <h3 className="text-sm font-semibold">{m.title}</h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}
