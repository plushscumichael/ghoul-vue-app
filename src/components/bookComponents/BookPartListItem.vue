<template>
    <v-card color='accent' class='white--text'>
        <v-card-title class='headline'>{{bookPartListItem.title}}</v-card-title>
        <v-card-actions>
                <v-spacer/>
                <v-btn flat class='primary' :to="{name:'bookPart',params:{bookId:mainBookId,partId:bookPartListItem.id}}">Open</v-btn> 
        </v-card-actions>
    </v-card>
</template>

<script>
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
        }   
    }
</script>

<style>

</style>
