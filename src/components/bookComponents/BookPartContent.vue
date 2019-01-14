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
                        <span v-for="(sentence,y) in paragraph.sentences" :key='`par1${i}sen1${y}`'>
                            <span>
                                {{sentence.origText}}
                            </span>
                            <v-icon size='18' @click='toggleVisibility(i,y)'>help</v-icon>
                            <span v-if='getVisibilityFlag(i,y).value' class='success--text' style='font-weight:bold'>
                                {{sentence.transText}}
                            </span>
                        </span>
                    </div>
                </v-tab-item>
                <v-tab-item :key="'second'">
                    <!-- 31:40 -->
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
                visibilityKeys:[]
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
