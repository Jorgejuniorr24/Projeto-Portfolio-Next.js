// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-700">
            JorgeOliveira
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900">Início</Link>
            <Link href="/sobre" className="text-slate-600 hover:text-slate-900">Sobre</Link>
            <Link href="/portfolio" className="text-slate-600 hover:text-slate-900">Portfólio</Link>
            <Link href="/servicos" className="text-slate-600 hover:text-slate-900">Serviços</Link>
            <Link href="/contato" className="text-slate-600 hover:text-slate-900">Contato</Link>
            <div className="flex items-center gap-2">
              <Image src="/br.svg" alt="Bandeira do Brasil" width={24} height={24} />
              <Image src="/us.svg" alt="Bandeira dos EUA" width={24} height={24} />
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-slate-600 text-xl mb-4">Olá, Eu sou</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Jorge Oliveira
            </h1>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-6">
              E sou Desenvolvedor FrontEnd
            </h3>
            <p className="text-slate-600 text-lg mb-8">
              "Cada aplicação bem desenvolvida é um testemunho de como a tecnologia pode transformar vidas positivamente."
            </p>
            <div className="flex gap-4">
              <Link 
                href="/sobre"
                className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Sobre Mim
              </Link>
              <Link 
                href="/curriculo.pdf"
                className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Baixar Currículo
              </Link>
            </div>
            <div className="flex gap-6 mt-8">
              <Link href="https://github.com" className="text-slate-600 hover:text-slate-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="text-slate-600 hover:text-slate-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" className="text-slate-600 hover:text-slate-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Jorge Oliveira"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}