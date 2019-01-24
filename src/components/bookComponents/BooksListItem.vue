<template>
     <v-card color='info' class='white--text'>
        <v-container fluid>
            <v-layout row class ='hidden-sm-and-down'>
                <v-flex xs4 md3>
                    <v-img v-bind:src="bookListItem.imageSrc" height='100%'/>
                </v-flex>
                <v-flex xs8 md9>
                    <v-layout column justify-space-between fill-height>
                        <v-card-title>
                            <div>
                                <div class='headline'>{{bookListItem.title}}</div>
                                <div>{{bookListItem.description}}</div>
                                <v-divider class='white'/>
                            </div>
                        </v-card-title>
                        <v-card-title>
                            <v-flex column>
                                <div>Уровень: {{getBookLevel(bookListItem.level)}}</div>
                                <div>{{bookListItem.parts.length}} части</div>
                            </v-flex>
                        </v-card-title>
                        <v-card-title>
                            <v-rating v-model='bookListItem.rating' color='yellow' readonly dense half-increments/>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn class='primary' :to="{name:'book', params:{bookId:bookListItem.id}}" flat>Open the Ga...Book</v-btn>
                        </v-card-actions>
                    </v-layout>
                </v-flex>
            </v-layout>

            <div class ='hidden-md-and-up'>
                <v-layout row >
                    <v-flex xs4 md3>
                        <v-img v-bind:src="bookListItem.imageSrc" height='100%'/>
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
                        <div>Уровень: {{getBookLevel(bookListItem.level)}}, {{bookListItem.parts.length}} части</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-rating v-model='bookListItem.rating' color='yellow' readonly dense half-increments/>
                            <v-spacer/> 
                            <v-btn class='primary' :to="{name:'book', params:{bookId:bookListItem.id}}" flat>Open the Ga...Book</v-btn>
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
            getBookLevel: bookHelper.getBookLevel
        }
    }
</script>

<style>

</style>
