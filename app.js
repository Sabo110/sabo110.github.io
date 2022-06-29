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
               trouver: false
            },
            {
                libele: '2-que signifie le mot talk ?',
                rp1: 'accepter',
                rp2: 'dire',
                rp3: 'occcuper',
                rp4: 'bien',
                numero:2,
                rep: 'dire',
                trouver: false
             },
             {
                libele: '3-que signifie le mot slack ?',
                rp1: 'laisser',
                rp2: 'vu',
                rp3: 'demain',
                rp4: 'douter',
                numero:3,
                rep: 'laisser',
                trouver: false
             },
             {
                libele: '4-que signifie le mot yamo ?',
                rp1: 'yamo',
                rp2: 'amour',
                rp3: 'mbout',
                rp4: 'rithmeur',
                numero:4,
                rep: 'amour',
                trouver: false
             },
             {
                libele: '5-que signifie le mot la ndang ?',
                rp1: 'policier',
                rp2: 'carte',
                rp3: 'femme',
                rp4: 'chanteur',
                numero:5,
                rep: 'carte',
                trouver: false
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
  