<template>
    <v-container grid-list-md v-if='bookPartGrabber'>
        <v-layout row wrap>
            <v-flex xs12 xs10 offset-sm1>
                <book-part-content :contentPart="bookPartGrabber"/>
            </v-flex>
            <v-flex xs12 xs10 offset-sm1>
               <book-part-words :wordsPart="bookPartGrabber.words"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BookPartContent from '../../components/bookComponents/BookPartContent.vue'
    import BookPartWords from '../../components/bookComponents/BookPartWords.vue'
    export default {
        props:{
            'bookId':{
                type: String,
                required: true
            },
            'partId':{
                type: String,
                required: true
            }
        },
        computed:{
            bookPartGrabber(){
                let val = this.$store.getters.getParts.find(b => b.bookId == this.bookId && b.bookPartId == this.partId)
                return val
            }
        },
        components:{
            BookPartContent, BookPartWords
        }
    }
</script>

<style>

</style>
