import React from 'react'
import heroImg from './assets/image_0.png'

import imgResidencial from './assets/servico1.jpg' 
import imgIndustrial from './assets/servico2.jpg'
import imgTerraplanagem from './assets/servico3.jpg'
import imgEntulho from './assets/servico4.jpg'

const CardSobre = ({ icon, title, desc, isLong }) => (
  <div className="p-10 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="text-[#ffb400] text-5xl mb-6 flex justify-center">{icon}</div>
    <h3 className={`font-bold mb-4 uppercase tracking-tight text-center text-gray-900 ${isLong ? 'text-xl' : 'text-2xl'}`}>
      {title}
    </h3>
    <p className="text-gray-600 text-base leading-relaxed text-center">{desc}</p>
  </div>
);

function App() {
  const servicos = [
    { 
      title: 'Demolição Residencial', 
      img: imgResidencial, 
      desc: 'Demolição parcial ou total de residências com segurança e agilidade, respeitando os limites do imóvel e vizinhança.' 
    },
    { 
      title: 'Demolição Industrial', 
      img: imgIndustrial, 
      desc: 'Demolição de galpões, fábricas e estruturas industriais de grande porte com planejamento técnico especializado.' 
    },
    { 
      title: 'Terraplanagem', 
      img: imgTerraplanagem, 
      desc: 'Serviços de movimentação de terra, nivelamento e preparação de terrenos para novas construções.' 
    },
    { 
      title: 'Remoção de Entulho', 
      img: imgEntulho, 
      desc: 'Coleta, transporte e destinação adequada de entulhos e resíduos da construção civil.' 
    }
  ];

  const diferenciais = [
    { title: 'Equipe Especializada', desc: 'Profissionais treinados e capacitados para cada tipo de demolição.', icon: '👥' },
    { title: 'Segurança Certificada', desc: 'Cumprimento integral das normas regulamentadoras de segurança.', icon: '🛡️' },
    { title: 'Atendimento Rápido', desc: 'Resposta ágil para orçamentos e início de obras.', icon: '⚡' },
    { title: 'Cumprimento de Prazos', desc: 'Compromisso total com cronogramas e entregas no prazo.', icon: '📅' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <nav className="fixed top-0 w-full bg-[#111111] text-white p-6 z-50 flex justify-between px-10 shadow-xl items-center">
        <div className="font-bold text-2xl uppercase tracking-tighter">
          <span className="text-[#ffb400]">MS</span> DEMOLIDORA
        </div>
        <div className="hidden md:flex space-x-8 uppercase text-sm font-bold tracking-wide">
          <a href="#home" className="hover:text-[#ffb400] transition-colors">Início</a>
          <a href="#sobre" className="hover:text-[#ffb400] transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-[#ffb400] transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-[#ffb400] transition-colors">Diferenciais</a>
          <a href="#atuacao" className="hover:text-[#ffb400] transition-colors">Atuação</a>
          <a href="#contato" className="hover:text-[#ffb400] transition-colors">Contato</a>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Escavadeira em obra" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <h1 className="text-white text-6xl md:text-7xl font-bold uppercase mb-8 leading-tight tracking-tight drop-shadow-lg">
            Demolição com <span className="text-[#ffb400]">Segurança</span>, <br />
            Eficiência e Responsabilidade
          </h1>
          <p className="text-gray-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-normal drop-shadow-md">
            Soluções completas em demolição, terraplanagem e remoção de entulho com equipe especializada e comprometida com prazos.
          </p>
          <a href="#contato" className="bg-[#ffb400] text-black font-bold py-5 px-14 rounded hover:bg-yellow-500 transition-all uppercase tracking-widest text-lg shadow-lg hover:scale-105 transform duration-200">
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <section id="sobre" className="py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight text-gray-900">
            Sobre a <span className="text-[#ffb400]">Empresa</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-20 text-lg leading-relaxed">
            A MS Demolidora é referência em serviços de demolição, oferecendo soluções seguras, eficientes e ambientalmente responsáveis para obras de todos os portes na Grande São Paulo.
          </p>
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <CardSobre icon="🛡️" title="Segurança" desc="Cumprimos rigorosamente todas as normas de segurança do trabalho, garantindo proteção total para a equipe e o entorno." />
            <CardSobre icon="🎖️" title="Experiência" desc="Anos de atuação no mercado com projetos de diversos portes, entregando resultados com excelência e profissionalismo." />
            <CardSobre icon="🍃" title="Responsabilidade Ambiental" desc="Destinamos corretamente todos os resíduos, contribuindo com a sustentabilidade e o cumprimento das legislações ambientais." isLong />
          </div>
        </div>
      </section>

      <section id="servicos" className="py-28 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold uppercase mb-4 tracking-tight">
            Nossos <span className="text-[#ffb400]">Serviços</span>
          </h2>
          <p className="text-gray-400 text-base mb-20 uppercase tracking-[5px] font-semibold">Do início à limpeza final</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
            {servicos.map((s, i) => (
              <div key={i} className="bg-[#242424] border border-gray-800 flex flex-col items-center hover:border-[#ffb400] transition-all group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl">
                
                <div className="w-full h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>

                <div className="p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight leading-tight mt-2 text-[#ffb400]">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold uppercase mb-24 tracking-tight text-gray-900">Nossos <span className="text-[#ffb400]">Diferenciais</span></h2>
          <div className="grid md:grid-cols-4 gap-12 max-w-[1400px] mx-auto">
            {diferenciais.map((d, i) => (
              <div key={i} className="flex flex-col items-center p-4">
                <div className="w-24 h-24 bg-[#ffb400] rounded-full flex items-center justify-center text-5xl shadow-xl mb-8 shadow-yellow-500/20 transform hover:-translate-y-2 transition-transform duration-300">
                  {d.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-gray-900">{d.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed px-2">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atuacao" className="py-28 bg-[#111111] text-white text-center">
        <h2 className="text-5xl font-bold uppercase mb-8 tracking-tight">
          Área de <span className="text-[#ffb400]">Atuação</span>
        </h2>
        <p className="text-gray-400 mb-16 max-w-3xl mx-auto px-6 text-xl leading-relaxed">
          Atendemos toda a Grande São Paulo e região metropolitana, levando nossos serviços com a mesma qualidade e compromisso a cada projeto.
        </p>
        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-12 py-6 rounded-xl text-[#ffb400] font-bold text-xl uppercase tracking-widest shadow-2xl hover:bg-white/10 transition-colors cursor-default">
          📍 Grande São Paulo e todo Brasil
        </div>
      </section>

      <section id="contato" className="py-28 bg-white text-center">
        <h2 className="text-5xl font-bold uppercase mb-20 tracking-tight text-gray-900">
          Entre em <span className="text-[#ffb400]">Contato</span>
        </h2>
        <div className="flex flex-col items-center space-y-16 max-w-5xl mx-auto">
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-[#ffb400]/10 rounded-full flex items-center justify-center text-[#ffb400] text-4xl mb-6 group-hover:bg-[#ffb400] group-hover:text-black transition-all duration-300">
              📞
            </div>
            <p className="font-bold text-gray-500 uppercase text-sm tracking-[4px] mb-2">Telefone</p>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">(11) 97684-8823</p>
          </div>
          <div className="flex flex-col items-center group text-center">
            <div className="w-20 h-20 bg-[#ffb400]/10 rounded-full flex items-center justify-center text-[#ffb400] text-4xl mb-6 group-hover:bg-[#ffb400] group-hover:text-black transition-all duration-300">
              📍
            </div>
            <p className="font-bold text-gray-500 uppercase text-sm tracking-[4px] mb-2">Endereço</p>
            <p className="text-xl font-semibold text-gray-700 max-w-lg">
              Estrada dos Romeiros nº 1610 – 1º andar, sala 17
            </p>
          </div>
          <a href="https://wa.me/5511976848823" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-16 py-6 rounded-xl font-bold flex items-center gap-4 hover:bg-[#1ebd5e] transition-all uppercase tracking-widest shadow-2xl shadow-green-500/30 text-lg transform hover:-translate-y-1">
            <span className="text-2xl">💬</span> Fale pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#111111] text-white py-20 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="font-bold text-3xl mb-8 uppercase tracking-tight">
            <span className="text-[#ffb400]">MS</span> DEMOLIDORA
          </div>
          <div className="text-gray-500 text-sm space-y-3 uppercase tracking-[3px] font-medium">
            <p>CNPJ: 35.132.114/0001-70</p>
            <p>Estrada dos Romeiros nº 1610 – 1º andar, sala 17</p>
            <p>Telefone: (11) 97684-8823</p>
            <p>E-mail: msdemolidora@gmail.com</p>
            <p className="pt-10 text-xs opacity-40">© 2026 MS Demolidora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5511976848823" target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 bg-[#25D366] w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl hover:scale-110 transition-transform z-[60] shadow-green-500/40">
        💬
      </a>
    </div>
  );
}

export default App;