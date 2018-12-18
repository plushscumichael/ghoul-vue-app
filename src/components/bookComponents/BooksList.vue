<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 
                    offset-sm1 offset-md2>
                <v-container fluid>
                    <v-layout row >
                        <v-flex xs7 md8>
                            <v-text-field label='search' v-model='searchTerm'/>
                        </v-flex>
                        <v-flex xs5 md4>
                            <v-select label='level' :items='levels' multiple v-model='levelTerm'/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex v-for="book in filteredBooks" 
                    :key=book.id 
                    xs12 sm10 md8 
                    offset-sm1 offset-md2>
                <books-list-item :bookListItem='book'/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BooksListItem from './BooksListItem'
    export default {
        data(){
            return {
                searchTerm: null,
                levelTerm: [],
                levels: ['L1','L2','L3','L4','L5','L6','L7','L8']
            }
        },
        computed:{
            books(){
                return this.$store.getters.getBooks
            },
            filteredBooks(){
                let books = this.books
                if (this.searchTerm)
                    books = books.filter(b => b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 
                                            || b.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0)
                
                if(this.levelTerm.length)
                    books = books.filter(b => this.levelTerm.filter(val => b.level.indexOf(val) !== -1).length > 0)
                return books
            }
        },
        components:{
            BooksListItem
        }
    }
</script>

<style>

</style>
