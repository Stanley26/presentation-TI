import React from 'react';
import { Slide } from '../types';
import { Terminal, Zap, ShieldCheck, Globe, AlertTriangle, ArrowRight } from 'lucide-react';
import { FeatureItem } from '../components/FeatureItem';

export const introSlides: Slide[] = [
  // SLIDE 1: INTRO (Keynote Style)
  {
    id: "intro",
    title: "L'Art du Contrat d'API",
    subtitle: "Maîtriser OpenAPI & Swagger pour une Architecture Robuste",
    content: (
      <div className="h-full flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-purple-50 rounded-3xl -z-10 opacity-50" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
          <div className="space-y-8">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider">
               <Terminal className="w-4 h-4 mr-2" />
               Architecture Moderne
             </div>
             <h2 className="text-5xl font-extrabold text-slate-900 leading-tight">
               Ne documentez plus.<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Standardisez.</span>
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed max-w-md">
               Comment transformer votre documentation en moteur d'automatisation, de test et de gouvernance.
             </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-2xl">
               <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                 <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <span className="font-mono text-xs text-slate-400">api-contract.yaml</span>
               </div>
               <div className="space-y-3 font-mono text-sm">
                  <div className="flex"><span className="text-purple-600 w-24">openapi:</span> <span className="text-slate-700">3.0.3</span></div>
                  <div className="flex"><span className="text-purple-600 w-24">info:</span></div>
                  <div className="flex pl-4"><span className="text-blue-600 w-24">title:</span> <span className="text-green-600">"Payment API"</span></div>
                  <div className="flex pl-4"><span className="text-blue-600 w-24">version:</span> <span className="text-orange-500">1.2.0</span></div>
                  <div className="flex"><span className="text-purple-600 w-24">paths:</span> <span className="text-slate-400"># The Single Source of Truth</span></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // SLIDE 2: THE "WHY" - BUSINESS VALUE
  {
    id: "business-value",
    title: "Pourquoi un Contrat d'API ?",
    subtitle: "Au-delà de la technique : La valeur business",
    content: (
      <div className="space-y-10">
        <p className="text-xl text-slate-700 max-w-3xl">
          Dans une économie numérique connectée, une API sans contrat est comme une maison sans plans : <span className="font-bold text-slate-900">inhabitable et impossible à maintenir.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureItem 
            icon={Zap}
            color="yellow"
            title="Vitesse (Time-to-Market)"
            desc="Le Frontend n'attend plus le Backend. Avec un contrat, on génère des Mocks immédiats et on développe en parallèle."
          />
          <FeatureItem 
            icon={ShieldCheck}
            color="green"
            title="Fiabilité & Qualité"
            desc="Réduit drastiquement les bugs d'intégration. Le contrat sert de juge de paix automatisé entre les équipes."
          />
           <FeatureItem 
            icon={Globe}
            color="blue"
            title="Automatisation"
            desc="La documentation, les SDKs clients et les tests de conformité sont générés automatiquement. Fini la maintenance manuelle."
          />
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-white flex items-center justify-between shadow-lg">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
               <AlertTriangle size={28} />
             </div>
             <div>
               <h4 className="font-bold text-lg">Le Coût du "Sans Contrat"</h4>
               <p className="text-slate-400 text-sm">Réunions interminables, Slacks constants, bugs en PROD dus à un champ renommé...</p>
             </div>
           </div>
           <ArrowRight className="text-slate-500" />
        </div>
      </div>
    )
  }
];
