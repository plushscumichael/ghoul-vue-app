<template>
    <v-card color='accent' class='white--text'>
        <v-card-title class='headline'>{{bookPartListItem.title}}</v-card-title>
        <v-card-actions>
                <v-spacer/>
                <v-btn flat class='primary' v-if='isUserBookLoaded' :to="{name:'bookPart',params:{bookId:mainBookId,partId:bookPartListItem.id}}">Open</v-btn> 
        </v-card-actions>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props:{
            "bookPartListItem":{
                type: Object,
                required: true
            },
            "mainBookId":{
                type: String,
                required: true
            }
        },
        computed:{
            
            ...mapGetters(['isUserAuthenticated', 'userData', 'getProcessing']),
            isUserBookLoaded(){
                return this.isUserAuthenticated && !this.getProcessing && !!this.userData.books[this.mainBookId]
            },
        }  
    }
</script>

<style>

</style>
