const { createApp } = Vue

  createApp({
    data() {
      return {
       
        
        questions: [
            {
               libele: '1-que signifie le mot djoss ?',
               rp1: 'yes',
               rp2: 'jouer',
               rp3: 'vendre',
               rp4: 'parler',
               numero:1,
               rep: 'parler',
               
            },
            {
                libele: '2-que signifie le mot talk ?',
                rp1: 'accepter',
                rp2: 'dire',
                rp3: 'occcuper',
                rp4: 'bien',
                numero:2,
                rep: 'dire',
                
             },
             {
                libele: '3-que signifie le mot slack ?',
                rp1: 'laisser',
                rp2: 'vu',
                rp3: 'demain',
                rp4: 'douter',
                numero:3,
                rep: 'laisser',
                
             },
             {
                libele: '4-que signifie le mot yamo ?',
                rp1: 'yamo',
                rp2: 'amour',
                rp3: 'mbout',
                rp4: 'rithmeur',
                numero:4,
                rep: 'amour',
                
             },
             {
                libele: '5-que signifie le mot la ndang ?',
                rp1: 'policier',
                rp2: 'carte',
                rp3: 'femme',
                rp4: 'chanteur',
                numero:5,
                rep: 'carte',
               
             },
             {
                libele: '6-que signifie le mot flipper ?',
                rp1: 'etonner',
                rp2: 'rage',
                rp3: 'peur',
                rp4: 'fou',
                numero:6,
                rep: 'peur',
                
             },
             {
                libele: '7-que signifie le mot wanda ?',
                rp1: 'etonner',
                rp2: 'ok',
                rp3: 'non',
                rp4: 'moi',
                numero:7,
                rep: 'etonner',
            },
            {
                libele: '8-que signifie le mot la chech ?',
                rp1: 'ecole',
                rp2: 'marche',
                rp3: 'eglise',
                rp4: 'hopital',
                numero:8,
                rep: 'eglise',
                
             },
             {
                libele: '9-que signifie le mot la ngueme ?',
                rp1: 'galere',
                rp2: 'argent',
                rp3: 'nourriture',
                rp4: 'pouvoir',
                numero:9,
                rep: 'galere',
                
             },
             {
                libele: '10-que signifie le mot la bro ?',
                rp1: 'frere ou soeur',
                rp2: 'pere',
                rp3: 'mere',
                rp4: 'oncle',
                numero:10,
                rep: 'frere ou soeur',
                
             }

        ],
        reponses: ['parler', 'dire','laisser','amour']
           
        }

    },
    methods: {
        verification(element,num){
            
            if(element === this.questions[num-1].rep){
                switch(this.questions[num-1].rep){
                    case this.questions[num-1].rp1:
                        this.questions[num-1].rp1 = 'vrai bro'
                        break
                    case this.questions[num-1].rp2:
                        this.questions[num-1].rp2 = 'vrai bro'
                        break
                    case this.questions[num-1].rp3:
                        this.questions[num-1].rp3 = 'vrai bro'
                        break
                    default:
                        this.questions[num-1].rp4 = 'vrai bro'
                  }
                
            }
            else{
                switch(element){
                    case this.questions[num-1].rp1:
                        this.questions[num-1].rp1 = 'faux bro'
                        break
                    case this.questions[num-1].rp2:
                        this.questions[num-1].rp2 = 'faux bro'
                        break
                    case this.questions[num-1].rp3:
                        this.questions[num-1].rp3 = 'faux bro'
                        break
                    default:
                        this.questions[num-1].rp4 = 'faux bro'
                  }
            }
                
                
            }
        }
    
  }).mount('#app')
  