import type { ReactNode } from "react";

interface ParsedAnswer {
  intro: string;
  steps: string[];
  outro: string;
}

/**
 * Pecah jawaban berpola "Pengantar: 1) langkah, 2) langkah. Penutup."
 * menjadi pengantar + daftar bernomor + penutup. Teks tidak diubah — hanya
 * strukturnya. Bila pola tidak lengkap (nomor tidak urut dari 1), kembalikan
 * null agar jawaban tampil apa adanya.
 */
function parseSteps(text: string): ParsedAnswer | null {
  const markers = [...text.matchAll(/(?:^|\s)(\d)\)\s/g)];
  if (markers.length < 2) return null;
  if (markers.some((m, i) => Number(m[1]) !== i + 1)) return null;

  const intro = text.slice(0, markers[0].index).trim();
  const steps: string[] = [];
  let outro = "";

  markers.forEach((m, i) => {
    const start = (m.index ?? 0) + m[0].length;
    const end = i + 1 < markers.length ? markers[i + 1].index : text.length;
    let step = text.slice(start, end).trim();
    if (i === markers.length - 1) {
      // Kalimat setelah langkah terakhir menjadi penutup.
      const cut = step.search(/\.\s+(?=[A-Z])/);
      if (cut >= 0) {
        outro = step.slice(cut + 1).trim();
        step = step.slice(0, cut + 1);
      }
    }
    steps.push(step.replace(/[,.]$/, ""));
  });

  return { intro, steps, outro };
}

/** Jawaban FAQ: paragraf, atau pengantar + langkah bernomor + penutup. */
export function FaqAnswer({ answer }: { answer: ReactNode }) {
  if (typeof answer !== "string") return <p>{answer}</p>;
  const parsed = parseSteps(answer);
  if (!parsed) return <p>{answer}</p>;

  return (
    <>
      {parsed.intro && <p>{parsed.intro}</p>}
      <ol className="mt-3 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-fg">
        {parsed.steps.map((step) => (
          <li key={step} className="pl-1">
            {step}
          </li>
        ))}
      </ol>
      {parsed.outro && <p className="mt-3">{parsed.outro}</p>}
    </>
  );
}
