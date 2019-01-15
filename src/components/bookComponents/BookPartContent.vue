<template>
    <v-card class='pa-2'>
        <div>
            <div class='display-1'>{{contentPart.bookTitle}}</div>
            <div class='headline'>{{contentPart.partTitle}}</div>
            <v-divider class='black'/>
        </div>
        <div class='text-xs-center mt-2 mb-2 primary'>
            <youtube :video-id="contentPart.youtube_id"
                    :player-width="playerWidth"
                    />
        </div>
        <div class='mt-2'>
            <v-slider v-model="fontSize" :label='`Размер шрифта (${fontSize})`'
                step="1" max="30" min="10" tick-size="5"/>
            <v-tabs v-model='tabMode' color='accent' dark fixed-tabs slider-color='success'>
                <v-tab :key="'first'" ripple>
                    Text with advances
                </v-tab>
                <v-tab :key="'second'" ripple>
                    side-by-side
                </v-tab>
                <v-tab-item :key="'first'">
                    <div v-for="(paragraph,i) in contentPart.content" :key='`par1${i}`'>
                        <span>&nbsp;&nbsp;</span>
                        <span v-for="(sentence,y) in paragraph.sentences" :key='`par1${i}sen1${y}`' :style='textStyle'>
                            <span>
                                {{sentence.origText}}
                            </span>
                            <v-icon :size='fontSize' @click='toggleVisibility(i,y)'>help</v-icon>
                            <span v-if='getVisibilityFlag(i,y).value' class='success--text' style='font-weight:bold'>
                                {{sentence.transText}}
                            </span>
                        </span>
                    </div>
                </v-tab-item>
                <v-tab-item :key="'second'">
                  <v-container>
                        <v-layout row wrap v-for="(paragraph,i) in contentPart.content" :key='`par2${i}`'>
                            <v-flex xs6>
                                 <span>&nbsp;&nbsp;</span>
                                 <span v-for="(sentence,y) in paragraph.sentences" :key='`par2${i}sen2${y}_orig`' :style='textStyle'>
                                    <span>
                                        {{sentence.origText}}
                                    </span>
                                 </span>
                            </v-flex>
                            <v-flex xs6>
                                 <span>&nbsp;&nbsp;</span>
                                 <span v-for="(sentence,y) in paragraph.sentences" :key='`par2${i}sen2${y}_trans`' :style='textStyle'>
                                    <span>
                                        {{sentence.transText}}
                                    </span>
                                 </span>
                            </v-flex>
                        </v-layout> 
                    </v-container> 
            <!--    <v-container v-for="(paragraph,i) in contentPart.content" :key='`par2${i}`'>
                        <v-layout row wrap v-for="(sentence,y) in paragraph.sentences" :key='`par2${i}sen2${y}_orig`' :style='textStyle'>
                            <v-flex xs6>
                                {{sentence.origText}}
                            </v-flex>
                            <v-flex xs6>
                                {{sentence.transText}}
                            </v-flex>
                        </v-layout> 
                    </v-container> -->
                </v-tab-item>
            </v-tabs>
        </div>
    </v-card>
</template>

<script>
    export default {
        props:{
            "contentPart":{
                type: Object,
                required: true
            }
        },
        data(){
            return {
                tabMode:'first',
                visibilityKeys:[],
                fontSize: 18
            }
        },
        computed:{
            playerWidth(){
                switch(this.$vuetify.breakpoint.name){
                    case 'xs': return '220px'
                    case 'sm': return '400px'
                    case 'md': return '500px'
                    case 'lg': return '600px'
                    case 'xl': return '800px'
                }
            },
            textStyle(){
                return {
                    fontSize:`${this.fontSize}px`
                }
            }
        },
        methods:{
            getVisibilityFlag(i,y){
                return this.visibilityKeys.find(k => k.key == `${i}${y}`)
            },
            toggleVisibility(i,y){
                let flag = this.getVisibilityFlag(i,y)
                flag.value = !flag.value
            }
        },
        created(){
            for(var i=0; i<this.contentPart.content.length;i++){
                for(var y=0; y<this.contentPart.content[i].sentences.length;y++){
                    this.visibilityKeys.push({
                        key: `${i}${y}`,
                        value: false
                    })
                }
            }
        }
    }   
</script>

<style>

</style>
