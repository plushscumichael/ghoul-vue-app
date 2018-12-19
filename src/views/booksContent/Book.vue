<template>
    <v-container grid-list-md v-if='bookGrabber'>
        <v-layout row wrap>
            <v-flex xs12 md10 offset-sm1>
                <book-details :bookDetails ='bookGrabber'/>
            </v-flex>
            <v-flex v-for='bookPartListItem in bookGrabber.parts' :key='bookPartListItem.id' xs12 md10 offset-sm1>
                <book-part-list-item :bookPartListItem='bookPartListItem' :bookPartListItemId='bookPartListItem.bookId'/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BookDetails from '../../components/bookComponents/BookDetails.vue'
    import BookPartListItem from '../../components/bookComponents/BookPartListItem.vue'

    export default {
        components:{
            BookDetails, BookPartListItem
        },
        props:{
            "bookId":{
                type: String,
                required: true
            }
        },
        computed:{
            bookGrabber(){
                return this.$store.getters.getBooks.find(b => b.id == this.bookId)
            }
        }
    }
</script>

<style>

</style>
