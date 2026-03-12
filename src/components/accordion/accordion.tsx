"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "technologies",
    trigger: "What technologies do you work with?",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    value: "remote",
    trigger: "Do you work on freelance or remote projects?",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
  },
  {
    value: "figma",
    trigger: "Can you convert Figma or Sketch designs into code?",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
  {
    value: "backend",
    trigger: "Do you collaborate with backend developers or teams?",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
  {
    value: "fulltime",
    trigger: "Are you available for full-time roles?",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
];

export function AccordionSection() {
  return (
    <Accordion
      type="multiple"
      className="max-w-full lg:w-300 min-h-125 font-heading"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.value} value={item.value} className="p-5">
          <AccordionTrigger className="font-bold text-[16px] lg:text-[22px]">
            <div className="flex items-start gap-4 text-left">
              <span className="text-black shrink-0 w-8">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{item.trigger}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pl-12 text-gray-600">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionSection;