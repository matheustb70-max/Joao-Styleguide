/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Palette, 
  Type, 
  Square, 
  MousePointer2, 
  Layout, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Shield, 
  ArrowRight
} from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen glow-orange">
      <div className="glow-orange-spot -top-40 -left-40" />
      <div className="glow-orange-spot -bottom-40 -right-40" />

      <main className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-text-muted">Sistema de Identidade Visual</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Guia de <span className="text-gradient">Estilo</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Um sistema de design profissional, premium e moderno, criado para landing pages de alta performance e experiências imersivas.
          </p>
        </motion.header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-32"
        >
          {/* Typography */}
          <section id="typography">
            <div className="flex items-center gap-3 mb-10">
              <Type className="w-6 h-6 text-brand-primary" />
              <h2 className="text-3xl font-bold">Tipografia</h2>
            </div>
            
            <motion.div variants={itemVariants} className="card-premium space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-muted mb-4 font-semibold">Títulos</p>
                    <h3 className="text-5xl font-bold leading-tight">Headline One Bold</h3>
                    <h4 className="text-3xl font-bold mt-4">Heading Two Bold</h4>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-muted mb-4 font-semibold">Subtítulos</p>
                    <h5 className="text-2xl font-semibold">Subheading SemiBold</h5>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-muted mb-4 font-semibold">Corpo de Texto</p>
                    <p className="text-lg leading-relaxed mb-4 text-text-primary">
                      O texto do corpo principal é Regular com 18px. Garante alta legibilidade para descrições de produtos complexos e propostas de valor.
                    </p>
                    <p className="text-base text-text-muted leading-relaxed">
                      O corpo de texto secundário utiliza a cor suave (#B0B0B8) para criar hierarquia e reduzir o ruído visual em blocos de informação menos críticos.
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                    <p className="font-mono text-xs text-brand-primary">Fonte: Poppins (Regular, Medium, SemiBold, Bold)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Color Palette */}
          <section id="colors">
            <div className="flex items-center gap-3 mb-10">
              <Palette className="w-6 h-6 text-brand-primary" />
              <h2 className="text-3xl font-bold">Paleta de Cores</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Fundo Primário', hex: '#09090F', class: 'bg-[#09090F]' },
                { name: 'Fundo Secundário', hex: '#15151B', class: 'bg-[#15151B]' },
                { name: 'CTA Principal', hex: '#18EB63', class: 'btn-primary shadow-none' },
                { name: 'Marca Secundária', hex: '#DD6C34', class: 'gradient-accent' },
                { name: 'Texto Primário', hex: '#FFFFFF', class: 'bg-[#FFFFFF]' },
                { name: 'Texto Suave', hex: '#B0B0B8', class: 'bg-[#B0B0B8]' },
              ].map((color) => (
                <motion.div 
                  key={color.name}
                  variants={itemVariants}
                  className="card-premium p-4 flex flex-col gap-4"
                >
                  <div className={`h-24 rounded-lg w-full ${color.class} border border-white/10`} />
                  <div>
                    <p className="text-sm font-semibold">{color.name}</p>
                    <p className="text-xs text-text-muted font-mono">{color.hex}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Components */}
          <section id="components">
            <div className="flex items-center gap-3 mb-10">
              <Square className="w-6 h-6 text-brand-primary" />
              <h2 className="text-3xl font-bold">Componentes Base</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Buttons */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="flex items-center gap-2 mb-4">
                  <MousePointer2 className="w-4 h-4 text-text-muted" />
                  <h3 className="text-xl font-semibold">Botões</h3>
                </div>
                <div className="card-premium flex flex-wrap gap-6 items-center">
                  <div className="space-y-4 flex-1">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Ação Principal (CTA)</p>
                    <button className="btn-primary w-full group flex items-center justify-center gap-2">
                      Começar Agora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="space-y-4 flex-1">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Secundário</p>
                    <button className="btn-secondary w-full">Saiba Mais</button>
                  </div>
                </div>
              </motion.div>

              {/* Cards */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="flex items-center gap-2 mb-4">
                  <Layout className="w-4 h-4 text-text-muted" />
                  <h3 className="text-xl font-semibold">Cards de Funcionalidades</h3>
                </div>
                <div className="card-premium group hover:border-brand-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Sistema Seguro</h4>
                  <p className="text-text-muted leading-relaxed">
                    Cards premium apresentam uma borda de 1px com fundo #15151B e raio de borda de 12px para um visual moderno.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Visual Elements */}
          <section id="elements">
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="w-6 h-6 text-brand-primary" />
              <h2 className="text-3xl font-bold">Elementos Visuais</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="card-premium flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
                <p className="text-sm font-medium">Ícones de Linha Minimalistas</p>
              </motion.div>
              <motion.div variants={itemVariants} className="card-premium flex flex-col items-center text-center">
                <div className="w-full h-8 gradient-accent rounded-full mb-4 opacity-50" />
                <p className="text-sm font-medium">Gradientes Suaves</p>
              </motion.div>
              <motion.div variants={itemVariants} className="card-premium flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-white mb-4" />
                <p className="text-sm font-medium">Destaques em Branco</p>
              </motion.div>
            </div>

            <div className="divider" />

            <motion.div 
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden h-64 flex items-center justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Technology background"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary" />
              <div className="relative z-10 text-center px-6">
                <h3 className="text-2xl font-bold mb-2">Imagens Imersivas</h3>
                <p className="text-text-muted">A fotografia deve usar tratamentos dessaturados com sobreposições escuras.</p>
              </div>
            </motion.div>
          </section>

          {/* Tone & Style Section */}
          <section className="bg-bg-secondary rounded-3xl p-12 text-center border border-white/5 relative overflow-hidden">
            <div className="glow-orange-spot top-0 right-0 opacity-10" />
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6">Tom e Estilo</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium uppercase tracking-widest mb-8">
                <span className="px-4 py-2 bg-white/5 rounded-full">Profissional</span>
                <span className="px-4 py-2 bg-text-gradient bg-white/5 rounded-full text-brand-primary border border-brand-primary/20">Premium</span>
                <span className="px-4 py-2 bg-white/5 rounded-full">Confiável</span>
                <span className="px-4 py-2 bg-white/5 rounded-full">Moderno</span>
              </div>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed italic">
                "Alto contraste entre fundos escuros e texto branco, com verde vibrante aplicado aos CTAs principais para máximo destaque e conversão."
              </p>
            </motion.div>
          </section>
        </motion.div>

        <footer className="mt-40 text-center py-10 border-t border-white/5">
          <p className="text-text-muted text-sm uppercase tracking-widest">
            © 2026 Amber Design System
          </p>
        </footer>
      </main>
    </div>
  );
}
