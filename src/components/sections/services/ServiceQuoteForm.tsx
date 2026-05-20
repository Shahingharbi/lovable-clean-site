"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckIcon } from "@/components/icons";
import { trackFormSubmit } from "@/lib/analytics";

const EMAILJS = {
  service: "service_mr8ajr9",
  template: "template_i5vrlmk",
  publicKey: "TUrKvRZ5xOdZdBpxm",
};

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  serviceLabel: string;
  source: string;
};

export function ServiceQuoteForm({ serviceLabel, source }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const form = e.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries()) as Record<
        string,
        string
      >;
      const result = await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone || "",
          subject: serviceLabel,
          message: data.message,
        },
        EMAILJS.publicKey,
      );
      if (result.status === 200) {
        setStatus("success");
        trackFormSubmit(source);
        form.reset();
      } else {
        throw new Error(`EmailJS status ${result.status}`);
      }
    } catch (err) {
      console.error("Service quote form failed:", err);
      setStatus("error");
      setErrorMsg(
        "Impossible d'envoyer votre message. Merci de nous appeler directement.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/5 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Prénom" name="firstName" required />
        <Field label="Nom" name="lastName" required />
        <Field
          label="E-mail"
          name="email"
          type="email"
          required
          className="sm:col-span-2"
        />
        <Field label="Téléphone" name="phone" type="tel" />
        <div className="sm:col-span-2 rounded-xl bg-cream px-4 py-3 ring-1 ring-brown/10">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
            Service demandé
          </p>
          <p className="mt-1 font-display text-base font-bold text-brown">
            {serviceLabel}
          </p>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block font-display text-sm font-bold text-brown"
          >
            Détaillez votre besoin{" "}
            <span className="text-orange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            minLength={10}
            placeholder="Surface vitrée approximative, hauteur, type de bâtiment, fréquence souhaitée..."
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
            J&apos;accepte que mes données soient collectées pour répondre à
            ma demande, conformément à la{" "}
            <a
              href="/politique-de-confidentialite"
              className="font-semibold text-orange hover:underline"
            >
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
        {status === "submitting" ? "Envoi en cours..." : "Recevoir mon devis"}
      </button>

      {status === "success" && (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-orange">
          <CheckIcon className="h-4 w-4" />
          Merci. Nous revenons vers vous sous 24 h.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          {errorMsg || "Une erreur est survenue."} Appelez-nous au 06 84 66 55
          23.
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  className?: string;
};

function Field({ label, name, type = "text", required, className }: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block font-display text-sm font-bold text-brown"
      >
        {label} {required && <span className="text-orange">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-brown/15 bg-cream px-4 py-3 text-sm text-brown transition-all focus:border-orange focus:bg-cream focus:outline-none focus:ring-4 focus:ring-orange/15"
      />
    </div>
  );
}
