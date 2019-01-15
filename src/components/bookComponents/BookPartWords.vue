<template>
    <div>
        <v-container fluid grid-list-md>
            <span class='display-1'>Stats</span>
            <v-data-iterator :items="wordsPart" 
                            :hide-actions="true"
                            content-tag='v-layout'
                            row wrap>
                <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
                    <v-card>
                        <v-card-title>
                            <h4>{{props.item.origWord}}</h4>
                        </v-card-title>
                        <v-divider/>
                        <v-card-text>
                            {{props.item.transWord}}
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn fab dark small color='primary'>
                                <v-icon dark>add</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-data-iterator>
        </v-container>
    </div>
</template>

<script>
    export default {
        props:{
            "wordsPart":{
                type: Array,
                required: true
            }
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style>

</style>
