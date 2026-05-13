"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon } from "@/components/icons";
import { FAQ_ITEMS } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-24">
      <div className="mx-auto max-w-[960px] px-6 lg:px-12">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
            Questions fréquentes
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[56px] md:leading-[1.05]">
            Tout ce que vous voulez savoir
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-brown/75 md:text-lg">
            Tarifs, délais, zones, paiement : nos clients posent souvent les
            mêmes questions. Si la vôtre n'est pas dans la liste, appelez-nous.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="overflow-hidden rounded-2xl bg-cream-soft ring-1 ring-black/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold uppercase tracking-tight text-brown md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange text-cream transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-7 text-brown/85 md:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
