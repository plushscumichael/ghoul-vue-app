<template>
    <v-card color='info' class='white--text'>
        <v-container fluid>
            <v-layout row class ='hidden-sm-and-down'>
                <v-flex xs4 md3>
                    <v-img v-bind:src="bookDetails.imageSrc" height='100%'/>
                </v-flex>
                <v-flex xs8 md9>
                    <v-layout column justify-space-between fill-height>
                        <v-card-title>
                            <div>
                                <div class='headline'>{{bookDetails.title}}</div>
                                <div>{{bookDetails.description}}</div>
                                <v-divider class='white'/>
                            </div>
                        </v-card-title>
                        <v-card-title>
                            <v-flex column>
                                <div>Уровень: {{getBookLevel(bookDetails.level)}}</div>
                                <div>{{bookDetails.parts.length}} части</div>
                            </v-flex>
                        </v-card-title>
                        <v-card-title>
                            <v-rating v-model='bookDetails.rating' color='yellow' readonly dense half-increments/>
                        </v-card-title> 
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn class='primary' flat v-if="canLoadBook(bookDetails.id)" :loading="loading" @click='loadBook(bookDetails.id)'>Lock-n-Load</v-btn>
                            <div v-if='getUserDataBook(bookDetails.id)'>
                                <v-icon color='white'> work_outline </v-icon>
                                Book already added {{getBookAddedDate(bookDetails.id)}}
                            </div>
                        </v-card-actions>
                    </v-layout>
                </v-flex>
            </v-layout>

            <div class ='hidden-md-and-up'>
                <v-layout row >
                    <v-flex xs4 md3>
                        <v-img v-bind:src="bookDetails.imageSrc" height='100%'/>
                    </v-flex>
                    <v-flex xs8 md9>
                        <v-card-title>
                            <div>
                                <h4 class='headline'>{{bookDetails.title}}</h4>
                                        </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <div>{{bookDetails.description}}</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <div>Уровень: {{getBookLevel(bookDetails.level)}}, {{bookDetails.parts.length}} части</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                           <v-rating v-model='bookDetails.rating' color='yellow' readonly dense half-increments/>
                            <v-spacer/> 
                            <v-btn class='primary' flat>Lock-n-Load</v-btn>
                         </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    import * as bookHelper from '../../helpers/book.js'
    import {mapGetters} from 'vuex'
    export default {
        props:{
            "bookDetails":{
                type: Object,
                required: true
            }
        },
        data(){
            return {
                loading: false
            }
        },
        computed:{
            ...mapGetters(['isUserAuthenticated', 'userData', 'getProcessing'])
        },
         methods:{
            getBookLevel: bookHelper.getBookLevel,
            canLoadBook(bookId){
                let book = this.getUserDataBook(bookId)
                return this.isUserAuthenticated && !this.getProcessing && !book
            },
            getUserDataBook(bookId){
                return this.userData.books[bookId]
            },
            loadBook(bookId){
                this.$store.dispatch('ADD_USER_BOOK', bookId)
            },
            getBookAddedDate(bookId){
                let book = this.getUserDataBook(bookId)
                return book.addedDate.toLocaleDateString()
            }
        }
    }
</script>

<style>

</style>
