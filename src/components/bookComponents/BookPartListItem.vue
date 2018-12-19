<template>
    <v-card color='accent' class='white--text'>
        <v-card-title primary-title="headline">{{bookPartListItem.title}}</v-card-title>
        <v-card-actions>
                <v-spacer/>
                <v-btn flat class='primary'>Open</v-btn> 
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
            "bookPartListItemId":{
                type: String,
                required: true
            }
        }   //27:25
    }
</script>

<style>

</style>
