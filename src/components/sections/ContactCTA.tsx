"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  CheckIcon,
  ClockIcon,
} from "@/components/icons";
import { trackFormSubmit } from "@/lib/analytics";

const SUBJECTS = [
  "Nettoyage de vitres",
  "Fin de chantier ou état des lieux",
  "Nettoyage de copropriété",
  "Nettoyage de textiles",
  "Anti humidité, moisissures",
  "Débarras",
  "Espaces verts",
  "Petite maçonnerie",
  "Autre",
];

const EMAILJS = {
  service: "service_mr8ajr9",
  template: "template_i5vrlmk",
  publicKey: "TUrKvRZ5xOdZdBpxm",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const form = e.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
      const result = await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone || "",
          subject: data.subject,
          message: data.message,
        },
        EMAILJS.publicKey,
      );
      if (result.status === 200) {
        setStatus("success");
        trackFormSubmit("contact_cta");
        form.reset();
      } else {
        throw new Error(`EmailJS status ${result.status}`);
      }
    } catch (err) {
      console.error("Contact submit failed:", err);
      setStatus("error");
      setErrorMsg(
        "Impossible d'envoyer votre message. Merci de nous appeler directement.",
      );
    }
  }

  return (
    <section id="contact" className="bg-cream py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
            Contactez-nous
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-brown sm:text-4xl md:text-[52px] lg:text-[60px]">
            {"Parlons de votre projet "}
            <br />
            de propreté
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-brown/75 md:text-lg">
            Réponse sous 24 h ouvrées. Pour un besoin urgent (dégât des eaux,
            sinistre, fin de bail), appelez-nous directement.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-4">
            <a
              href="tel:+33684665523"
              className="block rounded-3xl bg-brown p-7 text-cream transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange text-cream">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                    Appel direct
                  </p>
                  <p className="font-display text-2xl font-bold tracking-tight">
                    06 84 66 55 23
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-cream/80">
                Disponible 7 j/7. Réponse immédiate aux heures ouvrées.
              </p>
            </a>

            <div className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/5">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="font-display font-bold text-brown">E-mail</p>
                    <a href="mailto:contact@ghservices.fr" className="text-brown/80 hover:text-orange">
                      contact@ghservices.fr
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="font-display font-bold text-brown">Adresse</p>
                    <p className="text-brown/80">
                      5 avenue des Prés Verts,
                      <br />
                      74200 Thonon-les-Bains
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="font-display font-bold text-brown">Horaires</p>
                    <p className="text-brown/80">
                      Lun. à Sam. : 7 h , 19 h
                      <br />
                      Urgences : 7 j/7
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-orange/10 p-7 ring-1 ring-orange/20">
              <p className="font-display text-base font-bold text-brown">
                Urgence (sinistre, dégât des eaux)
              </p>
              <p className="mt-2 text-sm text-brown/75">
                Notre équipe intervient en moins de 24 h pour les situations
                critiques. N&apos;hésitez pas à appeler, nous décrochons.
              </p>
            </div>

            <div className="rounded-2xl border border-brown/15 bg-cream-soft px-5 py-4 text-xs leading-relaxed text-brown/75">
              <span aria-hidden>⚠️ </span>
              <strong>Aucun recrutement en cours.</strong> Merci de ne pas
              téléphoner ni envoyer d&apos;e-mail pour une candidature, les
              demandes spontanées ne sont pas traitées.
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/5 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Prénom" name="firstName" required />
              <Field label="Nom" name="lastName" required />
              <Field label="E-mail" name="email" type="email" required className="sm:col-span-2" />
              <Field label="Téléphone" name="phone" type="tel" />
              <Field
                label="Service souhaité"
                name="subject"
                type="select"
                options={SUBJECTS}
                required
              />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block font-display text-sm font-bold text-brown">
                  Détaillez votre besoin <span className="text-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  className="mt-2 w-full rounded-xl border border-brown/15 bg-cream px-4 py-3 text-sm text-brown transition-all focus:border-orange focus:bg-cream focus:outline-none focus:ring-4 focus:ring-orange/15"
                />
              </div>
              <label className="flex items-start gap-3 text-sm text-brown/80 sm:col-span-2">
                <input
                  type="checkbox"
                  name="gdpr"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-brown/20 text-orange focus:ring-orange"
                />
                <span>
                  J&apos;accepte que mes données soient collectées pour répondre
                  à ma demande, conformément à la{" "}
                  <a href="/politique-de-confidentialite" className="font-semibold text-orange hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-7 inline-flex items-center rounded-full bg-orange px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_30px_-12px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.02] hover:bg-orange-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>

            {status === "success" && (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-orange">
                <CheckIcon className="h-4 w-4" />
                Merci. Nous revenons vers vous sous 24 h.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                {errorMsg || "Une erreur est survenue."} Appelez-nous au 06 84 66 55 23.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "select";
  options?: string[];
  required?: boolean;
  className?: string;
};

function Field({ label, name, type = "text", options, required, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block font-display text-sm font-bold text-brown">
        {label} {required && <span className="text-orange">*</span>}
      </label>
      {type === "select" && options ? (
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-brown/15 bg-cream px-4 py-3 text-sm text-brown transition-all focus:border-orange focus:bg-cream focus:outline-none focus:ring-4 focus:ring-orange/15"
        >
          <option value="" disabled>
            Sélectionnez un service
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="mt-2 w-full rounded-xl border border-brown/15 bg-cream px-4 py-3 text-sm text-brown transition-all focus:border-orange focus:bg-cream focus:outline-none focus:ring-4 focus:ring-orange/15"
        />
      )}
    </div>
  );
}
