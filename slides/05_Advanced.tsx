import React from 'react';
import { Slide } from '../types';
import { FeatureItem } from '../components/FeatureItem';
import { ShieldCheck, GitMerge, XCircle, CheckCircle, PlayCircle, ArrowRight, Globe } from 'lucide-react';

export const advancedSlides: Slide[] = [
  // SLIDE 12: MOCKING & TESTING
  {
    id: "testing",
    title: "Accélérateur de Développement",
    subtitle: "Pourquoi le Contract-First booste la productivité",
    content: (
      <div className="flex flex-col h-full justify-center space-y-12">
        
        {/* Scenario 1: The Bottleneck */}
        <div className="relative pl-8 border-l-4 border-red-300 bg-red-50/50 p-6 rounded-r-xl">
           <h4 className="text-xl font-bold text-slate-500 mb-2">❌ Le Vieux Monde (Séquentiel)</h4>
           <div className="flex items-center space-x-4 overflow-x-auto py-2">
              <div className="px-4 py-2 bg-white border border-slate-200 rounded text-slate-600 font-mono text-sm shadow-sm">Backend Code</div>
              <ArrowRight className="text-slate-400"/>
              <div className="px-4 py-2 bg-white border border-slate-200 rounded text-slate-600 font-mono text-sm shadow-sm">Backend Deploy</div>
              <ArrowRight className="text-slate-400"/>
              <div className="px-4 py-2 bg-white border border-slate-200 rounded text-slate-600 font-mono text-sm shadow-sm">Frontend Dev</div>
              <ArrowRight className="text-slate-400"/>
              <div className="px-4 py-2 bg-white border border-slate-200 rounded text-slate-600 font-mono text-sm shadow-sm">Integration Tests</div>
           </div>
        </div>

        {/* Scenario 2: The Parallel World */}
        <div className="relative pl-8 border-l-4 border-green-500">
           <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
           <h4 className="text-xl font-bold text-slate-900 mb-4">✅ Le Monde OpenAPI (Parallèle)</h4>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-5 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center mb-3 text-purple-600">
                  <PlayCircle className="mr-2" />
                  <span className="font-bold">Pour le Frontend</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Utilisation d'un <strong>Mock Server</strong> (ex: Prism).
                  L'API répond instantanément avec des fausses données basées sur le contrat.
                </p>
                <code className="text-xs bg-slate-100 p-1 rounded font-mono text-slate-500">$ prism mock api.yaml</code>
             </div>

             <div className="bg-white p-5 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center mb-3 text-red-600">
                  <ShieldCheck className="mr-2" />
                  <span className="font-bold">Pour le Backend</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Utilisation de <strong>Contract Testing</strong> (ex: Dredd).
                  La CI vérifie que le code Java respecte scrupuleusement le contrat.
                </p>
                <code className="text-xs bg-slate-100 p-1 rounded font-mono text-slate-500">$ dredd backend-url api.yaml</code>
             </div>
           </div>
        </div>
      </div>
    )
  },

  // SLIDE 13: GOVERNANCE
  {
    id: "governance",
    title: "Gouvernance & Qualité",
    subtitle: "Maîtriser la dette technique",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
         <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">
              Un contrat valide n'est pas forcément un <span className="text-blue-600">bon</span> contrat.
            </h3>
            <p className="text-slate-600 text-lg">
              Comment s'assurer que 50 équipes de développeurs produisent des API cohérentes ?
            </p>

            <ul className="space-y-4">
              <FeatureItem 
                icon={ShieldCheck} 
                title="API Linting (Spectral)" 
                desc="Un linter pour vos fichiers YAML. Il force les conventions : casing, descriptions obligatoires, exemples requis." 
                color="indigo"
              />
              <FeatureItem 
                icon={GitMerge} 
                title="API Gateway" 
                desc="Votre Gateway (Kong, Apigee) peut ingérer le contrat pour configurer automatiquement les sécurité et le routing." 
                color="orange"
              />
            </ul>
         </div>

         <div className="bg-slate-900 rounded-xl p-1 shadow-2xl">
            <div className="bg-[#1e293b] text-slate-400 text-xs px-4 py-2 rounded-t-xl border-b border-slate-700">
              spectral.yml (Ruleset)
            </div>
            <div className="p-6">
              <code className="font-mono text-sm text-green-400">
                rules:<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">operation-description:</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;description: Operation must have a description.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;severity: error<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;severity: error<br/>
                <br/>
                &nbsp;&nbsp;<span className="text-yellow-400">path-kebab-case:</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;description: Paths must be kebab-case.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;severity: warn
              </code>
              
              <div className="mt-6 pt-4 border-t border-slate-700">
                 <div className="flex items-center text-red-400 text-sm font-mono mb-1">
                   <XCircle size={14} className="mr-2"/> Error: Operation GET /users missing description
                 </div>
                 <div className="flex items-center text-green-400 text-sm font-mono">
                   <CheckCircle size={14} className="mr-2"/> Linting Finished. 1 error found.
                 </div>
              </div>
            </div>
         </div>
      </div>
    )
  },

  // SLIDE 14: SUMMARY
  {
    id: "summary",
    title: "Key Takeaways",
    subtitle: "Ce qu'il faut retenir pour briller",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-md border-l-8 border-blue-600 transition-transform hover:-translate-y-1">
              <h4 className="text-xl font-bold text-slate-900 mb-2">1. Le Contrat est Roi</h4>
              <p className="text-slate-600">
                Traitez votre fichier OpenAPI comme du code source. Versionnez-le. Reviewez-le. C'est votre source de vérité.
              </p>
           </div>
           
           <div className="bg-white p-6 rounded-xl shadow-md border-l-8 border-purple-600 transition-transform hover:-translate-y-1">
              <h4 className="text-xl font-bold text-slate-900 mb-2">2. Automatisez tout</h4>
              <p className="text-slate-600">
                Ne maintenez jamais de documentation manuelle. Générez-la, ou mieux, générez votre code à partir de la documentation.
              </p>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-md border-l-8 border-green-500 transition-transform hover:-translate-y-1">
              <h4 className="text-xl font-bold text-slate-900 mb-2">3. Contract-First</h4>
              <p className="text-slate-600">
                Pour les projets critiques, définissez l'interface avant l'implémentation. C'est la clé de la parallélisation.
              </p>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-8">
           <div className="relative">
             <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
             <Globe size={120} className="text-slate-800 relative z-10" strokeWidth={1} />
           </div>
           
           <div>
             <p className="text-2xl font-light text-slate-600 italic">
               "L'API est le produit.<br/>OpenAPI est son packaging."
             </p>
           </div>

           <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-xl">
             Questions ?
           </button>
        </div>

      </div>
    )
  }
];
