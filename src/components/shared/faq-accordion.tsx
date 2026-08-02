import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

export function FaqAccordion({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-2xl border border-border bg-surface/60 px-6">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
