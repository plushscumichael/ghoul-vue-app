<template>
    <v-container grid-list-md v-if='bookPartGrabber'>
        <v-layout row wrap>
            <v-flex xs12 xs10 offset-sm1>
                <book-part-content :contentPart="bookPartGrabber"></book-part-content>
            </v-flex>
            <v-flex xs12 xs10 offset-sm1>
               <!-- <book-part-words :wordsPart=""></book-part-words> -->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BookPartContent from '../../components/bookComponents/BookPartContent.vue'
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
            BookPartContent
        }
    }
</script>

<style>

</style>
