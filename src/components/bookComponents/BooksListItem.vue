<template>
     <v-card color='info' class='white--text'>
        <v-container fluid>
            <v-layout row class ='hidden-sm-and-down'>
                <v-flex xs4 md3>
                    <v-card-media v-bind:src="bookListItem.imageSrc" height='100%'/>
                </v-flex>
                <v-flex xs8 md9>
                    <v-card-title>
                        <div>
                            <div class='headline'>{{bookListItem.title}}</div>
                            <div>{{bookListItem.description}}</div>
                            <v-divider class='white'/>
                            <div>Уровень: {{getBookLevel(bookListItem.level)}}, {{bookListItem.parts}} части</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-rating v-model='bookListItem.rating' color='yellow' readonly dense half-increments/>
                        <v-spacer/>
                        <v-btn class='primary' flat>Open the Ga...Book</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>

            <div class ='hidden-md-and-up'>
                <v-layout row >
                    <v-flex xs4 md3>
                        <v-card-media v-bind:src="bookListItem.imageSrc" height='100%'/>
                    </v-flex>
                    <v-flex xs8 md9>
                        <v-card-title>
                            <div>
                                <h4 class='headline'>{{bookListItem.title}}</h4>
                                        </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <div>{{bookListItem.description}}</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <div>Уровень: {{getBookLevel(bookListItem.level)}}, {{bookListItem.parts}} части</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-rating v-model='bookListItem.rating' color='yellow' readonly dense half-increments/>
                            <v-spacer/>
                            <v-btn class='primary' flat>Open the Ga...Book</v-btn>
                         </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    import * as bookHelper from '../../helpers/book.js'
    export default {
        props:{
            'bookListItem':{
                type: Object, 
                required: true
            }
        },
        methods:{
            getBookLevel: bookHelper.getBookLevel //6:00
        }
    }
</script>

<style>

</style>
