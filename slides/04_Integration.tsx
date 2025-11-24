import React from 'react';
import { Slide } from '../types';
import { CodeBlock } from '../components/CodeBlock';
import { Code, CheckCircle, XCircle, FileText, Box } from 'lucide-react';

export const integrationSlides: Slide[] = [
  // SLIDE 10: INTEGRATION STRATEGIES
  {
    id: "strategies",
    title: "Stratégies d'Intégration",
    subtitle: "Comment générer le contrat ?",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
         {/* Code First */}
         <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-yellow-500 flex flex-col">
            <div className="mb-4">
               <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                 <Code className="mr-3 text-yellow-500" /> Code-First
               </h3>
               <p className="text-slate-500 text-sm mt-1">L'approche traditionnelle</p>
            </div>
            
            <div className="flex-1 space-y-4">
               <div className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <span className="font-bold text-lg">1.</span>
                  <span>J'écris mon Controller Java</span>
               </div>
               <div className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <span className="font-bold text-lg">2.</span>
                  <span>J'ajoute des annotations</span>
               </div>
               <div className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <span className="font-bold text-lg">3.</span>
                  <span>La librairie génère le JSON au runtime</span>
               </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
               <div className="flex items-center text-green-600 font-bold text-lg">
                 <CheckCircle size={24} className="mr-3"/> Rapide pour démarrer
               </div>
               <div className="flex items-center text-red-500 font-bold text-lg">
                 <XCircle size={24} className="mr-3"/> Risque de décalage Doc/Code
               </div>
            </div>
         </div>

         {/* Contract First */}
         <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-600 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMANDÉ</div>
            <div className="mb-4">
               <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                 <FileText className="mr-3 text-blue-600" /> Contract-First
               </h3>
               <p className="text-slate-500 text-sm mt-1">L'approche industrielle (API-First)</p>
            </div>
            
            <div className="flex-1 space-y-4">
               <div className="flex items-center space-x-3 text-slate-700 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                  <span className="font-bold text-lg text-blue-600">1.</span>
                  <span>On design le YAML (Contract)</span>
               </div>
               <div className="flex items-center space-x-3 text-slate-700 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                  <span className="font-bold text-lg text-blue-600">2.</span>
                  <span>On génère le code (Interface)</span>
               </div>
               <div className="flex items-center space-x-3 text-slate-700 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                  <span className="font-bold text-lg text-blue-600">3.</span>
                  <span>On implémente la logique</span>
               </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
               <div className="flex items-center text-green-600 font-bold text-lg">
                 <CheckCircle size={24} className="mr-3"/> Parallélisation Front/Back
               </div>
               <div className="flex items-center text-green-600 font-bold text-lg">
                 <CheckCircle size={24} className="mr-3"/> Gouvernance forte
               </div>
            </div>
         </div>
      </div>
    )
  },

  // SLIDE 11: SPRING BOOT EXAMPLE
  {
    id: "java-integration",
    title: "Implémentation Java",
    subtitle: "Spring Boot + Springdoc (Code-First)",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h4 className="font-bold text-slate-800 mb-3 flex items-center">
               <Box className="w-5 h-5 mr-2 text-green-600"/> Dépendance Maven
             </h4>
             <div className="bg-slate-900 rounded p-3 font-mono text-xs text-slate-300 overflow-x-auto">
               &lt;artifactId&gt;springdoc-openapi-starter-webmvc-ui&lt;/artifactId&gt;<br/>
               &lt;version&gt;2.3.0&lt;/version&gt;
             </div>
           </div>

           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
             <h4 className="font-bold text-blue-800 mb-2">Pro Tips</h4>
             <ul className="space-y-2 text-sm text-blue-700">
               <li>• Utilisez <code>@Schema(example = "...")</code> pour enrichir la doc.</li>
               <li>• <code>@Hidden</code> permet de cacher des endpoints internes.</li>
               <li>• Groupez vos endpoints avec <code>@Tag</code>.</li>
             </ul>
           </div>
        </div>

        <div>
          <CodeBlock 
            title="UserController.java"
            language="java"
            code={`
@RestController
@RequestMapping("/api/users")
@Tag(name = "Utilisateurs", description = "Gestion des comptes")
public class UserController {

  @Operation(summary = "Récupérer un utilisateur", 
             description = "Renvoie les détails publics d'un user.")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Succès", 
          content = @Content(schema = @Schema(implementation = User.class))),
      @ApiResponse(responseCode = "404", description = "Utilisateur non trouvé")
  })
  @GetMapping("/{id}")
  public ResponseEntity<User> getUser(
      @Parameter(description = "ID unique (UUID)", example = "123e4567...") 
      @PathVariable String id) {
      
      return userService.findById(id)
          .map(ResponseEntity::ok)
          .orElse(ResponseEntity.notFound().build());
  }
}
            `}
          />
        </div>
      </div>
    )
  }
];
