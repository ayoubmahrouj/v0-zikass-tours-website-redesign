import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export type Section = { h: string; p: string[] }

export function LegalPage({ title, updated, en, fr }: { title: string; updated: string; en: Section[]; fr: Section[] }) {
  const block = (lang: string, label: string, sections: Section[]) => (
    <section lang={lang} className="space-y-6">
      <h2 className="font-serif text-2xl font-bold text-primary">{label}</h2>
      {sections.map((s) => (
        <div key={s.h}>
          <h3 className="font-semibold text-lg mb-2">{s.h}</h3>
          {s.p.map((t) => <p key={t} className="text-muted-foreground leading-relaxed mb-2">{t}</p>)}
        </div>
      ))}
    </section>
  )
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-16">
          <article className="container mx-auto px-4 max-w-3xl space-y-12">
            <header>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary">{title}</h1>
              <p className="text-sm text-muted-foreground mt-2">{updated}</p>
            </header>
            {block("en", "English", en)}
            {block("fr", "Français", fr)}
          </article>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
