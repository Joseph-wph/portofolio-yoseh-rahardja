"use client";

import { Separator } from "@/components/ui/separator";
import { motion, type Variants } from "framer-motion";

const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AsFrontend = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 font-heading">
      <div className="my-5">
        <h1 className="text-center font-medium text-[28px] leading-relaxed">
          As frontend developers, we bring designs to life with{" "}
          <span className="text-primary-200">clean</span>,{" "}
          <span className="text-primary-200">responsive code</span> that blends
          creativity 🎨 with usability 🌟.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
        {/* ===== CARD 1 ===== */}
        <div className="flex flex-col gap-3">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center"
          >
            <span className="text-3xl">⚙️</span>
          </motion.div>

          <motion.h1
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-bold text-[18px]"
          >
            COMPONENT-BASED DEVELOPMENT
          </motion.h1>

          <motion.p
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[16px] leading-10"
          >
            Reusable, scalable code built with modern frameworks like React or
            Vue.
          </motion.p>
        </div>

        <Separator orientation="horizontal" className="lg:hidden" />
        <Separator
          orientation="vertical"
          className="hidden lg:block w-px bg-slate-300 self-stretch"
        />

        {/* ===== CARD 2 ===== */}
        <div className="flex flex-col gap-3">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center"
          >
            <span className="text-3xl">🎨</span>
          </motion.div>

          <motion.h1
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-bold text-[18px]"
          >
            PIXEL-PERFECT UI IMPLEMENTATION
          </motion.h1>

          <motion.p
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[16px] leading-10"
          >
            Translating design into high-fidelity user interfaces with attention
            to detail.
          </motion.p>
        </div>

        <Separator orientation="horizontal" className="lg:hidden" />
        <Separator
          orientation="vertical"
          className="hidden lg:block w-px bg-slate-300 self-stretch"
        />

        {/* ===== CARD 3 ===== */}
        <div className="flex flex-col gap-3">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center"
          >
            <span className="text-3xl">📱</span>
          </motion.div>

          <motion.h1
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-bold text-[18px]"
          >
            RESPONSIVE & ACCESSIBLE DESIGN
          </motion.h1>

          <motion.p
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[16px] leading-10"
          >
            Optimized layouts that work seamlessly across all screen sizes and
            devices.
          </motion.p>
        </div>

        <Separator orientation="horizontal" className="lg:hidden" />
      </div>
    </div>
  );
};

export default AsFrontend;
